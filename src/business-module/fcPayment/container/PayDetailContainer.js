/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PayDetailView from '../view/PayDetailView';

// import {queryRunzoneForAPP,queryRunZoneDetail} from '../vendor/Task';

const defaultProps = {

};

const defaultState = {

};
@CommonHead('付款详情页')
class PayDetailContainer extends PureComponent {

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
            <PayDetailView
              navigation={this.props.navigation}

              />
        );
    }
}

PayDetailContainer.defaultProps = defaultProps;

function mapStateToProps(state) {
    const { loginReducer} = state;
    // console.log('111',loginReducer);
    return {
      loginReducer:loginReducer,
    };
}

export default connect(mapStateToProps)(PayDetailContainer);
