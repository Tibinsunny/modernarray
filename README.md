# Modernarray
A modern User-friendly array which supports stack Operations. This helps you to handle and modify arrays nice and easily 


# Install

    npm install modernarray


# Usage and Example

``` javascript
let modernarray = require('modernarray');
let myArray=[{
    name:"Joe Deo",
    status:false
},
{
    name:"Bob Painter",
    status:true
}]

let outputArray = modernarray.popByIndex(myArray,1)
/* Output Array will just have 
[{
    name:"Joe Deo",
    status:false
}]
Array at index 1 is Removed
*/
let outputArray2 = modernarray.popByValue(myArray,{status:false})
/* Output Array will just have 
[{
    name:"Bob Painter",
    status:true
}]
Array element with status "false" is removed 
*/
let outputArray3 = modernarray.pushToIndex(myArray,1,{name:"John Bell",status:true})

/* Output Array will  have 
[
  { name: 'Joe Deo', status: false },
  { name: 'John Bell', status: true },
  { name: 'Bob Painter', status: true }
]
New Element is added
*/
```
## Supported Function
* popByIndex
* popByValue
* pushToIndex

