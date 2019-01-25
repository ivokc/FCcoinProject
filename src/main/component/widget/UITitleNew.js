/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import React, { PureComponent} from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    Image,
    View
} from 'react-native';



const defaultProps = {

};

const defaultState = {

};

export default class UITitleNew extends PureComponent {

    constructor(props) {
        super(props);

        this.state = defaultState;
    }

    render() {
      const {isMiddle} = this.props
      // console.log('22222222',isMiddle)
        return (
          <View>
            {isMiddle==true?
                <View style={[styles.container, this.props.style]}>
                    <TouchableOpacity activeOpacity={0.8} style={[styles.buttonStyle, this.props.buttonStyle]} onPress={this.props.handleTitlePress}>
                      <View style={styles.titleImg}>
                        <Image  source={Img.ArrowBack} style={styles.img}/>
                      </View>
                    </TouchableOpacity>
                    <View  style={this.props.rightImg ? styles.titleText2: styles.titleText}>
                        <Text style={[styles.titleStyle, this.props.titleStyle]}>
                             {this.props.title}
                        </Text>
                    </View>
                    {
                      this.props.rightImg?
                        <TouchableOpacity activeOpacity={0.8} style={[styles.buttonStyle, this.props.buttonStyle]} onPress={this.props.handleTitleMenuPress}>
                          <View style={styles.titleImg2}>
                            <Image  source={this.props.rightImg} style={styles.img2}/>
                          </View>
                        </TouchableOpacity>:null
                    }
                </View>
              :
              <View style={[styles.container, this.props.style]}>
                  <TouchableOpacity activeOpacity={0.8} style={[styles.buttonStyle, this.props.buttonStyle]} onPress={this.props.handleTitlePress}>
                    <View style={styles.titleImg}>
                      <Image  source={Img.ArrowBack} style={styles.img}/>
                    </View>
                  </TouchableOpacity>
                  <View  style={this.props.rightImg ? styles.titleText4: styles.titleText3}>
                      <Text style={[styles.titleStyle, this.props.titleStyle]}>
                           {this.props.title}
                      </Text>
                  </View>
                  {
                    this.props.rightImg?
                      <TouchableOpacity activeOpacity={0.8} style={[styles.buttonStyle, this.props.buttonStyle]} onPress={this.props.handleTitleMenuPress}>
                        <View style={styles.titleImg2}>
                          <Image  source={this.props.rightImg} style={styles.img2}/>
                        </View>
                      </TouchableOpacity>:null
                  }
              </View>}


            </View>
        );
    }
}


UITitleNew.defaultProps = defaultProps;

const styles = StyleSheet.create({
    container: {
      // flex:9,
      height:Constant.deviceHeight*0.07,
      backgroundColor: '#FFFFFF',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    },
    titleImg:{
      flex:1,
      // backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight:-15,
    },
    titleImg2:{
      flex:1,
      // backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight:8,
    },
    titleText:{
      flex:8,
      // backgroundColor: 'blue',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight:20,
    },
    titleText2:{
      flex:8,
        // backgroundColor: 'blue',
      alignItems: 'center',
      justifyContent: 'center',
        marginLeft:30,
    },
    titleText3:{
      flex:8,
      // alignItems: 'center',
        // backgroundColor: 'blue',
      justifyContent: 'center',
      marginRight:50,
    },
    titleText4:{
      flex:8,
      // alignItems: 'center',
        // backgroundColor: 'blue',
      justifyContent: 'center',
    },
    img:{
      width:Constant.deviceWidth*0.14,
      height: 15,
      resizeMode:'contain',
    },
    img2:{
      width:Constant.deviceWidth*0.15,
      height: 16 ,
      resizeMode:'contain',
    },
    titleStyle: {
      color: '#444444',
      fontSize: 16,

    },


});
