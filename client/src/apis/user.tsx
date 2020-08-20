import { Axios } from '../libs/axios';
import { UserJoin, UserLogin } from '../types/data';

export const createUser = (body: UserJoin) => {
  try {
    return Axios.post('/user', body);
  } catch (e) {
    console.error(e);
  }
};

export const loginUser = async (body: UserLogin) => {
  try {
    const { data } = await Axios.post('/user/login', body);
    window.localStorage.setItem('accessToken', data.accessToken);
  } catch (e) {
    throw e;
  }
};
