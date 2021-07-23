exports.popByIndex = function(array,index) {
array.splice(index, 1)
return array
  }
exports.popByValue = function (array, value) {
    if(typeof(array[0])=="number"){
        let index = array.indexOf(value) 
        array.splice(index, 1)
        return array
    }
    if(typeof(array[0])=="object" && typeof(value)=="object")
    {
        
        array.map((data,index2) =>{
            Object.keys(data).map((internal,i) => {
                if(data[internal]==value[internal]){
                    array.splice(index2, 1)
                    return array
                }

            })
        })
    }
    return array
}
exports.pushToIndex = function(array,index,value) {
    array.splice(index, 0, value);
    return array
      }