import React from "react";
import {Modal,View,StyleSheet,ActivityIndicator,TouchableWithoutFeedback,Text} from "react-native";


export default class UIMessage extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          visible:false,
          msg:'',
          type:''
      };
  }
  showMsg(msg){
    this.setState({visible:true,msg,type:'msg'})
    this.timer = setTimeout(() => {
      this.state.visible && this.setState({visible:false,msg:''});
      this.timer && clearInterval(this.timer);
    }, 5000); 
  }
  hide(){
      this.setState({visible:false})
  }

  showLoading(){
    this.setState({visible:true,type:'loading'})
  }
  render() {
     return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={this.state.visible}
        onRequestClose={() => {
          if (this.state.type == 'msg') {
            this.setState({visible:false})
          }
        }}
      >
        {
          this.state.type == 'msg' ? (
            <TouchableWithoutFeedback onPress={() => {this.setState({visible:false})}}>
            <View style={styles.background}>
              <View style={styles.container1} >
                <Text style={styles.msg}>{this.state.msg}</Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
          ) : (
            <View style={styles.container2}>
            <ActivityIndicator style={{marginTop:20}} size="large" color="white" />
            <Text style={styles.text}>FPay</Text>
          </View>
          )
        }
      </Modal>
     )
  }    
}        
const styles = StyleSheet.create({
  background:{
    flex:1,
    justifyContent:'center',
    padding:30
  },
  container1:{ 
    height:40,
    backgroundColor:'#000000',
    opacity:0.5,
    borderRadius:7,
  },
  msg:{
    textAlign:'center',
    fontSize:17,
    fontFamily:'PingFangSC-Regular',
    color:'white',
    lineHeight:40
  },
  container2:{ 
    position:'absolute',
    left:Constant.deviceWidth/2 - 50,
    top:Constant.deviceHeight/2 - 100,
    width:100,
    height:100,
    backgroundColor:'#000000',
    opacity:0.5,
    borderRadius:13,
  },
  text:{
    marginTop:10,
    color:'white',
    fontSize:17,
    alignSelf:'center',
    fontFamily:'PingFangSC-Regular',
    fontWeight:'400'
  }
});
