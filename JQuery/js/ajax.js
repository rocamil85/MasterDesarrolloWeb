$(document).ready(function () {
    var div1 = $("#div1");
    
    $("#div1").load("https://localhost:44320/Home/myAction?a=hola&b=mundo");
    //$("#div1").load("https://reqres.in/");
    //$("#div1").load("http://www.cubadebate.cu/");

    $.get("https://reqres.in/api/users", {page:2},
        function (response) {
           /*for (const key in response.data) {
               if (response.data.hasOwnProperty(key)) {
                   const element = response.data[key];
                   
                   console.log(element.first_name);
               }
           }*/
          
          for(var item in response.data)
          {              
            console.log(response.data[item].first_name);
            div1.append("<H2>"+response.data[item].first_name+"</H2>");
          }
        },
        
    );
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    //---
});