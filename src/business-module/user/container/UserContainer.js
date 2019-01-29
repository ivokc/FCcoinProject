import { connect } from 'react-redux';
import UserView from '../view/UserView';
import {logoutTask} from '../../../sys/vendor/Task'



let sessionId;
const handleLogout = ({params,dispatch}) => {
  logoutTask({sessionId});
}

const mapStateToProps = (state,ownProps) => {
  sessionId = state.userReducer ? state.userReducer.sessionid : 1;
  return {
    userInfo:state.userReducer ? state.userReducer.user : null
  };
};


const mapDispatchToProps = (dispatch) => {

  return {
    handleLogout: (params) => handleLogout({params,dispatch})
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(UserView);
