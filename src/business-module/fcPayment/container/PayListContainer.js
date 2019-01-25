/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PayListView from '../view/PayListView';
import {getRechargeOrderTask} from '../vendor/Task';
// import {queryRunzoneForAPP,queryRunZoneDetail} from '../vendor/Task';

const defaultProps = {

};

const defaultState = {
    // BTDatas: [{tradeNum:'00001',date:'2019-10-10 19:00:00',fcNum:'2899.00',total:'2888.99',status:'代付款',statusStyle:'red'},
    //           {tradeNum:'00002',date:'2019-10-10 19:00:00',fcNum:'2899.00',total:'2888.99',status:'待确认到账',statusStyle:'red'},
    //         {tradeNum:'00002',date:'2019-10-10 19:00:00',fcNum:'2899.00',total:'2888.99',status:'到账确认',statusStyle:'green'},
    //       {tradeNum:'00002',date:'2019-10-10 19:00:00',fcNum:'2899.00',total:'2888.99',status:'已取消',statusStyle:'grey'},
    //       {tradeNum:'00001',date:'2019-10-10 19:00:00',fcNum:'2899.00',total:'2888.99',status:'代付款',statusStyle:'red'},
    //                 {tradeNum:'00002',date:'2019-10-10 19:00:00',fcNum:'2899.00',total:'2888.99',status:'待确认到账',statusStyle:'red'},
    //               {tradeNum:'00002',date:'2019-10-10 19:00:00',fcNum:'2899.00',total:'2888.99',status:'到账确认',statusStyle:'green'},
    //             {tradeNum:'00002',date:'2019-10-10 19:00:00',fcNum:'2899.00',total:'2888.99',status:'已取消',statusStyle:'grey'},], //BTlist
    BTDatas:[],
    secretKey:'fpay,fp,com',
    userName:'test001',
    password:'123456',
};
@CommonHead('充值明细')
class PayListContainer extends PureComponent {

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

       getRechargeOrderTask(this.props.sessionId).then((response) =>{

           console.log('~~~~~~~getRechargeOrderTask~~~~~~~',response.list.length)

           let tempBTDatas=[]
           let BTData={}
           if(response.list.length>0){
             for(var i = 0; i < response.list.length; i++){

               let statusShow=''
               let statusStyle=''
                  if(response.list[i].orderStatus=='0'){
                    statusShow='待支付'
                    statusStyle='red'
                  }else if (response.list[i].orderStatus=='1') {
                    statusShow='已支付'
                    statusStyle='green'
                  }else if (response.list[i].orderStatus=='2') {
                    statusShow='已完成'
                    statusStyle='green'
                  }else if (response.list[i].orderStatus=='3') {
                    statusShow='取消'
                    statusStyle='grey'
                  }else if (response.list[i].orderStatus=='4') {
                    statusShow='超时'
                    statusStyle='red'
                  }
                  BTData={
                    tradeNum:response.list[i].orderCode,
                    date:response.list[i].creatTime,
                    fcNum:response.list[i].fcNum,
                    total:response.list[i].orderNum,
                    statusShow:statusShow,
                    status:response.list[i].orderStatus,
                    statusStyle:statusStyle,
                    data:response.list[i],
                  }
                  tempBTDatas.push(BTData)
              }
               this.setState({BTDatas: [...tempBTDatas]})
           }else {
             this.setState({BTDatas: tempBTDatas})
           }

       }).catch((error) => {
         // Just.dismissLoading();
         // Just.ErrorHandler(error,() => { this.handleLogin() });/
         console.log('~~~~~~~error~~~~~~~',error)
      });

     }

     handleChoosePress = (pickedData) => {
      console.log('4444',pickedData.data);

        console.log('4444',pickedData.tradeNum);

        if(pickedData.status=='0'){
          //跳待支付

          //PayContainer
          this.props.navigation.navigate('Pay', {
            data:pickedData.data,  statusShow:pickedData.statusShow,
          });

        }else {
          //跳已支付

          //PayDetailContainer
          this.props.navigation.navigate('PayDetail', {
            data:pickedData.data,  statusShow:pickedData.statusShow,
          });

        }

    };


    render() {
      // console.log('33333333333',this.state.BTDatas)

        return (
            <PayListView
              navigation={this.props.navigation}
              BTDatas={this.state.BTDatas}
              handleChoosePress={this.handleChoosePress}
              />
        );
    }
}

PayListContainer.defaultProps = defaultProps;

function mapStateToProps(state) {
    // console.log('111',loginReducer);
    return {
      sessionId:state.userReducer.sessionid

    };
}

export default connect(mapStateToProps)(PayListContainer);
