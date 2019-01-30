import React from "react";
import { ScrollView,StyleSheet,View,Image} from "react-native";

@CommonHead('帮助中心')
export default class HelpView extends React.Component {
  
  render() {
    return (
      <ScrollView>
          <Image source={Img.Help1} resizeMode='contain' style={styles.imageBackground}/>
          <Image source={Img.Help2} resizeMode='contain' style={styles.imageBackground}/>
      </ScrollView>
      
      
    );
  }
}
const styles = StyleSheet.create({
  imageBackground: {
    width:Constant.deviceWidth ,
    height:Constant.deviceWidth * 2.7
  }
  
});
