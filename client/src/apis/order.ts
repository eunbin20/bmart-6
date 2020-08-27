import { Axios } from '../libs/axios';

interface CreateOrderBody {
  products: {
    id: number;
    quantity: number;
  }[];
}

export const createOrder = (body: CreateOrderBody) => Axios().post('/order', body);
export const getOrders = () => Axios().get('/order');
