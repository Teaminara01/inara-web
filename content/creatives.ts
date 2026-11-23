/**
 * Campaign creatives gallery on /work.
 * Source: content-info/inara-brochure-png (collateral + "Creatives" slides).
 * Images were cropped from the brochure into public/work/creatives/; swap in
 * the original artwork (same filenames) when available.
 */
import type { CreativeBrand, CreativesContent } from "./schema";

const dir = "/work/creatives";

/** Helper: `n` images named `<slug>-1.webp` … with matching alt text. */
function images(slug: string, alts: string[]) {
  return alts.map((alt, i) => ({ src: `${dir}/${slug}-${i + 1}.webp`, alt }));
}

const brands: CreativeBrand[] = [
  {
    brand: "Jalsutra",
    industry: "Food and Beverage",
    instagram: "https://www.instagram.com/jalsutraofficial/",
    images: images("jalsutra", [
      "Jalsutra mineral water bottles in a gym with the line “Fuel your active life”",
      "Tennis player reaching for a Jalsutra bottle: “Hydration that keeps you ahead”",
      "Friends raising glasses with a Jalsutra bottle for Friendship Day",
    ]),
  },
  {
    brand: "Icy Fusion",
    industry: "Food and Beverage",
    instagram: "https://www.instagram.com/icy_fusion/",
    images: images("icy-fusion", [
      "Icy Fusion kesar pista ice cream tub at a laptop: “Built for the grind”",
      "Two Icy Fusion chocolate sundaes for a New Year wishlist post",
      "Waffle with chocolate ice cream: “Waffles worth drooling over”",
    ]),
  },
  {
    brand: "Mewa Sutra",
    industry: "Food and Beverage",
    instagram: "https://www.instagram.com/mewasutra/",
    images: images("mewa-sutra", [
      "Mewa Sutra granola pack with milk and fruit: “A better snack, a better you”",
      "Festive spread of dry fruits with a Mewa Sutra pack: “Light on the stomach, rich in flavour”",
      "Mewa Sutra seed pack on a rooftop at night in a superhero-themed post",
    ]),
  },
  {
    brand: "Kimli",
    industry: "Hospitality",
    instagram: "https://www.instagram.com/kimli_thechineserestaurant/",
    images: images("kimli", [
      "Kimli prawn noodles: “Choose what you love, indulge in what you crave”",
      "Kimli winter specials with dumplings: “Steam, spice, and everything nice”",
      "Kimli red-and-gold post introducing a curated duck menu",
    ]),
  },
  {
    // One brochure slide: "Marketing collateral designs for brands we have worked with".
    brand: "Uno's Chicago, AltAir, Publik & Anjali Jewellers",
    industry: "Marketing collateral",
    images: [
      {
        src: `${dir}/unos-chicago-1.webp`,
        alt: "Uno Pizzeria & Grill hangout lunch menu with a deep-dish pizza",
        width: 569,
        height: 382,
      },
      {
        src: `${dir}/altair-1.webp`,
        alt: "Capella at AltAir Sunday House Brunch poster with spices on a dark table",
        width: 318,
        height: 386,
      },
      {
        src: `${dir}/publik-1.webp`,
        alt: "Publik combo offer poster with beer bucket and mocktail combos",
        width: 382,
        height: 386,
      },
      {
        src: `${dir}/anjali-jewellers-1.webp`,
        alt: "Anjali Jewellers ruby necklace over Kolkata lettering and a yellow taxi: “The city with a golden heart”",
        width: 552,
        height: 275,
      },
      {
        src: `${dir}/altair-2.webp`,
        alt: "Capella at AltAir Friday Night techno event banner featuring DJ Ankytrixx",
        width: 500,
        height: 277,
      },
    ],
  },
  {
    brand: "Medi Daddy Polyclinic",
    industry: "Healthcare",
    instagram: "https://www.instagram.com/medidaddy_polyclinic/",
    images: images("medi-daddy", [
      "Medi Daddy post to book a child specialist consultation",
      "Family at home: “Feeling fine? That doesn't always mean you're healthy”",
      "Hands clasped: “Your family's health, all under one roof”",
    ]),
  },
  {
    brand: "Dr. Chandrani Pal",
    industry: "Healthcare",
    instagram: "https://www.instagram.com/dr.chandrani_pal/",
    images: images("dr-chandrani-pal", [
      "Pregnant woman doing yoga: safe pregnancy exercises post",
      "Expectant mother outdoors: “Your pregnancy journey, guided with expert care”",
      "Bandaged hand for World First Aid Day: “Learn. Act. Save lives”",
    ]),
  },
  {
    brand: "Dr. Priya Rajbansh",
    industry: "Healthcare",
    instagram: "https://www.instagram.com/dr.priyarajbansh_dermatologist/",
    images: images("dr-priya-rajbansh", [
      "Split young and ageing face: anti-wrinkle skincare treatment post",
      "“7 reasons why you should get a Hydra Facial” skincare post",
      "Woman with a hairbrush: “Losing hair?” hair-fall treatment post",
    ]),
  },
  {
    brand: "Dr. Rahul Taparia",
    industry: "Healthcare",
    instagram: "https://www.instagram.com/dr_rahul_taparia/",
    images: images("dr-rahul-taparia", [
      "Sugar cube in a trap: “Sugar looks sweet… but it's a trap” diabetes post",
      "“Don't ignore diabetic foot health” awareness post",
      "Red heart in a doctor's hand for World Heart Day",
    ]),
  },
  {
    brand: "Dr. Vikas Modi",
    industry: "Healthcare",
    instagram: "https://www.instagram.com/dr.vikasmodiortho/",
    images: images("dr-vikas-modi", [
      "Older man with knee pain: why orthopaedic issues rise with age",
      "“Pain?” post listing the orthopaedic conditions treated",
      "Revision hip replacement benefits illustrated on an anatomy figure",
    ]),
  },
  {
    brand: "Dr. Ujjwal Kejariwal",
    industry: "Healthcare",
    instagram: "https://www.instagram.com/drujjwalkejariwal/",
    images: images("dr-ujjwal-kejariwal", [
      "Man on a sofa with back pain from phone use: posture tips post",
      "“Back pain? Remove your pain today!” consultation post",
      "Lungs and cigarette for World No Tobacco Day",
    ]),
  },
  {
    brand: "Investment Guru",
    industry: "Finance",
    instagram: "https://www.instagram.com/investment_guru_surajitt/",
    images: images("investment-guru", [
      "Coin jar with a sapling: “You don't need a fortune to start building one” SIP post",
      "Chess pieces: “When your strategy needs more than a SIP”",
      "Retired couple: “SWP: make your money work for you”",
    ]),
  },
  {
    // The brochure's Instagram link for this slide points to another brand, so none is shown.
    brand: "Blueeye Academy",
    industry: "Education",
    images: images("blueeye-academy", [
      "Two friends with backpacks: “One recommendation can change two careers”",
      "Mentor and student for Guru Purnima: “Today's guidance, tomorrow's success”",
      "Superhero on a rooftop with a laptop: “Maybe it's time your career got a brand new day”",
    ]),
  },
];

export const creatives = {
  title: "Creatives",
  intro:
    "Social, campaign, and collateral designs for brands we've worked with across hospitality, food and beverage, healthcare, finance, and education.",
  instagramLabel: "View on Instagram",
  brands,
} satisfies CreativesContent;
