export const SAVE_USER_INFOR = 'user/SAVE_USER_INFOR';
export const GET_USER_INFOR = 'user/GET_USER_INFOR';

export function saveUserInfor(data) {
  return { type: SAVE_USER_INFOR, data };
}

export function getUserInfor() {
  return { type: GET_USER_INFOR };
}
