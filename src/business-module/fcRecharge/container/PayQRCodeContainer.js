/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PayQRCodeView from '../view/PayQRCodeView';
import {creatPaymentOrderTask} from '../vendor/Task';
// import {queryRunzoneForAPP,queryRunZoneDetail} from '../vendor/Task';

const defaultProps = {

};

const defaultState = {
    merchantOrderCode:'12345',
    BTDatas:[],
    cardNumbers:[],
    total:'',
};
@CommonHead('充值')
@AutoHideKeyboard
class PayQRCodeContainer extends PureComponent {

    constructor(props) {
        super(props);

        this.state = defaultState;


    }
    componentWillMount(){

    }

    componentDidMount() {

     }




     fcInput=(value)=>{
       console.log('~~~~~~~value~~~~~~~',value)
       this.setState({total:value})
     }

     handleAgreePress=()=>{
        // console.log('~~~~~~~44444444444444~~~~~~~')
       let qrcode = this.props.navigation.getParam('qrcode','');
       creatPaymentOrderTask(this.props.sessionId,this.state.total,qrcode).then((response) =>{

           console.log('~~~~~~~creatPaymentOrderTask~~~~~~~',response)
           let qrdata={}
           qrdata={
             orderCode:response.orderCode,
             orderNum:response.orderNum,
             merchantOrderCode:response.merchantOrderCode,
             merchant:response.merchantFpUser.userName,
           }
             this.props.navigation.navigate('PayOrderDetail',qrdata);

       }).catch((error) => {
         // Just.dismissLoading();
         // Just.ErrorHandler(error,() => { this.handleLogin() });/
         console.log('~~~~~~~error~~~~~~~',error)
      });
     }

    render() {
      // console.log('33333333333',this.state.BTDatas)

        return (
            <PayQRCodeView
              navigation={this.props.navigation}
              BTDatas={this.state.BTDatas}

              fcInput={this.fcInput}
              total={this.state.total}
              handleAgreePress={this.handleAgreePress}
              />
        );
    }
}

PayQRCodeContainer.defaultProps = defaultProps;

function mapStateToProps(state) {
    // console.log('111',loginReducer);
    return {
      sessionId:state.userReducer.sessionid

    };
}

export default connect(mapStateToProps)(PayQRCodeContainer);
