$(document).ready(function () {

    //Slider
    $('.slider').bxSlider({
        mode: 'fade',
        captions: false,
        slideWidth: 1200,
        responsive: true,
    });

    //Posts
    $.ajax({
        type: "GET",
        url: "https://reqres.in/api/unknown",
        data: "resource",
        dataType: "JSON",
        success: function (response) {
            console.log("recurso obtenido via ajax");
            console.log(response.data);

            for (var item in response.data) {
                var a = response.data[item];

                var html = `
                <article class="post">
                        <h2>Id del artículo: ${a.id} </h2>
                        <span class="date">Año de publicación ${a.year}</span>
                        <p>Elemento cargado dinámicamente  vía ajax y que tiene como Nombre: ${a.name},
                        Color: ${a.color} y Valor: ${a.pantone_value} </p>
    
                        <a href="#" class="button-more">Leer</a>
                    </article>
                    <div class="clearfix"></div>
                `;

                $("#posts").append(html);
            }
        }
    });

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
        localStorage.setItem("name",$("#input_name").val());
        
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


    //---
});