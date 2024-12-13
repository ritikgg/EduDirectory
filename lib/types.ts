export interface School {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  contact: string;
  image: string;
  email: string;
}

export type SchoolFormData = Omit<School, 'id'>;