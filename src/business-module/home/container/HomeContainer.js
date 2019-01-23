import { connect } from 'react-redux';
import HomeView from '../view/HomeView';

const handleLogin = async ({params,dispatch}) => {
  console.log();
  // try {
  //   await loginTask(params,dispatch);
  //   global.JJmHistory.push('/monitor');
  // }catch(error){}
}


const mapDispatchToProps = (dispatch) => {

  return {
    handleLogin: (params) => handleLogin({params,dispatch})
  }
};

export default connect(null,null)(HomeView);
