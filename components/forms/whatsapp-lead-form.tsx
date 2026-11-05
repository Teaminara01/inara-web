"use client";

/**
 * Lead form that submits via WhatsApp (no backend, see .claude/BACKEND.md).
 * On submit: validate → fill the message template → open wa.me in a new tab.
 * All labels, fields and the template come from content/forms/*.ts.
 */
import { useSearchParams } from "next/navigation";
import { useId, useRef, useState, type FormEvent } from "react";
import type { ResolvedFormField, ResolvedLeadForm } from "@/content/schema";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";
import { buildWhatsAppUrl, fillTemplate } from "@/lib/whatsapp";

type Props = {
  form: ResolvedLeadForm;
  whatsappNumber: string;
  /** Pre-selected value for the "service" field. */
  initialService?: string;
};

type Values = Record<string, string>;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const TEL = /^\+?[\d\s()-]{7,20}$/;

function validate(fields: ResolvedFormField[], values: Values, errors: ResolvedLeadForm["errors"]) {
  const result: Record<string, string> = {};
  for (const field of fields) {
    const value = values[field.name]?.trim() ?? "";
    if (field.required && !value) result[field.name] = errors.required;
    else if (value && field.type === "email" && !EMAIL.test(value)) result[field.name] = errors.email;
    else if (value && field.type === "tel" && !TEL.test(value)) result[field.name] = errors.tel;
  }
  return result;
}

export function WhatsAppLeadForm({ form, whatsappNumber, initialService }: Props) {
  const formId = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const [values, setValues] = useState<Values>(() => {
    const serviceField = form.fields.find((f) => f.name === "service");
    const valid = initialService && serviceField?.options?.includes(initialService);
    return valid ? { service: initialService } : ({} as Values);
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [openedUrl, setOpenedUrl] = useState<string | null>(null);

  const update = (name: string, value: string) => {
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const found = validate(form.fields, values, form.errors);
    setErrors(found);

    const firstInvalid = form.fields.find((f) => found[f.name]);
    if (firstInvalid) {
      formRef.current?.querySelector<HTMLElement>(`[name="${firstInvalid.name}"]`)?.focus();
      return;
    }

    const url = buildWhatsAppUrl(whatsappNumber, fillTemplate(form.whatsappTemplate, values));
    setOpenedUrl(url);
    // Called inside the submit handler (user gesture) so popup blockers allow it.
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        {form.fields.map((field) => (
          <Field
            key={field.name}
            id={`${formId}-${field.name}`}
            field={field}
            value={values[field.name] ?? ""}
            error={errors[field.name]}
            onChange={(value) => update(field.name, value)}
          />
        ))}
      </div>

      <Button type="submit" size="lg" className="w-full sm:w-auto">
        <WhatsAppIcon className="size-5" />
        {form.submitLabel}
      </Button>

      <p className="text-sm text-muted">{form.privacyNote}</p>

      {openedUrl && (
        <p role="status" className="rounded-xl bg-surface p-4 text-sm">
          <a href={openedUrl} target="_blank" rel="noopener noreferrer" className="font-semibold underline decoration-brand decoration-2 underline-offset-4">
            {form.fallbackLabel}
          </a>
        </p>
      )}
    </form>
  );
}

type FieldProps = {
  id: string;
  field: ResolvedFormField;
  value: string;
  error?: string;
  onChange: (value: string) => void;
};

function Field({ id, field, value, error, onChange }: FieldProps) {
  const errorId = `${id}-error`;
  const wide = field.type === "textarea" || field.type === "select";
  const control = cn(
    "w-full rounded-xl border bg-card px-4 py-3 text-base outline-none transition-colors focus:border-fg focus:ring-2 focus:ring-brand",
    error ? "border-danger" : "border-line",
  );
  const common = {
    id,
    name: field.name,
    required: field.required,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error ? errorId : undefined,
    className: control,
  };

  return (
    <div className={cn(wide && "sm:col-span-2")}>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold">
        {field.label}
        {field.required && (
          <span className="text-danger" aria-hidden="true">
            {" "}*
          </span>
        )}
      </label>

      {field.type === "textarea" ? (
        <textarea
          {...common}
          rows={5}
          maxLength={field.maxLength}
          placeholder={field.placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      ) : field.type === "select" ? (
        <select {...common} value={value} onChange={(e) => onChange(e.target.value)}>
          <option value="" disabled>
            {field.placeholder}
          </option>
          {field.options?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          {...common}
          type={field.type}
          maxLength={field.maxLength}
          placeholder={field.placeholder}
          autoComplete={field.autoComplete}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      )}

      {error && (
        <p id={errorId} className="mt-2 text-sm text-danger">
          {error}
        </p>
      )}
    </div>
  );
}

/**
 * Reads `?service=` from the URL to pre-select the service.
 * Must be rendered inside <Suspense> (useSearchParams), with
 * <WhatsAppLeadForm> (no prefill) as the fallback so the static shell
 * already contains a working form.
 */
export function WhatsAppLeadFormFromUrl(props: Omit<Props, "initialService">) {
  const service = useSearchParams().get("service") ?? undefined;
  return <WhatsAppLeadForm key={service} {...props} initialService={service} />;
}
