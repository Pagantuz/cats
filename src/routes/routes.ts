import React from 'react';
import {
  FileImageOutlined,
  FileSearchOutlined,
  HeartOutlined
} from '@ant-design/icons';
import { ImageModal } from '../pages/Images/components';
import { BreedsModal } from '../pages/Breeds/components';
import { FavouritesModal } from '../pages/Favourites/components/FavouritesModal';

const BreedsPage = React.lazy(() => import('../pages/Breeds'));
const ImagesPage = React.lazy(() => import('../pages/Images'));
const FavouritesPage = React.lazy(() => import('../pages/Favourites'));

type RoutesType = {
  path: string;
  element: React.LazyExoticComponent<React.FC<{}>>;
  icon: React.ForwardRefExoticComponent<any>;
  children?: {
    path: string;
    element: React.FC;
  }[];
}[];

const routes: RoutesType = [
  {
    path: '/images',
    element: ImagesPage,
    icon: FileImageOutlined,
    children: [{ path: ':id', element: ImageModal }]
  },
  {
    path: '/breeds',
    element: BreedsPage,
    icon: FileSearchOutlined,
    children: [{ path: ':id-:name', element: BreedsModal }]
  },
  {
    path: '/favourites',
    element: FavouritesPage,
    icon: HeartOutlined,
    children: [{ path: ':id', element: FavouritesModal }]
  }
];

export { routes };
