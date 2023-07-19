import axios from 'axios';
import queryString from 'query-string';
import { FieldInterface, FieldGetQueryInterface } from 'interfaces/field';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getFields = async (query?: FieldGetQueryInterface): Promise<PaginatedInterface<FieldInterface>> => {
  const response = await axios.get('/api/fields', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createField = async (field: FieldInterface) => {
  const response = await axios.post('/api/fields', field);
  return response.data;
};

export const updateFieldById = async (id: string, field: FieldInterface) => {
  const response = await axios.put(`/api/fields/${id}`, field);
  return response.data;
};

export const getFieldById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/fields/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteFieldById = async (id: string) => {
  const response = await axios.delete(`/api/fields/${id}`);
  return response.data;
};
