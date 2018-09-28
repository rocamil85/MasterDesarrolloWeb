$(document).ready(function () {

    ReLoadHREF();
    var div1 = $("#div1");
    var ul1 = $("#ul1");
    var input1 = $("#input1");
    var button1 = $("#button1");

    $("#button1").click(function () {
        console.log("click");
        $("#ul1").append("<li><a href=" + input1.val() + ">" + input1.val() + "</a></li>");
        $("#input1").val("");;
    });

    $("#input1").blur(function () {
        console.log("blur");
        $("#ul1").append("<li><a href=" + input1.val() + ">" + input1.val() + "</a></li>");        
    });

    $("#input1").hover(function () {
        console.log("over");

    }, function () {
        console.log("out");
        $("#ul1").append("<li><a href=" + input1.val() + ">" + input1.val() + "</a></li>");
    }
    );

    function ReLoadHREF() {
        var listadoHref = $("a");
        $.each(listadoHref, function (indexInArray, valueOfElement) {
            //var elem = listadoHref.eq(indexInArray);
            //elem.text(elem.attr("href"));

            var elem = $(this);//siempre trabajar con el this por cada iteracion
            elem.text(elem.attr("href"));
        });
    }

    /*tambien funciona
    $("a").each(function (index, element) {
        // element == this
        
        var elem = $(this);
        elem.text(elem.attr("href"));
    });*/
    //---
});
