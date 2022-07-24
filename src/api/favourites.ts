import { config } from '../config';
import { Favourite, Favourites } from '../types';
import { request } from './request';

const url = 'https://api.thecatapi.com/v1/favourites';
const { key, id } = config;

const getFavourites = (params?: any) => {
  return request<Favourites>({
    type: 'GET',
    url,
    config: { headers: { 'x-api-key': key }, params: { ...params, sub_id: id } }
  });
};

const getFavourite = (id: number) => {
  return request<Favourite>({
    type: 'GET',
    url: `${url}/${id}`,
    config: { headers: { 'x-api-key': key } }
  });
};

const addFavourite = (data: { image_id: string }) => {
  return request<Favourite>({
    type: 'POST',
    url: `${url}`,
    config: { headers: { 'x-api-key': key } },
    data: { ...data, sub_id: id }
  });
};

const removeFavourite = (id: number) => {
  return request<{ message: string }>({
    type: 'DELETE',
    url: `${url}/${id}`,
    config: { headers: { 'x-api-key': key } }
  });
};

export { getFavourites, getFavourite, addFavourite, removeFavourite };
