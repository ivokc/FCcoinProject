import { connect } from 'react-redux';
import UserBankAcctView from '../view/UserBankAcctView';
import {getBankDatasIntf,disableBankDataIntf,enableBankDataIntf,deleteBankDatasIntf} from '../vendor/Intf'
import {getBankAcctAction} from '../vendor/dataflow/Action'


let sessionId;
const userBankAcctInit = async ({params,dispatch,ownProps}) => {
  try {
    let result = await getBankDatasIntf({sessionId});
    dispatch(getBankAcctAction(result.data))
  } catch (error) {
  }
}
const handleDisableBankData = async ({params,dispatch,ownProps}) => {
  try {
    let result = await disableBankDataIntf({sessionId});
    console.log('userBankAcctInit',result);
    userBankAcctInit({dispatch});
  } catch (error) {
    console.log('userBankAcctIniterror',error);
  }
}
const handleEnableBankData = async ({params,dispatch,ownProps}) => {
  try {
    let result = await enableBankDataIntf({...params,sessionId});
    console.log('userBankAcctInit',result);
    userBankAcctInit({dispatch});
  } catch (error) {
    console.log('userBankAcctIniterror',error);
  }
}
const handleDeleteBankDatas = async ({params,dispatch,ownProps}) => {
  try {
    console.log('deleteBankDatasIntf',params);
    let result = await deleteBankDatasIntf({...params,sessionId});
    userBankAcctInit({dispatch});
    console.log('deleteBankDatasIntf',result);
  } catch (error) {
    console.log('deleteBankDatasIntf',error);
  }
}



const mapStateToProps = (state,ownProps) => {

  sessionId = state.userReducer ? state.userReducer.sessionid : 1;
  console.log('userBankAcctsessionId',state.bankAcctReducer);
  return {
    bankAcct: state.bankAcctReducer.bankAcct,
  };
};


const mapDispatchToProps = (dispatch,ownProps) => {

  return {
    userBankAcctInit: (params) => userBankAcctInit({params,dispatch,ownProps}),
    handleDisableBankData: (params) => handleDisableBankData({params,dispatch,ownProps}),
    handleEnableBankData: (params) => handleEnableBankData({params,dispatch,ownProps}),
    handleDeleteBankDatas: (params) => handleDeleteBankDatas({params,dispatch,ownProps})

  }
};

export default connect(mapStateToProps,mapDispatchToProps)(UserBankAcctView);
