import React from "react";
import {Modal,ActivityIndicator,StyleSheet,Text} from "react-native";


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
          animationType="slide"
          transparent={true}
          visible={this.state.visible}
          onRequestClose={() => {
            // alert("Modal has been closed.");
          }}
        >
          <ActivityIndicator style={styles.indicator} size="large" color="#0000ff" />
      </Modal>
     )
  }    
}        
const styles = StyleSheet.create({
  indicator:{ 
    position:'absolute',
    left:Constant.deviceWidth/2 - 50,
    top:Constant.deviceHeight/2 - 100,
    width:100,
    height:100,
    backgroundColor:'#000000',
    opacity:0.5,
    borderRadius:13,
  }
});
