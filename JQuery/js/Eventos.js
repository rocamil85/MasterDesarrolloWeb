$(document).ready(function () {

//al entrar y salir el mouse 
$("#div1").hover(function () {
    $(this).css("background","green");
        
    }, function () {
        $(this).css("background","blue");
    }
);

//Focus y blur
var input1 = $("#input1");
input1.focus(function () { 
   $(this).css("border","1px solid green");    
});

input1.blur(function () { 
     $(this).css("border","1px solid red");    
     $("#div2").text($(this).val());
  });

        //---
    }); 

    