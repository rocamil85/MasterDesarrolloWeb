$(document).ready(function () {
   


var resaltados = $("#div1").find(".resaltado");
console.log(resaltados);

var resaltados1 = $("#div1").find(".resaltado").eq(0).parent().parent().parent().find("h2").css("background","blue");
console.log(resaltados1);
});