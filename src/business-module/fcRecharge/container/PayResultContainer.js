/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PayResultView from '../view/PayResultView';

// import {queryRunzoneForAPP,queryRunZoneDetail} from '../vendor/Task';

const defaultProps = {

};

const defaultState = {

    result:false,

};

class PayResultContainer extends PureComponent {

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
            <PayResultView
              navigation={this.props.navigation}
              result={this.state.result}
              />
        );
    }
}

PayResultContainer.defaultProps = defaultProps;

function mapStateToProps(state) {
    const { loginReducer} = state;
    // console.log('111',loginReducer);
    return {
      loginReducer:loginReducer,
    };
}

export default connect(mapStateToProps)(PayResultContainer);
