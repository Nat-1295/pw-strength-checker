import { API } from '../config/config';

const getData = response => {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response.json());
  }
  return Promise.reject(new Error(response.status));
};

// eslint-disable-next-line import/prefer-default-export
export const getPwStrength = async pw => {
  const response = await fetch(API, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ password: pw }),
  });
  return getData(response);
};
