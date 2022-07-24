import axios, { AxiosRequestConfig } from 'axios';

const request = <T>({
  url,
  type,
  data,
  config
}: {
  url: string;
  type: 'GET' | 'POST' | 'DELETE' | 'UPDATE';
  data?: any;
  config?: AxiosRequestConfig;
}): Promise<T> => {
  switch (type) {
    case 'GET':
      return axios.get(url, config).then((res) => res.data);
    case 'POST':
    case 'UPDATE':
      return axios.post(url, data, config).then((res) => res.data);
    case 'DELETE':
      return axios.delete(url, config).then((res) => res.data);
  }
};

export { request };
