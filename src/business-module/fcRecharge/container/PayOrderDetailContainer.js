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
         // //('~~~~~~~pullLoad~~~~~~~')
    }

    componentDidMount() {

     }

     handleAgreePress=()=>{
        //('~~~~~~~44444444444444~~~~~~~')
       paymentTask(this.props.sessionId,this.props.navigation.state.params.orderCode).then((response) =>{

           //('~~~~~~~paymentTask~~~~~~~',response)

           if(response.result=='true'){

                this.props.navigation.navigate('PayResult',{result:true});
           }else {
                this.props.navigation.navigate('PayResult',{result:false});
           }

       }).catch((error) => {
         // Just.dismissLoading();
         // Just.ErrorHandler(error,() => { this.handleLogin() });/
         //('~~~~~~~error~~~~~~~',error)
      });
     }


    render() {
      // //('33333333333',this.state.BTDatas)

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
    // //('111',loginReducer);
    return {
      sessionId:state.userReducer.sessionid

    };
}
export default connect(mapStateToProps)(PayOrderDetailContainer);
