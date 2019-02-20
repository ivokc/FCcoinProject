import React from "react";
import { View,StyleSheet,TextInput,Text,TouchableWithoutFeedback} from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';



export default class UIIconInput extends React.Component {

  state = {
    second:0
  }
  componentWillMount() {
    if(this.props.action === 'sms') {
      // this.startTimer()
      this.setState({
        actionLabel:'发送短信'
      })
    }
    
  }
  componentWillUnmount() {
    this.timer && clearInterval(this.timer);
  }

  startTimer = () => {
    this.setState({second:60})
    this.timer = setInterval(() => {
      this.setState((state) => {
        if(state.second == 0){
          this.timer && clearInterval(this.timer);
          return {
            second:0
          }
        }else{
          return {
            second:state.second - 1
          }
        }
      });
    }, 1000); 
  }

  handleActionPress = () => {
    let result = this.props.handleActionPress();
    if (result) {
      this.startTimer();
      this.setState({
        actionLabel:'重新发送'
      })
    }
  }

  renderAction = () => {
    if (this.props.action === 'sms') {
      if(this.state.second != 0) {
        return (
          <View style={styles.sms}>
            <Text style={[styles.text,{color:'#BABABA'}]}>{this.state.second}s后重试</Text>
          </View>
        );
      }else{
        return (
          <TouchableWithoutFeedback onPress={this.handleActionPress} style={styles.sms}>
            <Text style={styles.text}>{this.state.actionLabel}</Text>
          </TouchableWithoutFeedback>
        );
      }
      
    }else {
      return null;
    }
  }
  
  render() {
    return (
      
      <View style={[styles.container,this.props.style]}>
        <Icon style={styles.icon} name={this.props.icon} size={30} color="#CCCCCC" />
        <TextInput 
          {...this.props}
          style={[styles.textInput,this.props.action ? {flex:6}: {flex:9}]}
          placeholderTextColor='rgba(204,204,204,1)'
          onChangeText={this.props.onChangeText}
        />
          {
            this.renderAction()
          }
          
      </View>

      
    );
  }
}
UIIconInput.defaultProps = {
  action: null,
};
const styles = StyleSheet.create({
  container:{
    height:75,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'flex-start',
    borderBottomWidth:1,
    borderColor:'rgba(237,237,237,1)'
  },
  icon:{
    flex:1
  },
  textInput:{
    fontSize:20,
    fontFamily:'PingFangSC-Regular'
  },
  sms: {
    flex:3,
    height:40,
    flexDirection: 'row',
    alignItems:'center',

  },
  text:{
    borderColor:'#EDEDED',
    borderLeftWidth:1,
    paddingLeft:15,
    fontSize:16,
    fontFamily:'PingFangSC-Regular',
    color:'rgba(114,109,254,1)'
  }
});
