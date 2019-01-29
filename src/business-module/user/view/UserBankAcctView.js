import React from "react";
import { View,StyleSheet,ScrollView} from "react-native";
import {UIAcctItem, UIButton} from '../../../main/component/UIComponents'
import UserAddBankAcctContainer from "../container/UserAddBankAcctContainer";

@CommonHead('银行卡账号')
export default class UserBankAcctView extends React.Component {
  
  state ={
    disabled:true
  }
  componentWillMount() {
    this.props.userBankAcctInit()
  }

  handleToggleState = (cardCode,state) => {
    // 这个银行卡的状态      0：启用，2：停用
    if(state == '0'){
      this.props.handleDisableBankData({cardCode});
    }else{
      this.props.handleEnableBankData({cardCode});
    }
  }
  handleDeleteBankDatas = (cardCode) => {
    this.props.handleDeleteBankDatas({cardCode});
  }


  render() {
    
    return (
      <ScrollView style={styles.container}>
        {
          this.props.bankAcct ? this.props.bankAcct.list.map((acct,index) => (

            <UIAcctItem key={index} bankName={acct.bankName} 
              acctType={`${acct.cardBranchName}(${acct.cardUserName})`} 
              acctNo={acct.cardCode}
              acctStatus={acct.status}
              onToggleStatePress={this.handleToggleState}
              onDeletePress={this.handleDeleteBankDatas}
            />
          )) : null
        }

        <UIButton style={{margin:30}} outline onPress={()=>{this.props.navigation.navigate('UserAddBankAcct')}} text='+   添加银行卡'/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'rgba(244,244,244,1)',
    padding:10
  },
  
});
