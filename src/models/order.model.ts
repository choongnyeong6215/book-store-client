export interface IOrder {
  id: number;
  createdAt: string;
  address: string;
  receiver: string;
  contact: string;
  bookTitle: string;
  totalQuantity: number;
  totalPrice: number;
}

export interface IOrderSheet {
  items: number[];
  totalQuantity: number;
  totalPrice: number;
  firstBookTitle: string;
  delivery: IDelivery;
}

export interface IDelivery {
  address: string;
  receiver: string;
  contact: string;
}

export interface IOrderDetailItem {
  bookId: number;
  title: string;
  author: string;
  price: number;
  quantity: number;
}

export interface IOrderListItem extends IOrder {
  detail?: IOrderDetailItem[];
}
