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



const defaultProps = {

};

const defaultState = {

};



export default class PayDetailView extends PureComponent {

    constructor(props) {
        super(props);
    }



    render() {
        const {data,statusShow} = this.props.navigation.state.params;
      console.log('2222222222222222',data)

        return (

           <View style={styles.container}>
        

              <View style={styles.body}>
                  <ScrollView style={styles.ScrollableLayout}>
                    <Text style={styles.titleText}>
                          {statusShow}
                    </Text>
                    <View style={styles.titleView}>
                      <Text style={styles.titleText2}>
                      您的订单{statusShow}，待客服确认
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
                        <Text style={styles.bodyText2}>{data.payFpBankDatas.cardUserName}</Text>
                      </View>
                    </View>

                    <View style={styles.listView}>
                      <View style={styles.listLeftView}>
                        <Text style={styles.bodyText}>付款银行：</Text>
                      </View>
                      <View style={styles.listRightView}>
                        <Text style={styles.bodyText2}>{data.payFpBankDatas.bankName}</Text>
                      </View>
                    </View>

                    <View style={styles.listView}>
                      <View style={styles.listLeftView}>
                        <Text style={styles.bodyText}>付款账号：</Text>
                      </View>
                      <View style={styles.listRightView}>
                        <Text style={styles.bodyText2}>{data.payFpBankDatas.cardNumber}</Text>
                      </View>
                    </View>

                  </ScrollView>
                </View>



          </View>
        );
    }
}

PayDetailView.defaultProps = defaultProps;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8'
  },


  ScrollableLayout:{
    width:Constant.deviceWidth,
    // flex:12,
      // alignItems:'center',
  },
  body:{
    flex:9,
    marginTop:14,
    paddingTop:15,
    paddingLeft:15,
    backgroundColor:'#FFFFFF',
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
});
