import {USER_LOGIN,USER_LOGOUT,USER_FORGET,GET_CAP_ACCT} from './Action';




function userReducer(state = null, action){
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...action.payload
      };
    case USER_LOGOUT:
      return null;
    case USER_FORGET:
      return {

      };
    default:
        return state;
  }
}

function capReducer(state=null,action){
  switch (action.type) {
    case GET_CAP_ACCT:
      return {
        ...action.payload
      };
    default:
        return state;
  }
}

export {
  userReducer,
  capReducer
};

