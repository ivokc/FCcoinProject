import { connect } from 'react-redux';
import RegistView from '../view/RegistView';


const handleNextStep = async ({params,dispatch,ownProps}) => {
  try {
    // let result = await sendSmsIntf({...params});
    // //('handleNextStep',result);
    ownProps.navigation.navigate('RegistMsg',params);
  } catch (error) {
    //('handleNextStep',error);
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
