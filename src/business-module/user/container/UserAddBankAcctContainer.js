import { connect } from 'react-redux';
import UserAddBankAcctView from '../view/UserAddBankAcctView';
import {getBankSelectDataListIntf,addBankDatasIntf} from '../vendor/Intf'
import {getBankSelectDataListAction} from '../vendor/dataflow/Action'


let sessionId;
const userAddBankAcctInit = async ({params,dispatch,ownProps}) => {
  try {
    let bankSelectList = await getBankSelectDataListIntf({sessionId});
    dispatch(getBankSelectDataListAction(bankSelectList))
    console.log('userAddBankAcctInit',bankSelectList);
  } catch (error) {
    console.log('userAddBankAcctIniterror',error);
    
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
    console.log('userAddBankAcctIniterror',error);
    
  }
}


const mapStateToProps = (state,ownProps) => {

  sessionId = state.userReducer ? state.userReducer.sessionid : 1;
  console.log('userBankAcctsessionId',state.userReducer);
  return {
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
