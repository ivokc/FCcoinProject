import { connect } from 'react-redux';
import HomeView from '../view/HomeView';
import {logoutTask} from '../vendor/Task';
import {getCaptialAccountIntf} from '../vendor/Intf';
import {getCaptialAccountAction} from '../vendor/dataflow/Action';

let sessionId;
const handleLogout = ({params,dispatch}) => {
  logoutTask({sessionId});
}
const handleHomeInit = async ({params,dispatch}) => {
  try {
    let result = await getCaptialAccountIntf({sessionId});
    dispatch(getCaptialAccountAction(result));
    console.log('handleHomeInit',result);
    
  } catch (error) {
    console.log('handleHomeIniterror',error);
    
  }
}

const mapStateToProps = (state,ownProps) => {
  global.navigation = ownProps.navigation;//全局navigation，注销用
  sessionId = state.userReducer ? state.userReducer.sessionid : 1;
  return {
    capAcct: state.capReducer
  };
};

const mapDispatchToProps = (dispatch) => {

  return {
    handleLogout: (params) => handleLogout({params,dispatch}),
    handleHomeInit: (params) => handleHomeInit({params,dispatch})
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(HomeView);
