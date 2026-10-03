export interface UniqueCard {
  icon: string;
  badge: string;
  title: string;
  description: string;
  tags: string[];
}

export const uniqueCards: UniqueCard[] = [
  {
    icon: "🏫",
    badge: "First in India",
    title: "Healing Spaces Through Art",
    description:
      "UBF is among the first youth-led organisations in India to systematically transform paediatric hospital wards and government school classrooms through volunteer-driven wall art and creative redesign — making healing and learning environments genuinely inspiring for the next generation.",
    tags: ["Vriddhagami", "Destino Arte", "Art Den"],
  },
  {
    icon: "🌾",
    badge: "Rural-First Model",
    title: "STEAM Education in India's Last Mile",
    description:
      "Arivio's rural learning hub model takes STEAM education directly into communities that are completely bypassed by urban-focused edtech platforms — no app required, no internet dependency, no barriers to entry. Designed to work in India's lowest-connectivity environments and built around local languages and contexts.",
    tags: ["Arivio", "4IR Ready", "Rural Outreach"],
  },
  {
    icon: "♻️",
    badge: "Youth-Led Eco Model",
    title: "Waste-to-Wealth Environmental Education",
    description:
      "BlueSweep doesn't just clean coastlines — it teaches young participants how plastic waste can become a business opportunity. This waste-to-wealth education model, embedded within a civic cleanup drive, is a uniquely UBF approach to turning environmental action into economic thinking for the next generation.",
    tags: ["BlueSweep", "Eco Action", "Youth Enterprise"],
  },
  {
    icon: "🎯",
    badge: "Campus-to-Community",
    title: "Campus Leaders Driving Real Community Impact",
    description:
      "InspiraZ is not a leadership workshop or a certificate programme — it is a structured system for turning campus youth into active community changemakers. Partnering directly with academic institutions, it creates measurable, sustained community outcomes while building the next generation of civic leaders.",
    tags: ["InspiraZ", "Leadership", "Community Impact"],
  },
  {
    icon: "🎨",
    badge: "Need-Based Access",
    title: "A Creative Economy On-Ramp for Underserved Youth",
    description:
      "Art Den is not an after-school activity — it is a deliberate 15-day immersive entry point into the creative economy for young people from economically challenged backgrounds who have no other pathway into arts education. With need-based access ensuring no one is turned away, the combination of hands-on training, city-wide Art Hubs, and ongoing mentorship makes it genuinely one of a kind.",
    tags: ["Art Den", "Creative Economy", "Need-Based Access"],
  },
  {
    icon: "🌍",
    badge: "Citywide Scale",
    title: "UBF Green Chennai — India's Largest Youth Plantation Drive",
    description:
      "Targeting 1–3 lakh native saplings planted in a single day across 20–25 simultaneous sites, with a Guinness World Records attempt, GCC endorsement, and 3,000 volunteers — organised entirely by a youth-led non-profit. There is no comparable event in Tamil Nadu's history, and none organised at this scale by a Section 8 NGO in India.",
    tags: ["UBF Green Chennai", "GWR Attempt", "Environmental Action"],
  },
];
