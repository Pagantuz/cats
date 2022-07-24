import { Breeds } from './breeds';

type Image = {
  breeds: Breeds;
  id: string;
  url: string;
  width: number;
  height: number;
};

type Images = Image[];

export type { Image, Images };
