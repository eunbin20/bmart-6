import { Axios } from '../libs/axios';

export const createOrder = (productIds: number[]) => Axios.post('/api/order', { productIds });
