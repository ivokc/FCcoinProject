import { connect } from 'react-redux';
import HomeView from '../view/HomeView';



const handleLogin = async ({params,dispatch}) => {

}


const mapDispatchToProps = (dispatch) => {

  return {
    handleLogin: (params) => handleLogin({params,dispatch})
  }
};

export default connect(null,mapDispatchToProps)(HomeView);
