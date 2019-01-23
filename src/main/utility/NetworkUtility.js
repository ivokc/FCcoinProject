const NetworkUtility = {

  getRequest(url, params = {}){
    
    return fetch(url);
  },
  postRequest(url, params = {}) {
    return fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ...params
      })
    });
  },


};

export default NetworkUtility;