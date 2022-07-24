import React from 'react';
import { useList } from '../hooks/useList';
import { Breed, Favourite, Image, Store } from '../types';

const StoreContext = React.createContext<Store>({} as Store);
const useStoreContext = () => React.useContext(StoreContext);

const StoreContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAllFavouritesFetched, setIsAllFavouritesFetched] =
    React.useState<boolean>(false);

  const [
    images,
    setImages,
    imagesLoading,
    setImagesLoading,
    {
      get: getStoreImage,
      add: addStoreImage,
      remove: deleteStoreImage,
      edit: editStoreImage
    }
  ] = useList<Image>();

  const [
    breeds,
    setBreeds,
    breedsLoading,
    setBreedsLoading,
    {
      get: getStoreBreed,
      add: addStoreBreed,
      remove: deleteStoreBreed,
      edit: editStoreBreed
    }
  ] = useList<Breed>();

  const [
    favourites,
    setFavourites,
    favouritesLoading,
    setFavouritesLoading,
    {
      get: getStoreFavourite,
      add: addStoreFavourite,
      remove: deleteStoreFavourite,
      edit: editStoreFavourite
    }
  ] = useList<Favourite>();

  const store = React.useMemo<Store>(
    () => ({
      images,
      setImages,
      imagesLoading,
      setImagesLoading,
      getStoreImage,
      addStoreImage,
      deleteStoreImage,
      editStoreImage,
      breeds,
      setBreeds,
      breedsLoading,
      setBreedsLoading,
      getStoreBreed,
      addStoreBreed,
      deleteStoreBreed,
      editStoreBreed,
      favourites,
      setFavourites,
      favouritesLoading,
      setFavouritesLoading,
      getStoreFavourite,
      addStoreFavourite,
      deleteStoreFavourite,
      editStoreFavourite,
      isAllFavouritesFetched,
      setIsAllFavouritesFetched
    }),
    [
      images,
      setImages,
      imagesLoading,
      setImagesLoading,
      getStoreImage,
      addStoreImage,
      deleteStoreImage,
      editStoreImage,
      breeds,
      setBreeds,
      breedsLoading,
      setBreedsLoading,
      getStoreBreed,
      addStoreBreed,
      deleteStoreBreed,
      editStoreBreed,
      favourites,
      setFavourites,
      favouritesLoading,
      setFavouritesLoading,
      getStoreFavourite,
      addStoreFavourite,
      deleteStoreFavourite,
      editStoreFavourite,
      isAllFavouritesFetched,
      setIsAllFavouritesFetched
    ]
  );

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export { StoreContextProvider, useStoreContext };
