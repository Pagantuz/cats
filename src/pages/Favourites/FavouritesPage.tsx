import { notification, Spin } from 'antd';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { getFavourites } from '../../api/favourites';
import { useStoreContext } from '../../context/Store';

const FavouritesPage: React.FC = () => {
  const {
    favourites,
    setFavourites,
    favouritesLoading,
    setFavouritesLoading,
    isAllFavouritesFetched,
    setIsAllFavouritesFetched
  } = useStoreContext();

  React.useEffect(() => {
    if (!isAllFavouritesFetched) {
      setFavouritesLoading(true);
      getFavourites()
        .then((res) => {
          setFavourites(res);
          setIsAllFavouritesFetched(true);
        })
        .catch((e) => {
          notification.error({
            message: e.message,
            description: e.response?.data.message || ''
          });
        })
        .finally(() => {
          setFavouritesLoading(false);
        });
    }
  }, []);

  return !favouritesLoading ? (
    <div className='favourites'>
      <div className='gallery'>
        {favourites.map((favourite) => (
          <Link key={favourite.id} to={`/favourites/${favourite.id}`}>
            <img
              className='gallery__img'
              width={300}
              height={300}
              src={favourite.image.url}
            />
          </Link>
        ))}
      </div>
      <Outlet />
    </div>
  ) : (
    <Spin
      size='large'
      style={{ marginTop: 'calc(((100vh - 48px) - 46px) / 2)' }}
    />
  );
};

export { FavouritesPage };
