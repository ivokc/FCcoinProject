import { connect } from 'react-redux';
import LoginView from '../view/LoginView';
import {loginTask} from '../vendor/Task';

const handleLogin = async ({params,dispatch,ownProps}) => {
  
  try {
    await loginTask(params,dispatch);
    ownProps.navigation.navigate('App');
  }catch(error){
    console.log('handleLoginfffff',error);
    
  }
}


const mapStateToProps = (state,ownProps) => {
  return {
  };
};

const mapDispatchToProps = (dispatch,ownProps) => {

  return {
    handleLogin: (params) => handleLogin({params,dispatch,ownProps})
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(LoginView);
