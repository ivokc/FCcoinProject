/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PayWayView from '../view/PayWayView';
import {getBankDatasTask,creatRechargeOrderTask,rechargeTask} from '../vendor/Task';
// import {queryRunzoneForAPP,queryRunZoneDetail} from '../vendor/Task';

const defaultProps = {

};

const defaultState = {
    cardNumber:'',
    BTDatas:[],
    cardNumbers:[],
    total:'',
};
@CommonHead('充值')
@AutoHideKeyboard
class PayWayContainer extends PureComponent {

    constructor(props) {
        super(props);

        this.state = defaultState;


    }
    componentWillMount(){
        this.getList()
         // console.log('~~~~~~~pullLoad~~~~~~~')
    }

    componentDidMount() {

     }


     getList = () => {

       getBankDatasTask(this.props.sessionId).then((response) =>{

           console.log('~~~~~~~getBankDatasTask~~~~~~~',response.list)

           let tempBTDatas=[]
           let BTData={}
           let tempcardNumbers=[]
           if(response.list.length>0){
             for(var i = 0; i < response.list.length; i++){

                  BTData={
                    label:response.list[i].bankName+'                                    '+response.list[i].cardNumber,
                    value:response.list[i].bankName+'                                    '+response.list[i].cardNumber,
                  }
                  tempBTDatas.push(BTData)
                  tempcardNumbers.push(response.list[i].cardNumber)
              }
               this.setState({BTDatas: [...tempBTDatas]})
               this.setState({cardNumbers: [...tempcardNumbers]})


           }else {

              //未绑定银行卡，跳转到开卡界面！！！！！！！！！！！

              this.props.navigation.navigate('Home');

           }

       }).catch((error) => {
         // Just.dismissLoading();
         // Just.ErrorHandler(error,() => { this.handleLogin() });/
         console.log('~~~~~~~error~~~~~~~',error)
      });

     }

     handleChoosePress=(value,itemIndex)=>{
       console.log('~~~~~~~value~~~~~~~',value)
              console.log('~~~~~~~itemIndex~~~~~~~',itemIndex)
                console.log('~~~~~~~itemIndex~~~~~~~',this.state.cardNumbers[itemIndex])
        this.setState({cardNumber:value})
     }

     fcInput=(value)=>{
       console.log('~~~~~~~value~~~~~~~',value)
       this.setState({total:value})
     }

     handleAgreePress=()=>{
        console.log('~~~~~~~44444444444444~~~~~~~')
       creatRechargeOrderTask(this.props.sessionId,this.state.total,this.state.cardNumber).then((response) =>{

           console.log('~~~~~~~creatRechargeOrderTask~~~~~~~',response)

           let orderCode=response.orderCode

           Constant.qqNum = response.payFpUser.qq;
           rechargeTask(this.props.sessionId,orderCode).then((response) =>{

               console.log('~~~~~~~rechargeTask~~~~~~~',response)

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



             // this.props.navigation.navigate('PayResult');

       }).catch((error) => {
         // Just.dismissLoading();
         // Just.ErrorHandler(error,() => { this.handleLogin() });/
         console.log('~~~~~~~error~~~~~~~',error)
      });
     }

    render() {
      // console.log('33333333333',this.state.BTDatas)

        return (
            <PayWayView
              navigation={this.props.navigation}
              BTDatas={this.state.BTDatas}
              cardNumber={this.state.cardNumber}
              handleChoosePress={this.handleChoosePress}
              fcInput={this.fcInput}
              total={this.state.total}
              handleAgreePress={this.handleAgreePress}
              />
        );
    }
}

PayWayContainer.defaultProps = defaultProps;

function mapStateToProps(state) {
    // console.log('111',loginReducer);
    return {
      sessionId:state.userReducer.sessionid

    };
}

export default connect(mapStateToProps)(PayWayContainer);
