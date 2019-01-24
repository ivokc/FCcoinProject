import { AsyncStorage } from "react-native"

const StoreUtility = {

  storeData(key,value) {
    return AsyncStorage.setItem(key, JSON.stringify(value)).then(()=> {
      return Promise.resolve('storeData----success');
    },(error) => {
      console.log('storeData----error',error);
      return Promise.reject(error);
    });
  },
  retrieveData(key){
    return AsyncStorage.getItem(key).then((response)=> {
      console.log('retrieveData----response',response);
      return Promise.resolve(JSON.parse(response));
    },(error) => {
      console.log('retrieveData----error',error);
      return Promise.reject(error);
    });
  }

};

export default StoreUtility;