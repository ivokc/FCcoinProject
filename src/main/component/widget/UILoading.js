import React from "react";
import {Modal,ActivityIndicator,StyleSheet,Text,View} from "react-native";


export default class UILoading extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          visible:false
      };
  }
  show(){
      this.setState({visible:true})
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
            // alert("Modal has been closed.");
          }}
        >
          <View style={styles.container}>
            <ActivityIndicator style={{marginTop:20}} size="large" color="white" />
            <Text style={styles.text}>FPay</Text>
          </View>
      </Modal>
     )
  }    
}        
const styles = StyleSheet.create({
  container:{ 
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
