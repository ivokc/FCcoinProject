import { connect } from 'react-redux';
import UserChangePwdView from '../view/UserChangePwdView';
import {changePWDTask} from '../vendor/Task';


let sessionId;
const handleChangePWD = async ({params,dispatch,ownProps}) => {
  try {
    await changePWDTask({...params,sessionId});
    ownProps.navigation.navigate('Home');
  }catch(error){
    console.log('handleLoginfffff',error);
    
  }
}
const mapStateToProps = (state,ownProps) => {
  sessionId = state.userReducer ? state.userReducer.sessionid : 1;

  return {
  };
};


const mapDispatchToProps = (dispatch,ownProps) => {

  return {
    handleChangePWD: (params) => handleChangePWD({params,dispatch,ownProps})
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(UserChangePwdView);
