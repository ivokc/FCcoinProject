const NetworkUtility = {

  async getRequest(url, params){
    Mymessage.showLoading();
    
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
    //('getRequest----url',url);
    return Promise.race([
      fetch(Constant.baseURL + url),
      new Promise(function (resolve, reject) {
          setTimeout(() => reject(new Error('request timeout')), Constant.timeout);
      })
    ]).then((response)=> {
      let bodyText = JSON.parse(response._bodyText)
      // console.log('getRequest----response',response);
      if (response.status === 200) {
        if (bodyText.result === 'login') {
          Mymessage.hide();
          //session超时
          Just.clearAuthData();
          return Promise.reject('session超时');
        }else if (bodyText.result !== 'true') {
          //普通错误
        //  console.log('getRequest----bodyText.message',bodyText.message);
          Mymessage.showMsg(bodyText.message);
          return Promise.reject(bodyText.message);
        }
        Mymessage.hide();
        return Promise.resolve(bodyText);
      }else {
        Mymessage.hide();
        // console.log('getRequest----error',bodyText.message);
        return Promise.reject(response._bodyText.message);
      }
    },(error) => {
      Mymessage.showMsg('服务器超时');
      // console.log('getRequest111----error',error.message);
      return Promise.reject(error);
    });
  },
  async postRequest(url, params = {}) {
    //('postRequest----params',params);
    return fetch(Constant.baseURL + url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    }).then((response)=> {
      //('postRequest----response',response);
      return Promise.resolve(response);
    },(error) => {
      //('postRequest----error',error);
      return Promise.reject(error);
    });
  },


};

export default NetworkUtility;