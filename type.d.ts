interface PortraitStartYear {
  startYear: number;
}

interface PortraitImage {
  urlThumbnail: string;
}

interface PortraitCreator {
  label: string;
}

interface PortraitData {
  title: string;
  materialsAndTechniques: string;
  dateCreated: PortraitStartYear[];
  image: PortraitImage[];
  creator: PortraitCreator[];
}
