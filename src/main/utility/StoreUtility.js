import { AsyncStorage } from "react-native"

const StoreUtility = {

  storeData(key,value) {
    let type = Just.type(value);
    AsyncStorage.setItem(key, value).then(()=> {
      return Promise.resolve('storeData----success');
    },(error) => {
      console.log('storeData----error',error);
      return Promise.reject(error);
    });
  },
  retrieveData(key){
    AsyncStorage.getItem(key).then((response)=> {
      console.log('retrieveData----response',response);
      return Promise.resolve(response);
    },(error) => {
      console.log('retrieveData----error',error);
      return Promise.reject(error);
    });
  }

};

export default StoreUtility;