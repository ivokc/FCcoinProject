const NetworkUtility = {

  getRequest(url, params = {}){
    
    return fetch(url);
  },
  postRequest(url, params = {}) {
    console.log('postRequest----params',params);
    fetch(Constant.baseURL + url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    }).then((response)=> {
      console.log('postRequest----response',response);
      return Promise.resolve(response);
    },(error) => {
      console.log('postRequest----error',error);
      return Promise.reject(error);
    });
  },


};

export default NetworkUtility;