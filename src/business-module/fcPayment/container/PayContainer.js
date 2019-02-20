/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PayView from '../view/PayView';
import {rechargeTask} from '../vendor/Task';
// import {queryRunzoneForAPP,queryRunZoneDetail} from '../vendor/Task';

const defaultProps = {

};

const defaultState = {
          second:600
};
@CommonHead('付款详情页',true)
class PayContainer extends PureComponent {

    constructor(props) {
        super(props);

        this.state = defaultState;


    }
    componentWillMount(){
      // this.handleReadyPress()
         // //('~~~~~~~pullLoad~~~~~~~')
           this.startTimer()
    }

    componentDidMount() {

     }
     componentWillUnmount(){
         clearInterval(this.timer);
     }

     startTimer = () => {
       this.setState({second:600})
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


     handleAgreePress=()=>{

                rechargeTask(this.props.sessionId,this.props.navigation.state.params.data.orderCode).then((response) =>{

                    //('~~~~~~~rechargeTask~~~~~~~',response)
                    clearInterval(this.timer);

                     // Mymessage.showMsg(response.message)
                     if(response.result=='false'||response.result==false){
                        throw new Error(response.message)
                     }else {
                       Mymessage.showMsg('您的订单正在确认，请稍后查看')

                               setTimeout(() =>{
                                  this.props.navigation.navigate('PayList')
                               },3000);

                    }

                    // if(response.result=='true'){
                    //
                    //      this.props.navigation.navigate('Home');
                    // }else {
                    //      this.props.navigation.navigate('Home',{result:false});
                    // }

                }).catch((error) => {
                  // Just.dismissLoading();
                  // Just.ErrorHandler(error,() => { this.handleLogin() });/
                   Mymessage.showMsg(error)
                  //('~~~~~~~error~~~~~~~',error)
               });
      }

      handleCancelPress=()=>{

      }

    render() {
      // //('33333333333',this.state.BTDatas)

        return (
            <PayView
              navigation={this.props.navigation}
              handleAgreePress={this.handleAgreePress}
              handleCancelPress={this.handleCancelPress}
              second={this.state.second}
              />
        );
    }
}

PayContainer.defaultProps = defaultProps;

function mapStateToProps(state) {
    // //('111',loginReducer);
    return {
      sessionId:state.userReducer.sessionid

    };
}

export default connect(mapStateToProps)(PayContainer);
