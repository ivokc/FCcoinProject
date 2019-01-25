/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import OrderListView from '../view/OrderListView';
import {getPaymentOrdersTask} from '../vendor/Task';
import {userReducer} from '../../auth/vendor/dataflow/Reducer';
// import {queryRunzoneForAPP,queryRunZoneDetail} from '../vendor/Task';

const defaultProps = {

};

const defaultState = {
    // BTDatas: [{tradeNum:'00001',date:'2019-10-10 19:00:00',fcNum:'2899.00',total:'2888.99',status:'支付失败',statusStyle:'red',sellerName:'九龙国际平台',sellerNum:'0012222344'},
    //           {tradeNum:'00002',date:'2019-10-10 19:00:00',fcNum:'2899.00',total:'2888.99',status:'支付失败',statusStyle:'red',sellerName:'九龙国际平台',sellerNum:'0012222344'},
    //         {tradeNum:'00002',date:'2019-10-10 19:00:00',fcNum:'2899.00',total:'2888.99',status:'支付成功',statusStyle:'green',sellerName:'九龙国际平台',sellerNum:'0012222344'},
    //       {tradeNum:'00002',date:'2019-10-10 19:00:00',fcNum:'2899.00',total:'2888.99',status:'支付成功',statusStyle:'green',sellerName:'九龙国际平台',sellerNum:'0012222344'},
    //       {tradeNum:'00001',date:'2019-10-10 19:00:00',fcNum:'2899.00',total:'2888.99',status:'支付失败',statusStyle:'red',sellerName:'九龙国际平台',sellerNum:'0012222344'},
    //                 {tradeNum:'00002',date:'2019-10-10 19:00:00',fcNum:'2899.00',total:'2888.99',status:'支付失败',statusStyle:'red',sellerName:'九龙国际平台',sellerNum:'0012222344'},
    //               {tradeNum:'00002',date:'2019-10-10 19:00:00',fcNum:'2899.00',total:'2888.99',status:'支付成功',statusStyle:'green',sellerName:'九龙国际平台',sellerNum:'0012222344'},
    //             {tradeNum:'00002',date:'2019-10-10 19:00:00',fcNum:'2899.00',total:'2888.99',status:'支付成功',statusStyle:'green',sellerName:'九龙国际平台',sellerNum:'0012222344'},], //BTlist
    BTDatas:[],
    secretKey:'fpay,fp,com',
    userName:'test001',
    password:'123456',
};
@CommonHead('订单支付明细')
class OrderListContainer extends PureComponent {

    constructor(props) {
        super(props);

        this.state = defaultState;


    }
    componentWillMount(){
      this.getList()

    }

    componentDidMount() {

     }



     getList = () => {

       getPaymentOrdersTask(this.props.sessionId).then((response) =>{

           console.log('~~~~~~~OrderListContainer~~~~~~~',response.list.length)

           let tempBTDatas=[]
           let BTData={}
           if(response.list.length>0){
             for(var i = 0; i < response.list.length; i++){

               let status=''
               let statusStyle=''
                  if(response.list[i].orderStatus=='0'){
                    status='待支付'
                    statusStyle='red'
                  }else if (response.list[i].orderStatus=='1') {
                    status='已支付'
                    statusStyle='green'
                  }else if (response.list[i].orderStatus=='2') {
                    status='已完成'
                    statusStyle='green'
                  }else if (response.list[i].orderStatus=='3') {
                    status='取消'
                    statusStyle='grey'
                  }else if (response.list[i].orderStatus=='4') {
                    status='超时'
                    statusStyle='red'
                  }
                  BTData={
                    tradeNum:response.list[i].orderCode,
                    date:response.list[i].creatTime,
                    fcNum:response.list[i].orderNum,
                    status:status,
                    statusStyle:statusStyle,
                    sellerName:response.list[i].merchantFpUser.refName,
                    sellerNum:response.list[i].merchantOrderCode,
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




    render() {
      // console.log('33333333333',this.state.BTDatas)

        return (
            <OrderListView
              navigation={this.props.navigation}
              BTDatas={this.state.BTDatas}

              />
        );
    }
}

OrderListContainer.defaultProps = defaultProps;

function mapStateToProps(state) {
    return {
      sessionId:state.userReducer.sessionid
    };
}

export default connect(mapStateToProps)(OrderListContainer);
