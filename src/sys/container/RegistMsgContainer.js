import { connect } from 'react-redux';
import RegistMsgView from '../view/RegistMsgView';
import {userRegisterIntf} from '../vendor/Intf';


const handleUserRegister = async ({params,dispatch,ownProps}) => {
  try {
    let {password} = ownProps.navigation.state.params;
    let encriptedPassword = Just.encode(password,Constant.encryptKey)
    let registerInfo = {...ownProps.navigation.state.params,...params,password:encriptedPassword};

    let result = await userRegisterIntf(registerInfo);
    console.log('handleUserRegister',result);
    
  }catch(error){
    console.log('handleUserRegister|error',error);

  }
}


const mapStateToProps = (state) => {

  return {
    
  };
};

const mapDispatchToProps = (dispatch,ownProps) => {

  return {
    handleUserRegister: (params) => handleUserRegister({params,dispatch,ownProps})
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(RegistMsgView);
