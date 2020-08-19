import { Axios } from '../libs/axios';
import { UserJoin } from '../types/data';

export const createUser = (data: UserJoin) => {
  return Axios.post('/user', { data });
};
