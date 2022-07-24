import { config } from '../config';
import { Image, Images } from '../types';
import { request } from './request';

const url = 'https://api.thecatapi.com/v1/images/search';
const { key } = config;

const getImages = (params?: any) => {
  return request<Images>({
    type: 'GET',
    url,
    config: {
      headers: { 'x-api-key': key },
      params
    }
  });
};

const getImage = (id: string) => {
  return request<Image>({
    type: 'GET',
    url: `https://api.thecatapi.com/v1/images/${id}`,
    config: {
      headers: { 'x-api-key': key }
    }
  });
};

export { getImages, getImage };
