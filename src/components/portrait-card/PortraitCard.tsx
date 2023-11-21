import "./style.PortraitCard.scss";
import Image from "next/image";

export default function PortraitCard({
  title,
  materialsAndTechniques,
  dateCreated,
  image,
  creator,
}: PortraitData): JSX.Element {
  return (
    <div className="card-wrapper">
      <div className="image-wrapper">
        <Image
          src={image[0].urlThumbnail}
          alt={`Portrait iamge of ${title}`}
          className="portrait-image"
          width={250}
          height={250}
        />
      </div>
      <div className="text-wrapper">
        <div className="portrait-info">
          <span className="year">{dateCreated[0].startYear}</span>
          <span className="paint-type">{materialsAndTechniques}</span>
        </div>
        <span className="title">{title}</span>
        <span className="author">{creator[0].label}</span>
      </div>
    </div>
  );
}
