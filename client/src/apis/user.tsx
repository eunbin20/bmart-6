import { Axios } from '../libs/axios';
import { UserJoin } from '../types/data';

export const createUser = (body: UserJoin) => {
  return Axios.post('/user', { ...body });
};
