import React from "react";
import {StyleSheet,Picker,View,Text,Platform,Modal,Button} from "react-native";
export default class UILabelPicker extends React.Component {

  state = {
    modalVisible:false
  }
  onClickIos = () => {
    this.setState({
      modalVisible:true
    });
  }

  onConfirm = () => {
    // alert(value)
    // this.props.onValueChange(value)
    this.setState({
      modalVisible:false
    });
  }
  onCancel = () => {
    this.setState({
      modalVisible:false
    });
  }

  render() {
    return (


      <View style={[styles.container,this.props.style]}>
        <Text style={styles.label}>{this.props.label}</Text>

        {
          Platform.OS === 'android' ? (
            <Picker
              selectedValue={this.props.selectedValue}
              style={styles.pickerAndroid}
              onValueChange={this.props.onValueChange}>
              {

                this.props.data.map((ele,index) =>
                  <Picker.Item key={index} label={ele.text} value={ele.value} />
                )
              }
            </Picker>
          ) : (
            <View>

            <Text style={{color:'#999999',paddingRight:15}} onPress={this.onClickIos}>
              {this.props.selectedValue?this.props.selectedValue:'请选择'}
            </Text>

              <Modal
                transparent={true}
                visible={this.state.modalVisible}
              >
                <View style={styles.modal}>
                  <View style={{width:Constant.deviceWidth,backgroundColor:'white'}}>
                    <Button onPress={this.onConfirm} title='确认' style={{width:100}}/>
                  </View>
                  <Picker
                    selectedValue={this.props.selectedValue}
                    style={styles.pickerIos}
                    onValueChange={this.props.onValueChange}>
                    {

                      this.props.data.map((ele,index) =>
                        <Picker.Item key={index} label={ele.text} value={ele.value} />
                      )
                    }
                  </Picker>
                </View>
              </Modal>
            </View>
          )
        }
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    height:60,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor:'rgba(255,255,255,1)',
    shadowOffset:{width: 0,height: 1},
    shadowColor:'rgba(186,186,186,0.5)',
    borderBottomWidth:1,
    borderBottomColor:'rgba(186,186,186,0.5)',
  },
  label:{
    paddingLeft:15,
    fontSize:17,
    fontFamily:'PingFangSC-Regular',
    fontWeight:'400',
    color:'#333333',
  },
  pickerAndroid:{
    width:300,
    color:'#999999',
    // backgroundColor:'red'
  },
  pickerIos:{
    width:400,
    paddingRight:15,
    color:'#999999',
  },
  modal:{
     // marginTop: 22,
     flex:1,
     position:'absolute',
     bottom:0,
     // left:0,
     width:Constant.deviceWidth,
     height: 300,
     backgroundColor:'#999999',
     // justifyContent:'flex-end',
     alignItems:'center',
     // paddingBottom: 40,
     // marginTop: 200,

  }


});
