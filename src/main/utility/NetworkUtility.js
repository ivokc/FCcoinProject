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
    return fetch(Constant.baseURL + url,{
      method: "GET",
    }).then((response)=> {
      let bodyText = JSON.parse(response._bodyText)
      if (response.status === 200 && bodyText.result === 'true') {
        // console.log('getRequest----response._bodyText',bodyText);
        return Promise.resolve(bodyText);
      }else {
        console.log('getRequest----error',bodyText.message);
        return Promise.reject(response._bodyText.message);
      }
    },(error) => {
      console.log('getRequest----error',error);
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