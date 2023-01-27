export interface IMenuContainerProps {
  image: any;
  title: string;
  choice: string;
  setChoice: React.Dispatch<React.SetStateAction<string>>;
  refetch: any;
}

export interface IItemCardContainerProps {
  imageSrc: string;
  title: string;
  location: string;
}
