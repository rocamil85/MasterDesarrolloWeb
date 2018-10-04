$(document).ready(function () {

    //cambio de temas
    $("#to-green").click(function (e) {
        e.preventDefault();
        $("#theme").attr("href", "css/green.css");
    });

    $("#to-red").click(function (e) {
        e.preventDefault();
        $("#theme").attr("href", "css/red.css");
    });

    $("#to-blue").click(function (e) {
        e.preventDefault();
        $("#theme").attr("href", "css/blue.css");
    });

    //manejo de Scroll hacia ariba
    $("#subir").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 1000);
    });

    $("#form").submit(function (e) {
        e.preventDefault();
        console.log("envioooo");
        localStorage.setItem("name", $("#name").val());
        console.log(localStorage);
        $("#caja_login").hide();
        $("#parrafo").html("Bienvenido: " + localStorage.getItem("name"));
        $("#parrafo").append('<br/><a href="" id="logout">Logout</a>');
    });

    //logout
    $("#logout").click(function () {
        console.log("logout");
        localStorage.clear();
        location.reload();
    });

    //form
    $.validate({
        lang: 'es',
        errorMessagePosition:'top'
      });
      
    //---
});
