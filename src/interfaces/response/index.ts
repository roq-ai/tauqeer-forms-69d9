import { UserInterface } from 'interfaces/user';
import { FormInterface } from 'interfaces/form';
import { GetQueryInterface } from 'interfaces';

export interface ResponseInterface {
  id?: string;
  content: string;
  user_id: string;
  form_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  form?: FormInterface;
  _count?: {};
}

export interface ResponseGetQueryInterface extends GetQueryInterface {
  id?: string;
  content?: string;
  user_id?: string;
  form_id?: string;
}
