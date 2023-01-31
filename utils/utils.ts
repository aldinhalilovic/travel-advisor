export interface IMenuContainerProps {
  image: any;
  title: string;
  choice: string;
  setChoice: React.Dispatch<React.SetStateAction<string>>;
}

export interface IItemCardContainerProps {
  imageSrc: string;
  title: string;
  location: string;
  data: any;
}

export interface ICuisini {
  key: string;
  name: string;
}

export interface IGetPlaceData {
  place: string;
  lat?: string;
  long?: string;
}
