import { API } from '../constants/api.js';
import { Product } from '../types/types.js';

const get = async (
  onError: () => void,
  endPoint: string
): Promise<Product[] | void> => {
  try {
    const response = await fetch(`${API.BASE_URL}${endPoint}`, {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      return onError();
    }
  } catch (error) {
    console.error('Something went wrong ');
  }
};

const getByID = async (
  onError: () => void,
  endPoint: string,
  id: string
): Promise<Product | void> => {
  try {
    const response = await fetch(`${API.BASE_URL}${endPoint}/${id}`, {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      return onError();
    }
  } catch (error) {
    console.error('Something went wrong ');
  }
};

const create = async (
  data: Product,
  onSuccess: (data: Product) => void,
  onError: () => void,
  endPoint: string
) => {
  try {
    const response = await fetch(`${API.BASE_URL}${endPoint}`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      const data = await response.json();
      return onSuccess(data);
    } else {
      return onError();
    }
  } catch (error) {
    console.error('Something went wrong');
  }
};

const remove = async (
  onSuccess: (data: Product) => void,
  onError: () => void,
  endPoint: string,
  id: string
) => {
  try {
    const response = await fetch(`${API.BASE_URL}${endPoint}/${id}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      const data = await response.json();
      return onSuccess(data);
    } else {
      return onError();
    }
  } catch (error) {
    console.error('Something went wrong');
  }
};

const edit = async (
  data: Product,
  onSuccess: (data: Product) => void,
  onError: () => void,
  endPoint: string,
  id: string
) => {
  try {
    const response = await fetch(`${API.BASE_URL}${endPoint}/${id}`, {
      method: 'PUT', // or PATCH
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      const data = await response.json();
      return onSuccess(data);
    } else {
      return onError();
    }
  } catch (error) {
    console.error('Something went wrong');
  }
};
export { get, create, remove, edit, getByID };
