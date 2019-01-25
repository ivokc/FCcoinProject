/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import React, { PureComponent } from 'react';
import {
    StyleSheet,
    Text,TouchableOpacity,
    View,Image,ScrollView
} from 'react-native';

import {UIIconInput,UIButton,UIScrollableLayout} from '../../../main/component/UIComponents'

const defaultProps = {

};

const defaultState = {

};

export default class PayView extends PureComponent {

    constructor(props) {
        super(props);
    }



    render() {
              const {data} = this.props.navigation.state.params;
      // console.log('2222222222222222',this.props)

        return (

           <View style={styles.container}>

              <View style={styles.body}>
                  <View style={styles.ScrollableLayout}>
                    <Text style={styles.titleText}>
                          请付款
                    </Text>
                    <View style={styles.titleView}>
                      <Text style={styles.titleText2}>
                      您已经成功下单请及时付款
                      </Text>
                    </View>

                    <View style={styles.line}>
                    </View>

                    <View style={styles.listView}>
                      <View style={styles.listLeftView}>
                        <Text style={styles.bodyText}>充值单号:</Text>
                      </View>
                      <View style={styles.listRightView}>
                        <Text style={styles.bodyText2}>{data.orderCode}</Text>
                      </View>
                    </View>

                    <View style={styles.listView}>
                      <View style={styles.listLeftView}>
                        <Text style={styles.bodyText}>充值FC数量:</Text>
                      </View>
                      <View style={styles.listRightView}>
                        <Text style={styles.bodyText2}>{data.fcNum}个</Text>
                      </View>
                    </View>

                    <View style={styles.listView}>
                      <View style={styles.listLeftView}>
                        <Text style={styles.bodyText}>交易总额：</Text>
                      </View>
                      <View style={styles.listRightView}>
                        <Text style={styles.bodyText2}>{data.orderNum}元</Text>
                      </View>
                    </View>

                    <View style={styles.listView}>
                      <View style={styles.listLeftView}>
                        <Text style={styles.bodyText}>充值时间：</Text>
                      </View>
                      <View style={styles.listRightView}>
                        <Text style={styles.bodyText2}>{data.creatTime}</Text>
                      </View>
                    </View>

                    <View style={styles.listView}>
                      <View style={styles.listLeftView}>
                        <Text style={styles.bodyText}>收款人：</Text>
                      </View>
                      <View style={styles.listRightView}>
                        <Text style={styles.bodyText2}>{data.payeeFpBankDatas.cardUserName}</Text>
                      </View>
                    </View>

                    <View style={styles.listView}>
                      <View style={styles.listLeftView}>
                        <Text style={styles.bodyText}>收款银行：</Text>
                      </View>
                      <View style={styles.listRightView}>
                        <Text style={styles.bodyText2}>{data.payeeFpBankDatas.bankName}</Text>
                      </View>
                    </View>

                    <View style={styles.listView}>
                      <View style={styles.listLeftView}>
                        <Text style={styles.bodyText}>收款账号：</Text>
                      </View>
                      <View style={styles.listRightView}>
                        <Text style={styles.bodyText2}>{data.payeeFpBankDatas.cardNumber}</Text>
                      </View>
                    </View>

                    <View style={styles.listView}>
                      <View style={styles.listLeftView}>
                        <Text style={styles.bodyText}>付款账户名：</Text>
                      </View>
                      <View style={styles.listRightView}>
                        <Text style={styles.bodyText2}>张飞</Text>
                      </View>
                    </View>

                    <View style={styles.listView}>
                      <View style={styles.listLeftView}>
                        <Text style={styles.bodyText}>付款银行：</Text>
                      </View>
                      <View style={styles.listRightView}>
                        <Text style={styles.bodyText2}>平安银行</Text>
                      </View>
                    </View>

                    <View style={styles.listView}>
                      <View style={styles.listLeftView}>
                        <Text style={styles.bodyText}>付款账号：</Text>
                      </View>
                      <View style={styles.listRightView}>
                        <Text style={styles.bodyText2}>615211</Text>
                      </View>
                    </View>
                    </View>
                    <View style={styles.ScrollableLayout2}>
                      <View style={styles.buttonLayoutStyle}>
                                <UIButton text='剩余10分钟自动取消' style={styles.button}
                                handlePress={this.props.handleAgreePress}/>
                      </View>

                      <View style={styles.buttonLayoutStyle}>
                                <UIButton text='我已线下付款' style={styles.button}
                                handlePress={this.props.handleAgreePress}/>
                      </View>

                      <View style={styles.bottom}>
                        <Text style={styles.bottomText}>*请务必线下绑定银行卡转账到收款账号，如您已线下转账成功，请务必点击我已经下付款成功，否则可能导致资金损失</Text>
                      </View>
                  </View>
                </View>



          </View>
        );
    }
}

PayView.defaultProps = defaultProps;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8'
  },


  ScrollableLayout:{
    marginTop:14,
    paddingTop:15,
    paddingLeft:15,
    backgroundColor:'#FFFFFF',
  },
  ScrollableLayout2:{
    width:Constant.deviceWidth,
    // flex:12,
      // alignItems:'center',
  },
  body:{
    flex:1,

  },
  titleView:{
    marginTop:4,
    marginBottom:8,
  },
  titleText:{
    fontSize: 15,
    color:'#333333',
  },
  titleText2:{
    fontSize: 14,
    color:'#666666',
  },
  bodyText:{
    fontSize: 13,
    color:'#666666',
  },
  bodyText2:{
    fontSize: 13,
    color:'#999999',
  },
  bottomText:{
    fontSize: 13,
    color:'#FFA8A8',
  },
  line:{
    borderColor:'#D8D8D8',
    borderWidth:1,
    alignItems:'center',
    justifyContent: 'center',
    width:Constant.deviceWidth*0.9,
    // marginTop:3,
    marginBottom:8,
  },
  listView:{
    flexDirection: 'row',
    marginBottom:5,
  },
  listLeftView:{
    width:Constant.deviceWidth*0.28,
  },
  button: {
    width: Constant.deviceWidth*0.7,
    margin: 20,
    marginBottom:10,
    backgroundColor:'#726DFE',
    borderRadius: 23 ,
  },

  buttonLayoutStyle: {
    flexDirection: 'row',
    width:  Constant.deviceWidth,
    justifyContent:'center',
    // marginBottom:50* rem,
  },
  bottom:{
    margin:14
  },
});
