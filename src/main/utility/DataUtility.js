

const DataUtility = {

  //判断对象类型
  type(o){
    let s = Object.prototype.toString.call(o);
    return s.match(/\[object (.*?)\]/)[1].toLowerCase();
  }
  
}

export default DataUtility; 