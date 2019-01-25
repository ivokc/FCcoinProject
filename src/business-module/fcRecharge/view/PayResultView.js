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


import {UIIconInput,UIButton} from '../../../main/component/UIComponents'

const defaultProps = {

};

const defaultState = {

};
@CommonHead('付款页面')
export default class PayResultView extends PureComponent {

    constructor(props) {
        super(props);
    }



    render() {
      // console.log('2222222222222222',this.props)

        return (

           <View style={styles.container}>

              {
                this.props.result==true?
                <View style={styles.body}>
                <View style={styles.imgView}>
                  <Image  source={Img.PaySuccess} style={styles.img}/>
                </View>

                <View style={styles.textView}>
                    <Text style={styles.bodyText}>支付成功</Text>

                </View>


                <View style={styles.buttonLayoutStyle}>
                          <UIButton text='确认' style={styles.button}
                          handlePress={this.props.handleAgreePress}/>
                </View>

                </View>:
                <View style={styles.body}>
                <View style={styles.imgView}>
                  <Image  source={Img.PayFalse} style={styles.img}/>
                </View>

                <View style={styles.textView}>
                    <Text style={styles.bodyText}>支付失败，余额不够，请  </Text>
                    <Text style={styles.bodyText2}>立即充值</Text>
                </View>


                <View style={styles.buttonLayoutStyle}>
                          <UIButton text='确认' style={styles.button}
                          handlePress={this.props.handleAgreePress}/>
                </View>

                </View>
              }





          </View>
        );
    }
}

PayResultView.defaultProps = defaultProps;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8'
  },

  body:{
    flex:9,
    // marginTop:14,
    paddingTop:15,
    // paddingLeft:15,
    backgroundColor:'#FFFFFF',
  },
  imgView:{
    marginTop:40,
    alignItems:'center',
    justifyContent: 'center',
  },
  img:{
    height:80,
    width:80,
  },
  textView:{
    marginTop:40,
    marginBottom:40,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'center',
  },
  bodyText:{
    fontSize: 16,
    color:'#212C38',
  },
  bodyText2:{
    fontSize: 16,
    color:'#726DFE',
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
