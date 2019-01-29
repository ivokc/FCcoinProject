import React from "react";
import {Modal,View,StyleSheet,TouchableWithoutFeedback} from "react-native";


export default class UIMessage extends React.Component {
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
            this.setState({visible:false})

          }}
        >
          <TouchableWithoutFeedback onPress={() => {}}>

          <View style={styles.container} size="large" color="#0000ff" >
          </View>
          </TouchableWithoutFeedback>
      </Modal>
     )
  }    
}        
const styles = StyleSheet.create({
  container:{ 
    alignSelf:'center',
    
    width:300,
    height:50,
    backgroundColor:'#000000',
    opacity:0.5,
    borderRadius:5,
  }
});
