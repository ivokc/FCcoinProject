import { connect } from 'react-redux';
import UserAcctView from '../view/UserAcctView';



const handleLogin = async ({params,dispatch}) => {

}


const mapDispatchToProps = (dispatch) => {

  return {
    handleLogin: (params) => handleLogin({params,dispatch})
  }
};

export default connect(null,mapDispatchToProps)(UserAcctView);
