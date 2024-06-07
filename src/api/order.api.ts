import { IOrderDetailItem, IOrder, IOrderSheet } from "../models/order.model";
import { httpClient, requestHandler } from "./http";

export const order = async (orderData: IOrderSheet) => {
  return await requestHandler<IOrderSheet>("post", "/orders", orderData);
};

export const fetchOrders = async () => {
  return await requestHandler("get", "/orders");
};

export const fetchOrder = async (orderId: number) => {
  return await requestHandler("get", `/orders/${orderId}`);
};
