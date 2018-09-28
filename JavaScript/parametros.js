'use estrict'
//parametros rest y spread
                                     //rest
function ListadoFrutas(fruta1,fruta2,...resto_frutas) {
    document.write(fruta1+"<br/>");
    document.write(fruta2+"<br/>");
    document.write(resto_frutas+"<br/>");
}

ListadoFrutas("naranja","piña","melon","manzana");

document.write("<br/>")

var array = ["guayaba","platano","limon"];
ListadoFrutas(...array,"melon","manzana");
              //spread
