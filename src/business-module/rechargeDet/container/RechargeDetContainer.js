import { connect } from 'react-redux';
import RechargeDetView from '../view/RechargeDetView';



const handleLogin = async ({params,dispatch}) => {

}


const mapDispatchToProps = (dispatch) => {

  return {
    handleLogin: (params) => handleLogin({params,dispatch})
  }
};

export default connect(null,mapDispatchToProps)(RechargeDetView);
