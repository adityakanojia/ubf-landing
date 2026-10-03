import Image from "next/image";
import { galleryImages } from "../data/gallery";

export default function Gallery() {
  return (
    <div id="gallery">
      <div className="galg">
        {galleryImages.map((img, idx) => (
          <div
            key={idx}
            className={`gi rv ${img.tall ? "gitall" : ""} d${(idx % 2) + 1}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes={img.tall ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 25vw"}
              style={{ objectFit: "cover" }}
              unoptimized={img.src.toLowerCase().endsWith(".dng") || img.src.toLowerCase().endsWith(".heic")}
            />
            <div className="gilbl">{img.label}</div>
          </div>
        ))}
      </div>
      <div className="galfooter">
        <span className="gft">
          Our work <span>across India →</span>
        </span>
        <a
          href="#cta"
          className="btn-o"
          style={{ fontSize: "13px", padding: "10px 20px" }}
        >
          Partner with us →
        </a>
      </div>
    </div>
  );
}
