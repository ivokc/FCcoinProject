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
    merchantOrderCode:'JGRTDHJIOUOJKLHUFJGFRFREDP<MBDWEUJKJFTERTFCYGOHHFYTIHBUUIIOIIOIIOOOOO',
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
       //('~~~~~~~value~~~~~~~',value)
       this.setState({total:value.replace(/[^\d]+/, '')})
     }

     handleAgreePress=()=>{
        // //('~~~~~~~44444444444444~~~~~~~')
          if(Regex.intege1.test(this.state.total)){

            // if(this.state.total<100){
            //    Mymessage.showMsg('充值最小为100')
            //    return
            // }

            let qrcode = this.props.navigation.getParam('qrcode','');
              // let qrcode = this.state.merchantOrderCode
            creatPaymentOrderTask(this.props.sessionId,this.state.total,qrcode).then((response) =>{

                //('~~~~~~~creatPaymentOrderTask~~~~~~~',response)


                if(response.result=='false'||response.result==false){
                   throw new Error(response.message)
                }else {

                  let qrdata={}
                  qrdata={
                    orderCode:response.data.orderCode,
                    orderNum:response.data.orderNum,
                    merchantOrderCode:response.data.merchantOrderCode,
                    merchant:response.data.merchantFpUser.userName,
                  }
                  this.props.navigation.navigate('PayOrderDetail',qrdata);

                }



            }).catch((error) => {
              // Just.dismissLoading();
              // Just.ErrorHandler(error,() => { this.handleLogin() });/
               Mymessage.showMsg(error)
              //('~~~~~~~error~~~~~~~',error)
           });
          }else {
             Mymessage.showMsg('充值金额不正确')
          }

     }

    render() {
      // //('33333333333',this.state.BTDatas)

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
    // //('111',loginReducer);
    return {
      sessionId:state.userReducer.sessionid

    };
}

export default connect(mapStateToProps)(PayQRCodeContainer);
