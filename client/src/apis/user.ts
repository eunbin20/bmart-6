import { Axios } from '../libs/axios';
import { UserJoin, UserLogin } from '../types/data';
import { ERROR_STATUS, STORAGE_KEY } from '../commons/constants';
import { storage } from '../utils/storage';

export const createUser = async (body: UserJoin) => Axios().post('/user', body);
export const loginUser = async (body: UserLogin) => Axios().post('/user/login', body);
export const getUserInfo = async () => {
  try {
    const { data } = await Axios().get('/user');
    return data;
  } catch (e) {
    if (e.response.status === ERROR_STATUS.UNAUTHORIZED) {
      storage.remove(STORAGE_KEY.ACCESS_TOKEN);
    }
  }
};
