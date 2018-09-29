$(document).ready(function () {
    var div1 = $("#div1");
    form1 = $("#form1");

    

    //$("#div1").load("https://localhost:44320/Home/myAction?a=hola&b=mundo");


    /* $.get("https://reqres.in/api/users", { page: 2 },
        function (response) {

            //iterador mas sencillo que hay y es de javascript y no es autocompletado
            for (var item in response.data) {
                console.log(response.data[item].first_name);
                div1.append("<H2>" + response.data[item].first_name + "</H2>");
            }
        }
    );
 */
    /* form1 = $("#form1");
    $("#form1").submit(function (e) {
        e.preventDefault();

        var usuario = {
            name: $("#input1").val(),
            lastName: $("#input2").val()
        };

        $.post(form1.attr("action"), usuario,
            function (usuario, textStatus, jqXHR) {
                console.log(usuario);
            }
        ).done(function () {
            alert("usuario añadido correctamente");
        });
    }); */

    $("#form1").submit(function (e) {
        e.preventDefault();

        var usuario = {
            name: $("#input1").val(),
            lastName: $("#input2").val()
        };

    $.ajax({
        type: "POST",
        url: form1.attr("action"),
        data: usuario,
        dataType: "JSON",
        success: function (response) {
            console.log(response);
        },
        error: function () {
            console.log("hubo error");
          },
          timeout:10000
    });

});



    //---
});
