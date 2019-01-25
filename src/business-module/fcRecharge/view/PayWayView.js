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
@CommonHead('充值')
export default class PayWayView extends PureComponent {

    constructor(props) {
        super(props);
    }



    render() {
      // console.log('2222222222222222',this.props)

        return (

           <View style={styles.container}>
              <View style={styles.body}>
                  <View style={styles.ScrollableLayout}>
                    <View style={styles.listView}>
                      <View style={styles.listLeftView}>
                        <Text style={styles.bodyText}>充值FC数量:</Text>
                      </View>
                      <View style={styles.listRightView}>
                          <UITextInput  placeholder='请输入充值数量'
                              textInputstyles={styles.textInputStyle}
                              onChangeText={(text) => this.setState({password:text})}/>
                      </View>
                        <Text style={styles.bodyText}>个</Text>
                    </View>


                    <View style={styles.line}>
                    </View>

                    <View style={styles.listView}>
                      <View style={styles.listLeftView}>
                        <Text style={styles.bodyText2}>交易总额:</Text>
                      </View>
                      <View style={styles.listRightView}>
                      <UITextInput
                          textInputstyles={styles.textInputStyle}
                          onChangeText={(text) => this.setState({password:text})}/>
                      </View>
                      <Text style={styles.bodyText2}>元</Text>
                    </View>


                    </View>
                    <View style={styles.bottomView}>
                      <View style={styles.bottomLeftView}>
                        <Text style={styles.bottomText}>付款银行卡</Text>
                      </View>

                    </View>





                    <View style={styles.ScrollableLayout2}>
                      <View style={styles.listView}>
                        <View style={styles.listLeftView}>
                          <Text style={styles.bodyText}>光大银行卡</Text>
                        </View>
                        <View style={styles.bottomRightView}>
                          <Text style={styles.bodyText2}>622**** ****987</Text>
                        </View>
                        <View style={styles.arrow}>
                          <Image  source={Img.Arrow} style={styles.arrowImg}/>
                        </View>
                      </View>

                      </View>






                      <View style={styles.bottomView3}>
                              <View style={styles.buttonLayoutStyle}>
                                          <UIButton text='确认充值' style={styles.button}
                                          handlePress={this.props.handleAgreePress}/>
                              </View>

                    </View>
                </View>



          </View>
        );
    }
}

PayWayView.defaultProps = defaultProps;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8'
  },
  arrow:{
    // marginRight:12,
    marginLeft:12,
    // flex:1,

    alignItems:'center',
    justifyContent: 'center',
    // backgroundColor:'yellow',
  },
  arrowImg:{
    height:12,
    width:12,
    resizeMode:'contain',
  },
  textInputStyle:{
    height:45,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'flex-start',
  },
  ScrollableLayout:{
    // flex:4,
    marginTop:14,
    // paddingTop:15,
    paddingLeft:15,
    backgroundColor:'#FFFFFF',
    justifyContent: 'center',
    height: Constant.deviceHeight * 0.2,
  },
  ScrollableLayout2:{
    // flex:4,
    marginTop:14,
    // paddingTop:15,
    paddingLeft:15,
    backgroundColor:'#FFFFFF',
    justifyContent: 'center',
    height: Constant.deviceHeight * 0.1,
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
    width:Constant.deviceWidth*0.35,
    marginLeft:5,
  },

  bottomView3:{

    backgroundColor: '#F8F8F8'
  },
  body:{
    flex:1,
  },

  bodyText:{
    fontSize: 15,
    color:'#333333',
  },
  bodyText2:{
    fontSize: 15,
    color:'#999999',
  },
  bottomText:{
    fontSize: 14,
    color:'#666666',
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
      alignItems:'center',
    marginBottom:5,
  },
  listLeftView:{
    width:Constant.deviceWidth*0.5,
  },
  listRightView:{
    width:Constant.deviceWidth*0.39,
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
