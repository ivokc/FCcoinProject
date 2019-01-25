import { connect } from 'react-redux';
import UserView from '../view/UserView';



const handleLogin = async ({params,dispatch}) => {

}


const mapDispatchToProps = (dispatch) => {

  return {
    handleLogin: (params) => handleLogin({params,dispatch})
  }
};

export default connect(null,mapDispatchToProps)(UserView);
