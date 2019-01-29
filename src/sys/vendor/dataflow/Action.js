/*
 * action types
 */

export const USER_LOGIN = 'USER_LOGIN'
export const USER_LOGOUT = 'USER_LOGOUT'
export const USER_FORGET = 'USER_FORGET'
export const GET_CAP_ACCT = 'GET_CAP_ACCT'

/*
 * action creators
 */

export function loginAction(payload) {
  return { type: USER_LOGIN, payload }
}

export function logoutAction() {
  return { type: USER_LOGOUT }
}

export function userForgetAction(payload) {
  return { type: USER_FORGET, payload }
}
export function getCaptialAccountAction(payload) {
  return { type: GET_CAP_ACCT, payload }
}


