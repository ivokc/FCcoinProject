import { connect } from 'react-redux';
import RegistMsgView from '../view/RegistMsgView';
import {userRegisterIntf,sendSmsIntf} from '../vendor/Intf';


const handleUserRegister = async ({params,dispatch,ownProps}) => {
  try {
    let {password} = ownProps.navigation.state.params;
    let encriptedPassword = Just.encode(password,Constant.encryptKey)
    let registerInfo = {...ownProps.navigation.state.params,...params,password:encriptedPassword};

    let result = await userRegisterIntf(registerInfo);
    console.log('handleUserRegister',result);
    Mymessage.show('注册成功');
    ownProps.navigation.navigate('Login');
  }catch(error){
    console.log('handleUserRegister|error',error);

  }
}

const handleSms = async ({params,dispatch,ownProps}) => {
  try {
    await sendSmsIntf({...params});
    
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
    handleUserRegister: (params) => handleUserRegister({params,dispatch,ownProps}),
    handleSms: (params) => handleSms({params,dispatch,ownProps})
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(RegistMsgView);
