import React from 'react';
import { storage } from '../../utils/storage';
import { STORAGE_KEY } from '../../commons/constants';

function LogoutPage(): React.ReactElement {
  storage.remove(STORAGE_KEY.ACCESS_TOKEN);
  window.location.href = '/';
  return <></>;
}

export default LogoutPage;
