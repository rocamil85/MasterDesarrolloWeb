'use strict'

var languages= new Array("c#","java","c++","JS","Perl");
languages.push("Fortran");
languages.pop();

/*eliminar un elemento
var index =languages.indexOf("java");
languages.splice(index,1);
*/

languages.forEach(item => {
    document.write("<li>"+item+"</li>")
});

/*otras formas de iterar
for(var index in languages)
{
    document.write("<li>"+languages[index]+"</li>")    
}

for (const key in languages) {
    if (languages.hasOwnProperty(key)) {
        const element = languages[key];  
        document.write("<li>"+element+"</li>")       
    }
}*/



var busqueda = languages.find(function (params) {
    return params =="java";
});

console.log(busqueda);
