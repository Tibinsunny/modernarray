exports.popByIndex = function(array,index) {
array.splice(index, 1)
return array
  }
exports.popOneByValue = function (array, value) {
    let newArray = []

    if(typeof(array[0])=="number"){
        let index = array.indexOf(value)
        if(index>-1)
        {
            array.splice(index, 1)
            return array
        }
        else{
            return array
        }

    }
    if(typeof(array[0])=="object" && typeof(value)=="object")
    {
        array.map((data,index) =>{
            Object.keys(value).map((internal,i) => {
              if(data[internal]==value[internal]){
             
              }
              else
              {
                newArray.push(data)
              }
            })
        })
        return newArray
    }

}
exports.pushToIndex = function(array,index,value) {
    array.splice(index, 0, value);
    return array
      }