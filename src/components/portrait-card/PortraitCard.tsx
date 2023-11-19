import "./style.PortraitCard.scss";
import Image, { StaticImageData } from "next/image";

interface PortraitCardProp {
  id: string;
  src: StaticImageData;
  alt: string;
  author: string;
  year: number;
  paintType: string;
}

export default function PortraitCard({
  id,
  src,
  alt,
  author,
  year,
  paintType,
}: PortraitCardProp): JSX.Element {
  return (
    <div id={id} className="card-wrapper">
      <Image src={src} alt={alt} className="portrait-image" />
      <div className="text-wrapper">
        <div className="portrait-info">
          <span className="year">{year}</span>
          <span className="paint-type">{paintType}</span>
        </div>
        <span className="author">{author}</span>
      </div>
    </div>
  );
}
