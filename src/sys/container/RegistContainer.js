import { connect } from 'react-redux';
import RegistView from '../view/RegistView';
import {sendSmsIntf} from '../vendor/Intf';


const handleNextStep = async ({params,dispatch,ownProps}) => {
  try {
    // let result = await sendSmsIntf({...params});
    // console.log('handleNextStep',result);
    ownProps.navigation.navigate('RegistMsg',params);
  } catch (error) {
    console.log('handleNextStep',error);
  }

}


const mapStateToProps = (state) => {
  
  return {
  };
};

const mapDispatchToProps = (dispatch,ownProps) => {

  return {
    handleNextStep: (params) => handleNextStep({params,dispatch,ownProps})
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(RegistView);
