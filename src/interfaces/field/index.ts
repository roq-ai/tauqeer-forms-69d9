import { FormInterface } from 'interfaces/form';
import { GetQueryInterface } from 'interfaces';

export interface FieldInterface {
  id?: string;
  name: string;
  form_id: string;
  created_at?: any;
  updated_at?: any;

  form?: FormInterface;
  _count?: {};
}

export interface FieldGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  form_id?: string;
}
