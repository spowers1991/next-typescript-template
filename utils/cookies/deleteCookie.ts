// src/utils/cookies/deleteCookie.ts

import { setCookie } from './setCookie'; 

export const deleteCookie = (name: string) => {
  setCookie(name, '', -1);
};
