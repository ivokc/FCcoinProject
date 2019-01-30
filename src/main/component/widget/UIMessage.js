import React from "react";
import {Modal,View,StyleSheet,TouchableWithoutFeedback,Text} from "react-native";


export default class UIMessage extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          visible:false,
          msg:''
      };
  }
  show(msg){
    
    this.setState({visible:true,msg})
    this.timer = setTimeout(() => {
      this.state.visible && this.setState({visible:false,msg:''});
      this.timer && clearInterval(this.timer);
    }, 5000); 
  }
  hide(){
      this.setState({visible:false})
  }
  render() {
     return (
      <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.visible}
          onRequestClose={() => {
            this.setState({visible:false})

          }}
        >
          <TouchableWithoutFeedback onPress={() => {this.setState({visible:false})}}>
            <View style={styles.background}>
              <View style={styles.container} >
                <Text style={styles.msg}>{this.state.msg}</Text>
              </View>
            </View>
            
          </TouchableWithoutFeedback>
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
  container:{ 
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
  }
});
