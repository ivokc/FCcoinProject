import React from "react";
import { View,StyleSheet,Image,ImageBackground,Text,Button} from "react-native";

@CommonHead('充值明细')
export default class JJmView extends React.Component {

  

  onMenuItemPress = () => {
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>fsdfsdf</Text>
        <Button onPress={() => this.props.navigation.navigate('YQ')} title="点我！"></Button>
      </View>
      
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex:1
  },
 


});
