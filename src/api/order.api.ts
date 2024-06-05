import { IOrderDetailItem, IOrder, IOrderSheet } from "../models/order.model";
import { httpClient } from "./http";

export const order = async (orderData: IOrderSheet) => {
  const response = await httpClient.post("/orders", orderData);

  return response.data;
};

export const fetchOrders = async () => {
  const response = await httpClient.get<IOrder[]>("/orders");

  return response.data;
};

export const fetchOrder = async (orderId: number) => {
  const response = await httpClient.get<IOrderDetailItem[]>(
    `/orders/${orderId}`
  );

  return response.data;
};
