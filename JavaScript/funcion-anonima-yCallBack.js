'use strict'
function Sumame(num1,num2,SumayMuestra,SumaPorDos) {
    var sumar = num1+num2;

    SumayMuestra(sumar);
    SumaPorDos(sumar);    
}


Sumame(2,3,function (params) {
    document.write(" La suma es: "+params);
},
function (params) {
    document.write(" La suma por dos es : "+params*2)
});


//es lo mismo pero no se pone function,se usa =>
Sumame(4,5, params => {
    document.write(" La suma es: "+params);
},
params=> {
    document.write(" La suma por dos es : "+params*2)
});


//seria igual
/*
'use strict'
function Sumame(num1,num2) {
    var sumar = num1+num2;

    SumayMuestra(sumar);
    SumaPorDos(sumar);    
}

function SumayMuestra(params) {
    document.write(" La suma es: "+params);
}

function SumaPorDos(params) {
    document.write(" La suma por dos es : "+params*2)
}

Sumame(2,3);*/  