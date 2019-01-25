/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PayView from '../view/PayView';

// import {queryRunzoneForAPP,queryRunZoneDetail} from '../vendor/Task';

const defaultProps = {

};

const defaultState = {

};
@CommonHead('付款详情页')
class PayContainer extends PureComponent {

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




    render() {
      // console.log('33333333333',this.state.BTDatas)

        return (
            <PayView
              navigation={this.props.navigation}

              />
        );
    }
}

PayContainer.defaultProps = defaultProps;

function mapStateToProps(state) {
    const { loginReducer} = state;
    // console.log('111',loginReducer);
    return {
      loginReducer:loginReducer,
    };
}

export default connect(mapStateToProps)(PayContainer);
