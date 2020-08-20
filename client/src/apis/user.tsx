import { Axios } from '../libs/axios';
import { UserJoin, UserLogin } from '../types/data';

export const createUser = (body: UserJoin) => Axios.post('/user', body);

export const loginUser = async (body: UserLogin) => await Axios.post('/user/login', body);
