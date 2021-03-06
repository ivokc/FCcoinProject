import { connect } from 'react-redux';
import UserAliAcctView from '../view/UserAliAcctView';
import {changePWDTask} from '../vendor/Task';



const handleChangePWD = async ({params,dispatch,ownProps}) => {
  try {
    await changePWDTask(params);
    ownProps.navigation.navigate('Home');
  }catch(error){
    //('handleLoginfffff',error);
    
  }
}
const mapStateToProps = (state,ownProps) => {

  return {
    sessionId:state.userReducer ?state.userReducer.sessionid : 1
  };
};


const mapDispatchToProps = (dispatch,ownProps) => {

  return {
    handleChangePWD: (params) => handleChangePWD({params,dispatch,ownProps})
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(UserAliAcctView);
