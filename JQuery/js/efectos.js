$(document).ready(function () {
   

$("#button1").click(function () {
    //$("#div1").hide("slow");
    //$("#div1").fadeIn("slow");
    $("#div1").fadeTo("slow",0.5);//0 a 1
  });

  $("#button2").click(function () {
    //$("#div1").show("slow");
    //$("#div1").fadeOut("slow");
    
    $("#div1").fadeTo ("slow",0.2,function () {  //añadiendo funcion callback
        console.log("termino el efecto");
     });
  });

  $("#button3").click(function () {    
    $("#div1").toggle("fast"); //tambien estan slidetoggle,slideUp,slideDown,etc...
  });

  $("#button4").click(function () {    
    $("#div1").animate({marginLeft:'500px'},"slow").animate({borderRadius:'900px'},"slow");
  });











 //---
});