import {USER_LOGIN,USER_LOGOUT,USER_FORGET} from './Action';




function userReducer(state = null, action){
  switch (action.type) {
    case USER_LOGIN:

      return {
        ...action.payload
      };
    case USER_LOGOUT:
      return {

      };
    case USER_FORGET:
      return {

      };
    default:
        return state;
  }
}

export {
  userReducer
};

