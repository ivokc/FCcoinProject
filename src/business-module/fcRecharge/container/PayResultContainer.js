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

    result:true,

};

@CommonHead('')
@AutoHideKeyboard
class PayResultContainer extends PureComponent {

    constructor(props) {
        super(props);

        this.state = defaultState;


    }
    componentWillMount(){
      // this.handleReadyPress()
         // //('~~~~~~~pullLoad~~~~~~~')
    }

    componentDidMount() {

     }


     handleAgreePress=()=>{
        // //('~~~~~~~44444444444444~~~~~~~')


             this.props.navigation.navigate('Home');

     }

    handlePress=()=>{
       // //('~~~~~~~44444444444444~~~~~~~')

            this.props.navigation.navigate('PayWay');

    }

    render() {
      // //('33333333333',this.state.BTDatas)

        return (
            <PayResultView
              navigation={this.props.navigation}
              result={this.state.result}
              handleAgreePress={this.handleAgreePress}
              handlePress={this.handlePress}
              />
        );
    }
}

PayResultContainer.defaultProps = defaultProps;

function mapStateToProps(state) {
    const { loginReducer} = state;
    // //('111',loginReducer);
    return {
      loginReducer:loginReducer,
    };
}

export default connect(mapStateToProps)(PayResultContainer);
