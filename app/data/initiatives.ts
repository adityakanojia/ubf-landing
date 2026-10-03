export interface Initiative {
  id: number;
  name: string;
  tabLabel: string;
  category: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
  footerLabel: string;
  footerSub: string;
  highlights: { bold: string; text: string }[];
}

export const initiatives: Initiative[] = [
  {
    id: 0,
    name: "Vriddhagami",
    tabLabel: "Vriddhagami",
    category: "Growth · Future · Transformation",
    subtitle: "Sanskrit: Vriddha (growth) + Agami (future)",
    description:
      "Vriddhagami transforms learning and healing environments in government schools, hospitals, and orphanages — creating vibrant, youth-centred spaces that nurture focus, creativity, and well-being. A journey of transformation where the next generation steps into a brighter future surrounded by inspiration and possibility.",
    image: "/Website pics/Vriddhagami.JPG",
    imageAlt: "Vriddhagami initiative — transforming learning spaces",
    footerLabel: "Vriddhagami",
    footerSub: "Transforming spaces for the next generation",
    highlights: [
      {
        bold: "Classrooms revitalised",
        text: "with creative designs that spark curiosity and focus in young learners",
      },
      {
        bold: "Paediatric wards brightened",
        text: "to provide comfort, stimulation, and healing energy for young patients",
      },
      {
        bold: "Orphanages supported",
        text: "in building nurturing, safe, and imaginative spaces for youth",
      },
      {
        bold: "",
        text: "A network of passionate artists, volunteers, and creative professionals connected to the cause",
      },
    ],
  },
  {
    id: 1,
    name: "Art Den",
    tabLabel: "Art Den",
    category: "Creative Expression · Under Vriddhagami",
    subtitle: "15-day immersive art programme · Classes 6–9",
    description:
      "A 15-day immersive art programme for young learners from economically challenged backgrounds. We nurture artistic talent, encourage self-expression, and open doors to future creative opportunities — because every young person deserves access to the creative economy, regardless of background.",
    image: "/Website pics/Art Den.jpg",
    imageAlt: "Art Den — immersive art programme for young learners",
    footerLabel: "Art Den",
    footerSub: "Under Vriddhagami · Classes 6–9",
    highlights: [
      {
        bold: "Hands-on workshops",
        text: "in painting, drawing, and sculpture led by working artists",
      },
      {
        bold: "Ongoing mentorship",
        text: "and updates on competitions, scholarships, and events",
      },
      {
        bold: "Art Hubs",
        text: "— accessible creative spaces established in major cities for continued practice",
      },
      {
        bold: "Community partnerships",
        text: "with schools and local groups to reach youth most in need",
      },
    ],
  },
  {
    id: 2,
    name: "Destino Arte",
    tabLabel: "Destino Arte",
    category: "Wall Art · Remote Outreach · Cultural Identity",
    subtitle: "Vibrant wall art for remote schools & institutions",
    description:
      "Bringing vibrant wall art to remote schools, orphanages, and institutions — transforming dull walls into inspiring canvases that spark imagination, reflect local culture, and make every young person feel that their environment belongs to them. Destino Arte reaches where others don't.",
    image: "/Website pics/Destino Arte.HEIC",
    imageAlt: "Destino Arte — vibrant wall art in remote schools",
    footerLabel: "Destino Arte",
    footerSub: "Under Vriddhagami · Wall Art · Remote Schools",
    highlights: [
      {
        bold: "Creative Spaces",
        text: "— artistic walls that tell stories of culture, aspiration, and pride",
      },
      {
        bold: "Remote Outreach",
        text: "— bringing colour to communities that receive the least investment",
      },
      {
        bold: "Collaboration",
        text: "— artists, volunteers, and communities as co-creators of their own spaces",
      },
      {
        bold: "Cultural Connection",
        text: "— every design reflects local heritage, languages, and community identity",
      },
    ],
  },
  {
    id: 3,
    name: "Arivio",
    tabLabel: "Arivio",
    category: "Knowledge in Action · STEAM · Rural Learning Hubs",
    subtitle: "Tamil: Arivu (knowledge) — inclusive STEAM education",
    description:
      "Rooted in the Right to Education, Arivio delivers inclusive, high-quality STEAM learning to every young learner — without bias or barriers. Through hands-on, real-world experiences in rural learning hubs, we equip the next generation with ethical values, curiosity, and future-ready skills for the Fourth Industrial Revolution.",
    image: "/Website pics/Arivio.jpg",
    imageAlt: "Arivio — STEAM education in rural learning hubs",
    footerLabel: "Arivio",
    footerSub: "Knowledge in Action · STEAM · Rural Hubs",
    highlights: [
      {
        bold: "Equitable STEAM",
        text: "— high-quality education without bias or barriers, accessible to all learners",
      },
      {
        bold: "Hands-on learning",
        text: "— real-world, experiential education in science, technology, engineering, arts & maths",
      },
      {
        bold: "Rural Learning Hubs",
        text: "— bringing STEAM resources and teaching to underserved communities",
      },
      {
        bold: "4IR Skills",
        text: "— preparing the next generation to thrive in the modern world and beyond",
      },
    ],
  },
  {
    id: 4,
    name: "InspiraZ",
    tabLabel: "InspiraZ",
    category: "Campus Leaders · UBF Flagship Programme",
    subtitle: "Igniting leadership in today's youth changemakers",
    description:
      "UBF's flagship Campus Leaders Programme — crafted to ignite the spark of leadership in today's youth. Partnering with academic institutions, InspiraZ designs sustainable outreach initiatives and dynamic engagement programmes that nurture creativity, collaboration, and purpose-driven community impact.",
    image: "/Website pics/InspiraZ.JPG",
    imageAlt: "InspiraZ — campus leaders programme",
    footerLabel: "InspiraZ",
    footerSub: "UBF Flagship · Campus Leaders Programme",
    highlights: [
      {
        bold: "Leadership Development",
        text: "— cultivating civic responsibility and leadership skills in young people",
      },
      {
        bold: "Sustainable Initiatives",
        text: "— designing long-term outreach programmes that address real community needs",
      },
      {
        bold: "Innovative Problem-Solving",
        text: "— encouraging youth to create solutions for local and global challenges",
      },
      {
        bold: "Community Impact",
        text: "— empowering young leaders to drive meaningful, measurable change",
      },
    ],
  },
  {
    id: 5,
    name: "BlueSweep",
    tabLabel: "BlueSweep",
    category: "Eco Action · Coastal Cleanup · Waste-to-Wealth",
    subtitle: "Youth-led environmental action at scale",
    description:
      "BlueSweep is an eco-driven youth initiative inspiring the next generation to take the lead in plastic cleanup and environmental action. By mobilising young people from schools and colleges, BlueSweep protects oceans, marine life, and land animals — while unlocking waste-to-wealth innovation for youth entrepreneurs.",
    image: "/Website pics/Bluesweep.jpeg",
    imageAlt: "BlueSweep — youth-led coastal cleanup and eco action",
    footerLabel: "BlueSweep",
    footerSub: "Eco-Driven Youth Initiative · Environmental Action",
    highlights: [
      {
        bold: "Youth Engagement",
        text: "— mobilising school and college communities for city and coastal cleanup drives",
      },
      {
        bold: "Waste to Wealth",
        text: "— educating young participants on turning waste into business opportunities",
      },
      {
        bold: "Ocean & Wildlife Safety",
        text: "— reducing plastic threats to marine life, land animals, and ecosystems",
      },
      {
        bold: "Global Partnerships",
        text: "— collaborating with national and international organisations for wider impact",
      },
    ],
  },
];
