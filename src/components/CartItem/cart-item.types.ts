export interface ICartItem {
  id: string | number;
  Job: string;
  City: string;
  Name: string;
  Email: string;
  DateCreated: Date;
  'Phone Number': string;
}

export interface ICartItemProps {
  item: ICartItem;
}
