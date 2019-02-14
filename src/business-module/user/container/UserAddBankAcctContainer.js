import { connect } from 'react-redux';
import UserAddBankAcctView from '../view/UserAddBankAcctView';
import {getBankSelectDataListIntf,addBankDatasIntf} from '../vendor/Intf'
import {getBankSelectDataListAction} from '../vendor/dataflow/Action'


let sessionId;
const userAddBankAcctInit = async ({params,dispatch,ownProps}) => {
  try {
    let result = await getBankSelectDataListIntf({sessionId});
    dispatch(getBankSelectDataListAction(result.data))
    //('userAddBankAcctInit',bankSelectList);
  } catch (error) {
    //('userAddBankAcctIniterror',error);
    
  }
  
}

const handleAddBankDatas = async ({params,dispatch,ownProps}) => {
  try {
    let result = await addBankDatasIntf({...params,sessionId});
    if(result.result !== 'true'){
      throw new Error(result.message);
    }
    ownProps.navigation.navigate('Home');
  } catch (error) {
    //('userAddBankAcctIniterror',error);
    
  }
}


const mapStateToProps = (state,ownProps) => {

  sessionId = state.userReducer ? state.userReducer.sessionid : 1;
  //('userBankAcctsessionId',state.userReducer);
  return {
    sessionId:state.userReducer ? state.userReducer.sessionid : 1,
    bankSelectList: state.bankAcctReducer.bankSelect,
  };
};


const mapDispatchToProps = (dispatch,ownProps) => {

  return {
    userAddBankAcctInit: (params) => userAddBankAcctInit({params,dispatch,ownProps}),
    handleAddBankDatas: (params) => handleAddBankDatas({params,dispatch,ownProps})
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(UserAddBankAcctView);
