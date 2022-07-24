import { config } from '../config';
import { Breeds } from '../types';
import { request } from './request';

const url = 'https://api.thecatapi.com/v1/breeds';
const { key } = config;

const getBreeds = (params?: any) => {
  return request<Breeds>({
    type: 'GET',
    url,
    config: { headers: { 'x-api-key': key }, params }
  });
};

const searchBreeds = (params?: any) => {
  return request<Breeds>({
    type: 'GET',
    url: `${url}/search`,
    config: { headers: { 'x-api-key': key }, params }
  });
};

export { getBreeds, searchBreeds };
