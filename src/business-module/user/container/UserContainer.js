import { connect } from 'react-redux';
import RechargeDetView from '../view/UserDetView';



const handleLogin = async ({params,dispatch}) => {

}


const mapDispatchToProps = (dispatch) => {

  return {
    handleLogin: (params) => handleLogin({params,dispatch})
  }
};

export default connect(null,mapDispatchToProps)(RechargeDetView);
