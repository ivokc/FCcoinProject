import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
} from 'react-native';


export default class ListMenuView extends Component {

    render() {



        return (

          <View style={styles.list}>
          <TouchableOpacity activeOpacity={0.8} onPress={() => {
              this.props.handleChoosePress( this.props);
          }}>
            <View style={styles.bodys}>
              <View style={styles.tops}>
                <View style={styles.toplefts}>
                      <Text style={styles.titleText}>
                            交易单号:
                      </Text>
                </View>
                  <Text style={styles.titleText}>
                        {this.props.tradeNum}
                  </Text>
                <View style={styles.toprights}>
                      <Text style={styles.greyText}>
                          {this.props.date}
                      </Text>
                </View>
              </View>

              <View style={styles.line}>
              </View>

              <View style={styles.middles}>
                <View style={styles.middlelefts}>
                      <Text style={styles.titleText}>
                            FC数量:
                      </Text>
                </View>
                    <Text style={styles.blackText}>
                        {this.props.fcNum}
                    </Text>
                <View style={styles.middlerights}>
                      <Text style={[styles.greyText, this.props.statusStyle]}>
                          {this.props.statusShow}
                      </Text>
                      <View style={styles.arrow}>
                        <Image  source={Img.Arrow} style={styles.arrowImg}/>
                      </View>
                </View>
              </View>

              <View style={styles.bottoms}>
                <View style={styles.bottomlefts}>
                      <Text style={styles.titleText}>
                            总额(元):{'  '}
                      </Text>
                </View>
                      <Text style={styles.blackText}>
                        {this.props.total}
                      </Text>
                <View style={styles.middlerights}>

                </View>
              </View>

            </View>

          </TouchableOpacity>

          </View>


        )
    }
}


;

const styles = StyleSheet.create({
  list:{
    // borderWidth:1,
    height:Constant.deviceHeight*0.18,
    // justifyContent:'center',
    backgroundColor:'#FFFFFF',
    // borderWidth:1,
    // borderColor:'black',
    // borderStyle:'dashed',

    // borderColor:'#00ff00',
    // borderTopColor:'red',
    // flex:1,
    marginBottom:10,
  },
  bodys:{
    // flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'center',
    // flex:1,
  },
  tops:{
    flexDirection: 'row',
      alignItems:'center',
    // alignItems:'center',
    // justifyContent: 'space-between',
    // flex:1,
  },
  middles:{
    flexDirection: 'row',
    alignItems:'center',
    // justifyContent: 'space-between',
    // flex:1,
  },
  bottoms:{
    flexDirection: 'row',
    alignItems:'center',
    // justifyContent: 'flex-start',
    // flex:1,
  },
  toplefts:{
    // flex:1,
    height:Constant.deviceHeight*0.05,
    width:Constant.deviceWidth*0.16,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'flex-start',
    marginLeft:15,
    // backgroundColor:'red',
  },
  middlelefts:{
    // flex:1,
    height:Constant.deviceHeight*0.05,
    width:Constant.deviceWidth*0.16,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'flex-start',
    marginLeft:15,
    // backgroundColor:'red',
  },
  bottomlefts:{
    // flex:1,
    height:Constant.deviceHeight*0.05,
    width:Constant.deviceWidth*0.16,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'flex-start',
    marginLeft:15,
    // backgroundColor:'red',
  },
  toprights:{
    flex:1,
    height:Constant.deviceHeight*0.06,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'flex-end',
    marginRight:15,
    // backgroundColor:'blue',
  },
  middlerights:{
    flex:1,
    height:Constant.deviceHeight*0.06,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'flex-end',
    marginRight:15,
    // backgroundColor:'blue',
  },
  titleText:{
    fontSize: 12,
    color:'#666666',
  },
  greyText:{
      fontSize: 12,
      color:'#999999',
  },
  blackText:{
      fontSize: 12,
      color:'#333333',
  },
  line:{
    borderColor:'#F4F4F4',
    borderWidth:1,
    alignItems:'center',
    justifyContent: 'center',
    width:Constant.deviceWidth*0.9,
    // marginTop:3,
    marginBottom:3,
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

  lineStyle:{
    // backgroundColor:'red',
    marginTop:12,
    marginLeft:12,
    // marginRight:10*rem,
  },

});
