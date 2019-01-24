import { connect } from 'react-redux';
import RegistMsgView from '../view/RegistMsgView';
// import {loginTask} from '../vendor/Task';

const handleRegist = async ({params,dispatch}) => {
  try {
    await loginTask(params,dispatch);
  }catch(error){}
}


const mapStateToProps = (state,ownProps) => {
  return {
    
  };
};

const mapDispatchToProps = (dispatch) => {

  return {
    handleRegist: (params) => handleRegist({params,dispatch})
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(RegistMsgView);
