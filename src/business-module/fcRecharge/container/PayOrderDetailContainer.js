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

// import {queryRunzoneForAPP,queryRunZoneDetail} from '../vendor/Task';

const defaultProps = {

};

const defaultState = {

    secretKey:'fpay,fp,com',
    userName:'test001',
    password:'123456',
};

class PayOrderDetailContainer extends PureComponent {

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
            <PayOrderDetailView
              navigation={this.props.navigation}
              BTDatas={this.state.BTDatas}
              />
        );
    }
}

PayOrderDetailContainer.defaultProps = defaultProps;

function mapStateToProps(state) {
    const { loginReducer} = state;
    // console.log('111',loginReducer);
    return {
      loginReducer:loginReducer,
    };
}

export default connect(mapStateToProps)(PayOrderDetailContainer);
