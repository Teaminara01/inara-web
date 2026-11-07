/**
 * Brands we've worked with, grouped by industry.
 * Source: content-info/inara-brochure-png ("Experience That Powers Us" slide).
 * Shown on the home and About pages.
 */
import type { ClientsContent } from "./schema";

export const clients = {
  title: "Experience that powers us",
  intro: "Selected brand work across hospitality, food and beverage, healthcare, and lifestyle.",
  groups: [
    {
      industry: "Hospitality",
      brands: [
        "Holiday Inn Kolkata",
        "Sarovar Portico Kolkata, Rajarhat",
        "Refinery 091",
        "Bonne Femme",
        "Hotel Hindustan International",
        "MS Bar",
        "Pub 97",
        "Dosa Coffee",
        "Veneto",
        "Lord of the Drinks",
        "AltAir",
        "Uno's Chicago",
      ],
    },
    {
      industry: "Food and Beverage",
      brands: ["Jalsutra", "Icy Fusion", "Creamos", "Amma's Kitchen", "Calcutta Gin", "Blue Vista"],
    },
    {
      industry: "Healthcare",
      brands: [
        "Genome",
        "Neotia Getwel",
        "Neotia Mediplus",
        // Brochure client list spells "Paul"; her own creatives and Instagram use "Pal".
        "Dr. Chandrani Pal",
        "Dr. Shabnam Parvin",
        "Medi Daddy",
        "New Life Fertility",
      ],
    },
  ],
  // Add real logos here as they arrive (light/greyscale-friendly SVG or transparent PNG
  // in public/brands/). Keys must match a name in `groups` exactly, e.g.:
  //   "Jalsutra": "/brands/jalsutra.svg",
  logos: {},
} satisfies ClientsContent;
