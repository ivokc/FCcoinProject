import React from "react";
import { View,StyleSheet,Text} from "react-native";
import {UILabelInput,UILabelPicker, UIButton,} from '../../../main/component/UIComponents'
import {getBankSelectDataListIntf,addBankDatasIntf} from '../vendor/Intf'
import {getBankSelectDataListAction} from '../vendor/dataflow/Action'

@CommonHead('绑定银行卡')
@AutoHideKeyboard
export default class UserAddBankAcctView extends React.Component {
  
  state ={
    cardUserName:'',
    bankName:'',
    cardNumber:'',
    pickerData:[]
  }
  componentWillMount() {
    this.userAddBankAcctInit()
    
  }

  
  
  
   userAddBankAcctInit = async () => {
     let {sessionId} = this.props;
    try {
      let result = await getBankSelectDataListIntf({sessionId});
      //('userAddBankAcctInit',result);

      pickerData = Object.keys(result.data).map((ele) => {
        return {
          text:result.data[ele].bankName,
          value:result.data[ele].id
        }
      });
      this.setState({
        bankName: pickerData[0].value,
        pickerData
      });
    } catch (error) {
      //('userAddBankAcctIniterror',error);
    }
    
  }

  validateForm = () => {
    if (Object.keys(this.state).some((key) => this.state[key] === '')){
      return false;
    }else{
      return true;
    }
  }
  handleAddBankDatas = () => {
    this.props.handleAddBankDatas(this.state);
  }
  render() {
    let validateOk = this.validateForm();
   
    return (
      <View style={styles.container}>
        <UILabelInput style={{marginTop:20}} label='账户名称' placeholder='请输入账户姓名' 
          onChangeText={(text) => this.setState({cardUserName:text})}/>
        <UILabelPicker label='银行名称' data={this.state.pickerData} selectedValue={this.state.bankName}
          onValueChange={(itemValue,itemIndex) => this.setState({bankName:itemValue})}/>
        <UILabelInput label='银行账号' placeholder='请输入银行卡号'
          value={this.props.cardNumber}
          keyboardType={'numeric'}
          onChangeText={(text) => this.setState({cardNumber:text.replace(/[^\d]+/, '')})}
          />
        <UIButton disabled={!validateOk} style={{margin:20,marginTop:50}} onPress={this.handleAddBankDatas} text='确定'/>
        <View style={{margin:20}}>
          <Text style={styles.warn}>
            *充值前请先绑定银行卡，用于您充值支付，
            请务必填写正确信息，避免实际付款银行卡与绑定银行不一致而导致付款失败。
          </Text>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'flex-start',
    backgroundColor:'rgba(244,244,244,1)',
  },
  warn:{
    height:300,
    fontSize:17,
    fontFamily:'PingFangSC-Regular',
    fontWeight:'400',
    color:'#BBBBBB',
    lineHeight:25
  }
});
