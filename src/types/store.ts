import { Breed, Breeds } from './breeds';
import { Favourite, Favourites } from './favourites';
import { Image, Images } from './images';

type Store = {
  images: Images;
  setImages: React.Dispatch<React.SetStateAction<Images>>;
  imagesLoading: boolean;
  setImagesLoading: React.Dispatch<React.SetStateAction<boolean>>;
  getStoreImage: (id: string | number) => Image | undefined;
  addStoreImage: (image: Image) => void;
  deleteStoreImage: (id: string | number) => void;
  editStoreImage: (id: string | number, data: Image) => void;
  breeds: Breeds;
  setBreeds: React.Dispatch<React.SetStateAction<Breeds>>;
  breedsLoading: boolean;
  setBreedsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  getStoreBreed: (id: string | number) => Breed | undefined;
  addStoreBreed: (breed: Breed) => void;
  deleteStoreBreed: (id: string | number) => void;
  editStoreBreed: (id: string | number, data: Breed) => void;
  favourites: Favourites;
  setFavourites: React.Dispatch<React.SetStateAction<Favourites>>;
  favouritesLoading: boolean;
  setFavouritesLoading: React.Dispatch<React.SetStateAction<boolean>>;
  getStoreFavourite: (id: string | number) => Favourite | undefined;
  addStoreFavourite: (favourite: Favourite) => void;
  deleteStoreFavourite: (id: string | number) => void;
  editStoreFavourite: (id: string | number, data: Favourite) => void;
  isAllFavouritesFetched: boolean;
  setIsAllFavouritesFetched: React.Dispatch<React.SetStateAction<boolean>>;
};

export type { Store };
