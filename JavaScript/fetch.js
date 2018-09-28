'use strict'
window.addEventListener("load",function () {
    

   
   /* var usuarios= [];
    fetch('https://reqres.in/api/users')
    .then(data=>data.json)
    .then(data=>{
                usuarios=data.data;
console.log(usuarios);*/



fetch('https://reqres.in/api/users')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    //console.log(JSON.stringify(myJson));
    console.log(myJson);
});


//---
});