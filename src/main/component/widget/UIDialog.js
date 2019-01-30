import React from "react";
import {Modal,View,StyleSheet,TouchableWithoutFeedback,Text} from "react-native";


export default class UIDialog extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          visible:false,
          msg:''
      };
  }
  show(msg){
    this.setState({visible:true,msg})
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
        <View style={styles.background}>
          <View style={styles.container} >
            <Text style={styles.msg}>{this.state.msg}</Text>
          </View>
        </View>
            
      </Modal>
     )
  }    
}        
const styles = StyleSheet.create({
  background:{
    flex:1,
    justifyContent:'center',
    padding:50,
    backgroundColor:'#000000',
    opacity:0.7,
  },
  container:{ 
    height:120,
    backgroundColor:'white',
    borderRadius:7,
    elevation:3,
    zIndex:1
  },
  msg:{
    textAlign:'center',
    fontSize:17,
    fontFamily:'PingFangSC-Regular',
    color:'white',
    lineHeight:40
  }
});
