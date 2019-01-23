import React from "react";
import { View,StyleSheet,TextInput} from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';

export default class UIIconInput extends React.Component {
  state = {text:''}
  render() {
    return (
      <View style={[styles.container,this.props.style]}>
        <Icon style={styles.icon} name={this.props.icon} size={30} color="#CCCCCC" />
        <TextInput 
          {...this.props}
          style={styles.textInput}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />


      </View>

      
    );
  }
}
const styles = StyleSheet.create({
  container:{
    height:50,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomWidth:1,
    borderColor:'rgba(237,237,237,1)'
  },
  icon:{
    flex:1
  },
  textInput:{
    flex:9,
  }
});
