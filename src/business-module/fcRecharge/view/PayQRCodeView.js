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
    View,Image,ScrollView,Picker
} from 'react-native';

import {UITextInput,UIButton} from '../../../main/component/UIComponents'


const defaultProps = {

};

const defaultState = {

};

export default class PayQRCodeView extends PureComponent {

    constructor(props) {
        super(props);

        this.state =  {
            language: '',
      };
    }


    render() {
      const {BTDatas} = this.props;
      // //('2222222222222222',this.props)
      // const Array=[{label:'1',value:'1'},{label:'2',value:'2'}]
      // //('2222222222222222',BTDatas)
        return (

           <View style={styles.container}>
              <View style={styles.body}>
                  <View style={styles.ScrollableLayout}>
                    <View style={styles.listView}>
                      <View style={styles.listLeftView}>
                        <Text style={styles.bodyText}>充值金额:</Text>
                      </View>
                      <View style={styles.listRightView}>
                          <UITextInput  placeholder='请输入充值金额'
                                  keyboardType={'numeric'}
                                  value={this.props.total}
                              textInputstyles={styles.textInputStyle}
                              onChangeText={(text) =>  this.props.fcInput(text)}/>


                      </View>
                        <Text style={styles.bodyText}>元</Text>
                    </View>





                    </View>








                      <View style={styles.bottomView3}>
                              <View style={styles.buttonLayoutStyle}>
                                          <UIButton text='确认充值' style={styles.button}
                                          onPress={this.props.handleAgreePress}/>
                              </View>

                    </View>
                </View>



          </View>
        );
    }
}

PayQRCodeView.defaultProps = defaultProps;

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

    backgroundColor: '#FFFFFF'
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
  listRightView2:{
    width:Constant.deviceWidth*0.36,
    marginLeft:13
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
