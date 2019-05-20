/* eslint-disable no-loop-func */
/* eslint-disable no-var */
/* eslint-disable vars-on-top */
/* eslint-disable prefer-const */
/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import axios from 'axios';
import localStorage from 'localStorage';
import { apiBase } from './config';

const headers = {
  'Access-Control-Allow-Origin': '*',
};

function preSendData(data) {
  for (const prop in data) {
    const dataElement = data[prop];
    if (
      dataElement == null ||
      dataElement === undefined ||
      dataElement === 'null' ||
      dataElement === '' ||
      dataElement === 'undefined'
    ) {
      delete data[prop];
    }
  }

  return data;
}

const request = axios.create({
  baseURL: apiBase,
  headers,
});

export const get = (endpoint, config = {}, getlocalStorage = true) => {
  if (getlocalStorage && localStorage.getItem('token')) {
    config = {
      ...config,
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    };
  }

  return request.get(endpoint, config);
};

export const post = (
  endpoint,
  data,
  config = {
    headers: null,
  },
) => {
  if (localStorage.getItem('token') && !config.headers) {
    config = {
      ...config,
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    };
  }
  data = preSendData(data);

  let formData = new FormData();
  if (data && data.hasFile) {
    config = {
      ...config,
      header: {
        ...config.headers,
        'Content-Type': 'multipart/form-data',
      },
    };
    delete data.hasFile;
    for (var prop in data) {
      if (Array.isArray(data[prop])) {
        data[prop].forEach(dt => {
          formData.append(prop, dt);
        });
      } else {
        formData.append(prop, data[prop]);
      }

      delete data[prop];
    }
    data = formData;
  }

  return request.post(endpoint, data, config);
};

export const puts = (
  endpoint,
  data,
  config = {
    headers: {},
  },
) => {
  if (localStorage.getItem('token')) {
    config = {
      ...config,
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    };
  }
  return request.put(endpoint, data, config);
};

export const deletes = (
  endpoint,
  data,
  config = {
    headers: {},
  },
) => {
  if (localStorage.getItem('token')) {
    config = {
      ...config,
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    };
  }
  return request.delete(endpoint, config);
};
