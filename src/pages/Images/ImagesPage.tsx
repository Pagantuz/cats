import { Button, notification, Spin } from 'antd';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { getImages } from '../../api/images';
import { useStoreContext } from '../../context/Store';

const ImagesPage: React.FC = () => {
  const { images, setImages, imagesLoading, setImagesLoading } =
    useStoreContext();
  const [moreLoading, setMoreLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (!images.length) {
      setImagesLoading(true);
      getImages({ limit: 10 })
        .then((res) => {
          setImages(res);
        })
        .catch((e) => {
          notification.error({
            message: e.message,
            description: e.response?.data.message || ''
          });
        })
        .finally(() => {
          setImagesLoading(false);
        });
    }
  }, []);

  const onLoadMore = () => {
    setMoreLoading(true);
    getImages({ limit: 10 })
      .then((res) => {
        setImages((prev) => [...res, ...prev]);
      })
      .catch((e) => {
        notification.error({
          message: e.message,
          description: e.response?.data.message || ''
        });
      })
      .finally(() => {
        setMoreLoading(false);
      });
  };

  return !imagesLoading ? (
    <div className='images'>
      <Button
        type='primary'
        size='large'
        block
        onClick={onLoadMore}
        loading={moreLoading}>
        Load more
      </Button>
      <div className='gallery'>
        {images.map((image) => (
          <Link key={image.id} to={`/images/${image.id}`}>
            <img
              className='gallery__img'
              width={300}
              height={300}
              src={image.url}
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

export { ImagesPage };
