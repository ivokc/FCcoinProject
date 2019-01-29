import {GET_BANK_ACCT,GET_BANK_SELECTDATA} from './Action';


const initialBankAcctReducer = {
  bankAcct: null,
  bankSelect:null
};
function bankAcctReducer(state = initialBankAcctReducer, action){
  switch (action.type) {
    case GET_BANK_ACCT:
      return {
        ...state,
        bankAcct:{
          ...action.payload
        }
        
      };
    case GET_BANK_SELECTDATA:
      return {
        ...state,
        bankSelect:{
          ...action.payload
        }
      };
    default:
        return state;
  }
}
export {
  bankAcctReducer
};

