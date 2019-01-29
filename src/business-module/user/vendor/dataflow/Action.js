/*
 * action types
 */

export const GET_BANK_ACCT = 'GET_BANK_ACCT'
export const GET_BANK_SELECTDATA = 'GET_BANK_SELECTDATA'

/*
 * action creators
 */

export function getBankAcctAction(payload) {
  return { type: GET_BANK_ACCT, payload }
}
export function getBankSelectDataListAction(payload) {
  return { type: GET_BANK_SELECTDATA, payload }
}

