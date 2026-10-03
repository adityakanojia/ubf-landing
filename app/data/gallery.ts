export interface GalleryImage {
  src: string;
  alt: string;
  label: string;
  tall?: boolean;
}

export const galleryImages: GalleryImage[] = [
  {
    src: "/Website pics/Gallery/IMG_8245.JPG",
    alt: "Youth at work in UBF initiative",
    label: "Next generation at work",
    tall: true,
  },
  {
    src: "/Website pics/Gallery/IMG-20230108-WA0045.jpg",
    alt: "STEAM education session",
    label: "STEAM education",
  },
  {
    src: "/Website pics/Gallery/P1250770 (1).jpg",
    alt: "Community drives in action",
    label: "Community drives",
  },
  {
    src: "/Website pics/Bluesweep.jpeg",
    alt: "BlueSweep coastal cleanup initiative",
    label: "BlueSweep in action",
  },
  {
    src: "/Website pics/InspiraZ.JPG",
    alt: "InspiraZ campus leaders programme",
    label: "InspiraZ leaders",
  },
];
