import React from "react";
import { View,StyleSheet,Image,ImageBackground,Text,TouchableOpacity} from "react-native";

export default class RechargeDetView extends React.Component {





  onMenuItemPress = () => {

  }
  render() {
    console.log('1234124124',Img.FCRecharge);
    
    return (
      
      <View style={styles.container}>
        <ImageBackground style={styles.assets} source={Img.AssertsBg}>
          <Text style={styles.assertsTitle}>总资产FC (币)</Text>
          <Text style={styles.assertsValue}>10000.00</Text>
          <View style={styles.subAssetsBox}>
            <View style={styles.availableBox}>
              <Text style={styles.assertsTitle}>可用FC (币)</Text>
              <Text style={styles.subAssertsValue}>8000.00</Text>
            </View>
            <View style={styles.frozenBox}>
              <Text style={styles.assertsTitle}>冻结FC (币)</Text>
              <Text style={styles.subAssertsValue}>8000.00</Text>
            </View>
          </View>
        </ImageBackground>
        <ImageBackground style={styles.menu} source={Img.MenuBg}>
          <TouchableOpacity style={styles.menuItem} onPress={this.onMenuItemPress}>
            <Image
              style={styles.menuItemPic}
              source={Img.FCRecharge}
            />
            <Text style={styles.menuItemTxt}>FC充值</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={this.onMenuItemPress}>
            <Image
              style={styles.menuItemPic}
              source={Img.Scan}
            />
            <Text style={styles.menuItemTxt}>扫一扫</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={this.onMenuItemPress}>
            <Image
              style={styles.menuItemPic}
              source={Img.RechargeDet}
            />
            <Text style={styles.menuItemTxt}>充值明细</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={this.onMenuItemPress}>
            <Image
              style={styles.menuItemPic}
              source={Img.OrderDet}
            />
            <Text style={styles.menuItemTxt}>订单明细</Text>
          </TouchableOpacity>
        </ImageBackground>

        <View style={styles.content} />
      </View>
      
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex:1
  },
  assets:{
    flex:2,
    padding:20
  },
  subAssetsBox:{
    flex:1,
    flexDirection: 'row',
    alignItems:'center'
  },
  availableBox:{
    flex:1,
  },
  subAssertsValue:{
    width:176,
    height:30,
    fontSize:25,
    fontFamily:'PingFangSC-Regular',
    fontWeight:'400',
    color:'rgba(221,211,255,1)',
  },
  frozenBox:{
    flex:1,
    paddingLeft:20,
    borderLeftWidth:1,
    borderColor:'#B099FF',
  },
  assertsTitle:{
    width:176,
    height:30,
    fontSize:20,
    fontFamily:'PingFangSC-Regular',
    fontWeight:'400',
    color:'rgba(221,211,255,1)',
  },
  assertsValue:{
    width:308,
    height:70,
    fontSize:50,
    fontFamily:'PingFangSC-Regular',
    fontWeight:'400',
    color:'rgba(255,255,255,1)',
  },
  menu:{
    flex:1,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'space-evenly',
  },
  content:{
    flex:3,
    backgroundColor: 'rgba(245,245,245,1)'
  },
  menuItem:{
    width:70,
    height:70,
    alignItems:'center',
  },
  menuItemPic:{
    width:40,
    height:35,
    resizeMode:'contain'
  },
  menuItemTxt:{
    height:40,
    fontSize:15,
    fontFamily:'PingFangSC-Regular',
    fontWeight:'400',
    color:'rgba(51,51,51,1)',
    lineHeight:37
  }


});
