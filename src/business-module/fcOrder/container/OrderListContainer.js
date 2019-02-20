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
    isRefreshing:false,
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

           //('~~~~~~~OrderListContainer~~~~~~~',response.data.list.length)

           let tempBTDatas=[]
           let BTData={}
           if(response.data.list.length>0){
             for(var i = 0; i < response.data.list.length; i++){

               let status=''
               let statusStyle=''
                  if(response.data.list[i].orderStatus=='0'){
                    status='已完成'
                    statusStyle='green'
                  }else if (response.data.list[i].orderStatus=='1') {
                    status='支付失败'
                    statusStyle='red'
                  }else if (response.data.list[i].orderStatus=='2') {
                    status='未支付'
                    statusStyle='red'
                  }else if (response.data.list[i].orderStatus=='3') {
                    status='待确认'
                    statusStyle='grey'
                  }else {
                      status=''
                      statusStyle='grey'
                  }
                  BTData={
                    tradeNum:response.data.list[i].orderCode,
                    date:response.data.list[i].creatTime,
                    fcNum:response.data.list[i].orderNum,
                    status:status,
                    statusStyle:statusStyle,
                    sellerName:response.data.list[i].merchantFpUser.refName,
                    sellerNum:response.data.list[i].merchantOrderCode,
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
         //('~~~~~~~error~~~~~~~',error)
      }).finally(()=>{
          this.setState({isRefreshing:false})
      });

     }


          //下拉刷新
          onRefresh = () =>{
            // //('3333333333333')

              // setTimeout(() =>{



              // },2000);
              this.setState({isRefreshing:true})
              this.getList();


          }


    render() {
      // //('33333333333',this.state.BTDatas)

        return (
            <OrderListView
              navigation={this.props.navigation}
              BTDatas={this.state.BTDatas}
              onRefresh={this.onRefresh}
              isRefreshing={this.state.isRefreshing}
              />
        );
    }
}

OrderListContainer.defaultProps = defaultProps;

function mapStateToProps(state) {
    return {
      sessionId:state.userReducer ? state.userReducer.sessionid : 1
    };
}

export default connect(mapStateToProps)(OrderListContainer);
