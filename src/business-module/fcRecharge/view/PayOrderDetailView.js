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

import {UITextInput,UIButton} from '../../../main/component/UIComponents'


const defaultProps = {

};

const defaultState = {

};
@CommonHead('订单支付详情')
export default class PayOrderDetailView extends PureComponent {

    constructor(props) {
        super(props);
    }



    render() {
      console.log('2222222222222222',this.props.navigation.state.params)


      // <View style={styles.bottomView}>
      //   <View style={styles.bottomLeftView}>
      //     <Text style={styles.bodyText}>资金密码</Text>
      //   </View>
      //   <View style={styles.bottomRightView}>
      //     <UITextInput  placeholder='请输入6位资金密码'
      //       textInputstyles={styles.textInputStyle}
      //     onChangeText={(text) => this.setState({password:text})}/>
      //   </View>
      //
      // </View>
      // <View style={styles.bottomView2}>
      //     <Text style={styles.bottomText}>忘记密码</Text>
      // </View>

        return (

           <View style={styles.container}>

              <View style={styles.body}>
                  <View style={styles.ScrollableLayout}>


                    <View style={styles.listView}>
                      <View style={styles.listLeftView}>
                        <Text style={styles.bodyText}>单号:</Text>
                      </View>
                      <View style={styles.listRightView}>
                        <Text style={styles.bodyText2}>{this.props.navigation.state.params.orderCode}</Text>
                      </View>
                    </View>

                    <View style={styles.listView}>
                      <View style={styles.listLeftView}>
                        <Text style={styles.bodyText}>支付额度:</Text>
                      </View>
                      <View style={styles.listRightView}>
                        <Text style={styles.bodyText2}>{this.props.navigation.state.params.orderNum}元={this.props.navigation.state.params.orderNum} FC</Text>
                      </View>
                    </View>


                    <View style={styles.listView}>
                      <View style={styles.listLeftView}>
                        <Text style={styles.bodyText}>商家：</Text>
                      </View>
                      <View style={styles.listRightView}>
                        <Text style={styles.bodyText2}>{this.props.navigation.state.params.merchant}</Text>
                      </View>
                    </View>


                    <View style={styles.listView}>
                      <View style={styles.listLeftView}>
                        <Text style={styles.bodyText}>商家订单号：</Text>
                      </View>
                      <View style={styles.listRightView}>
                        <Text style={styles.bodyText2}>{this.props.navigation.state.params.merchantOrderCode}</Text>
                      </View>
                    </View>

                    </View>

                      <View style={styles.bottomView3}>
                                          <View style={styles.buttonLayoutStyle}>
                                                    <UIButton text='确认支付' style={styles.button}
                                                    onPress={this.props.handleAgreePress}/>
                                          </View>


                    </View>
                </View>



          </View>
        );
    }
}

PayOrderDetailView.defaultProps = defaultProps;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8'
  },

    textInputStyle:{
      height:45,
      flexDirection: 'row',
      alignItems:'center',
      justifyContent: 'flex-start',
      borderWidth:1,
      borderColor:'#979797',
      borderRadius:5,
      backgroundColor:'#FFFFFF',
    },

  ScrollableLayout:{
    // flex:4,
    marginTop:14,
    // paddingTop:15,
    paddingLeft:15,
    backgroundColor:'#FFFFFF',
    justifyContent: 'center',
    height: Constant.deviceHeight * 0.22,
  },
  bottomView:{
    backgroundColor: '#F8F8F8',
    flexDirection: 'row',
    margin:20,
    alignItems:'center',
  },
  bottomLeftView:{
    width:Constant.deviceWidth*0.22,
  },
  bottomRightView:{
    width:Constant.deviceWidth*0.58,
  },
  bottomView2:{
    justifyContent: 'center',
      alignItems:'flex-end',
    marginRight:35,
    backgroundColor: '#F8F8F8'
  },
  bottomView3:{

    backgroundColor: '#FFFFFF'
  },
  body:{
    flex:1,
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
    color:'#726DFE',
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
});
