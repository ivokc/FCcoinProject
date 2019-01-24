import { connect } from 'react-redux';
import LoginView from '../view/LoginView';
import {loginTask} from '../vendor/Task';

const handleLogin = async ({params,dispatch}) => {
  console.log('2345234234params',params);
  
  try {
    await loginTask(params,dispatch);
  }catch(error){

  }
}


const mapStateToProps = (state,ownProps) => {
  console.log('342afsdfasdf',ownProps);
  const { navigation } = ownProps

  return {
  };
};

const mapDispatchToProps = (dispatch) => {

  return {
    handleLogin: (params) => handleLogin({params,dispatch})
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(LoginView);
