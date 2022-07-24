import { Collapse, Empty, Image, Input, Modal, notification, Spin } from 'antd';
import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { getImages } from '../../../api/images';
import { CaretRightOutlined } from '@ant-design/icons';
import { Images } from '../../../types';
import { useStoreContext } from '../../../context/Store';
import { BreedInfo } from '../../Images/components/BreedInfo';

const BreedsModal = () => {
  const navigate = useNavigate();
  const { id: breedId } = useParams<'id'>();
  const { name: breedName } = useParams<'name'>();

  const { getStoreBreed } = useStoreContext();

  const location = useLocation();

  const [breedImages, setBreedImages] = React.useState<Images>([]);
  const [breedImagesLoading, setBreedImagesLoading] =
    React.useState<boolean>(false);

  const breed = breedId ? getStoreBreed(breedId) : undefined;

  React.useEffect(() => {
    if (breedId) {
      if (!breedImages.length) {
        setBreedImagesLoading(true);
        getImages({ breed_id: breedId, limit: 10 })
          .then((res) => {
            setBreedImages(res);
          })
          .catch((e) => {
            notification.error({
              message: e.message,
              description: e.response?.data.message || ''
            });
          })
          .finally(() => {
            setBreedImagesLoading(false);
          });
      }
    }
  }, []);

  const onClose = () => {
    navigate(`/breeds${location.search}`);
  };

  return (
    <Modal
      className='breeds-modal'
      onCancel={onClose}
      visible
      footer={false}
      destroyOnClose
      width='80%'
      title={breedName}>
      <div style={{ textAlign: 'center' }}>
        <Collapse
          bordered={false}
          expandIcon={({ isActive }) => (
            <CaretRightOutlined rotate={isActive ? 90 : 0} />
          )}>
          <Collapse.Panel header='Breed Info' key='breed_info'>
            {breed ? (
              <BreedInfo breed={breed} />
            ) : (
              <Empty description='No breed info' />
            )}
          </Collapse.Panel>
        </Collapse>
        {!breedImagesLoading ? (
          <div className='gallery'>
            {!!breedImages.length ? (
              <Image.PreviewGroup>
                {breedImages.map((image) => (
                  <Image
                    key={image.id}
                    className='gallery__img'
                    height={300}
                    src={image.url}
                  />
                ))}
              </Image.PreviewGroup>
            ) : (
              <Empty />
            )}
          </div>
        ) : (
          <Spin size='large' />
        )}
      </div>
    </Modal>
  );
};

export { BreedsModal };
