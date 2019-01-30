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
    cardCode:[],
    total:'',
    bankCard:false,
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
                 // Mymessage.show('11111111111')
    }

    componentDidMount() {

     }


     getList = () => {

       getBankDatasTask(this.props.sessionId).then((response) =>{

           console.log('~~~~~~~getBankDatasTask~~~~~~~',response.data.list)

           let tempBTDatas=[]
           let BTData={}
           let tempcardNumbers=[]
           let tempCardCode=[]
           if(response.data.list.length>0){
             for(var i = 0; i < response.data.list.length; i++){

                  BTData={
                    label:response.data.list[i].bankName+'                                    '+response.data.list[i].cardNumber,
                    value:response.data.list[i].bankName+'                                    '+response.data.list[i].cardNumber,
                  }
                  tempBTDatas.push(BTData)
                  tempcardNumbers.push(response.data.list[i].cardNumber)
                  tempCardCode.push(response.data.list[i].cardCode)
              }
               this.setState({BTDatas: [...tempBTDatas]})
               this.setState({cardNumbers: [...tempcardNumbers]})
               this.setState({bankCard: true})
               this.setState({cardNumber:response.data.list[0].cardCode})
               this.setState({cardCode: [...tempCardCode]})
           }else {

              //未绑定银行卡，跳转到开卡界面！！！！！！！！！！！
               this.setState({bankCard: false})
              // this.props.navigation.navigate('UserBankAcct');

           }

       }).catch((error) => {
         // Just.dismissLoading();
         // Just.ErrorHandler(error,() => { this.handleLogin() });/
         Mymessage.show(error)
         console.log('~~~~~~~error~~~~~~~',error)
      });

     }

     handleChoosePress=(value,itemIndex)=>{
       // console.log('~~~~~~~value~~~~~~~',value)
       //        console.log('~~~~~~~itemIndex~~~~~~~',itemIndex)
       //          console.log('~~~~~~~itemIndex~~~~~~~',this.state.cardNumbers[itemIndex])
       //  console.log('~~~~~~~itemIndex~~~~~~~',this.state.cardCode[itemIndex])
        this.setState({cardNumber:this.state.cardCode[itemIndex]})
     }

     fcInput=(value)=>{
       console.log('~~~~~~~value~~~~~~~',value)
         this.setState({total:value})

     }

     handleBankPress=()=>{
       this.props.navigation.navigate('UserBankAcct');
     }

     handleAgreePress=()=>{
        console.log('~~~~~~~44444444444444~~~~~~~')
        console.log('~~~~~~~value~~~~~~~',Regex.intege1.test(this.state.total))
        if(Regex.intege1.test(this.state.total)){
            if(this.state.total<100){
               Mymessage.show('充值最小为100')
               return
            }

                creatRechargeOrderTask(this.props.sessionId,this.state.total,this.state.cardNumber).then((response) =>{

                    console.log('~~~~~~~creatRechargeOrderTask~~~~~~~',response)
                    if(response.result=='false'||response.result==false){
                       throw new Error(response.message)
                    }else {

                      let orderCode=response.data.orderCode

                      Constant.qqNum = response.data.payFpUser.qq;


                      this.props.navigation.navigate('Pay', {
                        data:response.data,  statusShow:'待支付',
                      });

                    }


                         // this.props.navigation.navigate('PayResult');

                }).catch((error) => {
                  // Just.dismissLoading();
                  // Just.ErrorHandler(error,() => { this.handleLogin() });/
                   Mymessage.show(error)
                  console.log('~~~~~~~error~~~~~~~',error.message)
               });
          }else {
             Mymessage.show('充值FC数量不正确')
          }

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
              handleBankPress={this.handleBankPress}
              bankCard={this.state.bankCard}
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
