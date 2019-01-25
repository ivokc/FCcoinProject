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

// import {queryRunzoneForAPP,queryRunZoneDetail} from '../vendor/Task';

const defaultProps = {

};

const defaultState = {
    BTDatas: [{tradeNum:'00001',date:'2019-10-10 19:00:00',fcNum:'2899.00',total:'2888.99',status:'代付款',statusStyle:'red'},
              {tradeNum:'00002',date:'2019-10-10 19:00:00',fcNum:'2899.00',total:'2888.99',status:'待确认到账',statusStyle:'red'},
            {tradeNum:'00002',date:'2019-10-10 19:00:00',fcNum:'2899.00',total:'2888.99',status:'到账确认',statusStyle:'green'},
          {tradeNum:'00002',date:'2019-10-10 19:00:00',fcNum:'2899.00',total:'2888.99',status:'已取消',statusStyle:'grey'},
          {tradeNum:'00001',date:'2019-10-10 19:00:00',fcNum:'2899.00',total:'2888.99',status:'代付款',statusStyle:'red'},
                    {tradeNum:'00002',date:'2019-10-10 19:00:00',fcNum:'2899.00',total:'2888.99',status:'待确认到账',statusStyle:'red'},
                  {tradeNum:'00002',date:'2019-10-10 19:00:00',fcNum:'2899.00',total:'2888.99',status:'到账确认',statusStyle:'green'},
                {tradeNum:'00002',date:'2019-10-10 19:00:00',fcNum:'2899.00',total:'2888.99',status:'已取消',statusStyle:'grey'},], //BTlist

    secretKey:'fpay,fp,com',
    userName:'test001',
    password:'123456',
};

class PayListContainer extends PureComponent {

    constructor(props) {
        super(props);

        this.state = defaultState;


    }
    componentWillMount(){
      // this.handleReadyPress()
         console.log('~~~~~~~pullLoad~~~~~~~')
    }

    componentDidMount() {

     }




    render() {
      // console.log('33333333333',this.state.BTDatas)

        return (
            <PayListView
              navigation={this.props.navigation}
              BTDatas={this.state.BTDatas}
              />
        );
    }
}

PayListContainer.defaultProps = defaultProps;

function mapStateToProps(state) {
    const { loginReducer} = state;
    // console.log('111',loginReducer);
    return {
      loginReducer:loginReducer,
    };
}

export default connect(mapStateToProps)(PayListContainer);
