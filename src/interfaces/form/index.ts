import { FieldInterface } from 'interfaces/field';
import { ResponseInterface } from 'interfaces/response';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface FormInterface {
  id?: string;
  name: string;
  organization_id: string;
  created_at?: any;
  updated_at?: any;
  field?: FieldInterface[];
  response?: ResponseInterface[];
  organization?: OrganizationInterface;
  _count?: {
    field?: number;
    response?: number;
  };
}

export interface FormGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  organization_id?: string;
}
