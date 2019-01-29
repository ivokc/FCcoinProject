/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PayOrderDetailView from '../view/PayOrderDetailView';
import {paymentTask} from '../vendor/Task';
// import {queryRunzoneForAPP,queryRunZoneDetail} from '../vendor/Task';

const defaultProps = {

};

const defaultState = {

};
@CommonHead('订单支付详情')
@AutoHideKeyboard
class PayOrderDetailContainer extends PureComponent {

    constructor(props) {
        super(props);

        this.state = defaultState;


    }
    componentWillMount(){
      // this.handleReadyPress()
         // console.log('~~~~~~~pullLoad~~~~~~~')
    }

    componentDidMount() {

     }

     handleAgreePress=()=>{
        console.log('~~~~~~~44444444444444~~~~~~~')
       paymentTask(this.props.sessionId,this.props.navigation.state.params.orderCode).then((response) =>{

           console.log('~~~~~~~paymentTask~~~~~~~',response)

           if(response.result=='true'){

                this.props.navigation.navigate('PayResult',{result:true});
           }else {
                this.props.navigation.navigate('PayResult',{result:false});
           }

       }).catch((error) => {
         // Just.dismissLoading();
         // Just.ErrorHandler(error,() => { this.handleLogin() });/
         console.log('~~~~~~~error~~~~~~~',error)
      });
     }


    render() {
      // console.log('33333333333',this.state.BTDatas)

        return (
            <PayOrderDetailView
              navigation={this.props.navigation}
            handleAgreePress={this.handleAgreePress}
              />
        );
    }
}

PayOrderDetailContainer.defaultProps = defaultProps;

function mapStateToProps(state) {
    // console.log('111',loginReducer);
    return {
      sessionId:state.userReducer.sessionid

    };
}
export default connect(mapStateToProps)(PayOrderDetailContainer);
