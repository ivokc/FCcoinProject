import { AsyncStorage } from "react-native"

const StoreUtility = {

  async storeData(key,value) {
    return AsyncStorage.setItem(key, JSON.stringify(value)).then(()=> {
      return Promise.resolve('storeData----success');
    },(error) => {
      //('storeData----error',error);
      return Promise.reject(error);
    });
  },
  async retrieveData(key){
    return AsyncStorage.getItem(key).then((response)=> {
      //('retrieveData----response',response);
      return Promise.resolve(JSON.parse(response));
    },(error) => {
      //('retrieveData----error',error);
      return Promise.reject(error);
    });
  },

  async removeData(key){
    return AsyncStorage.removeItem(key).then((response)=> {
      //('removeData----response',response);
      return Promise.resolve('removeData----success');
    },(error) => {
      //('removeData----error',error);
      return Promise.reject(error);
    });
  }

};

export default StoreUtility;