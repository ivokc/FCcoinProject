const NetworkUtility = {

  getRequest(url, params){
    if (params) {  
      let paramsArray = [];  
      //拼接参数  
      Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))  
      if (url.search(/\?/) === -1) {  
          url += '?' + paramsArray.join('&')  
      } else {  
          url += '&' + paramsArray.join('&')  
      }  
    }  
    console.log('getRequest----url',url);
    return Promise.race([
      fetch(Constant.baseURL + url),
      new Promise(function (resolve, reject) {
          setTimeout(() => reject(new Error('request timeout')), Constant.timeout);
      })
    ]).then((response)=> {
      let bodyText = JSON.parse(response._bodyText)
      if (response.status === 200) {
        console.log('getRequest----response',response);
        if (bodyText.isValidCodeLogin === false) {
          //session超时
          Just.clearAuthData();
          return Promise.reject('session超时');
        }
        
        return Promise.resolve(bodyText);
      }else {
        console.log('getRequest----error',bodyText.message);
        return Promise.reject(response._bodyText.message);
      }
    },(error) => {
      
      console.log('getRequest111----error',error.message);
      return Promise.reject(error);
    });
  },
  postRequest(url, params = {}) {
    console.log('postRequest----params',params);
    return fetch(Constant.baseURL + url, {
      method: "POST",
      headers: {
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