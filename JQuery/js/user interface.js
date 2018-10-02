$(document).ready(function () {
    console.log("asd");
    
    // mover elemento
    $(".elemento").draggable();
    $(".drop").droppable({

        drop:function () 
        {  
            console.log("dejaste algo dentro");
        }
    });
     
    // redimensionar elemento
    $(".elemento").resizable();
    
    
    //seleccionable para listas
    //$(".lista-web").selectable();
    
    //para ordenar listas
    $(".lista-web").sortable();
        
    //Dialog
    $("#button1").click(function () {
        $(".efect").toggle("explode");//explode,blind,slide,drop,etc...
        $("#dialog").dialog();
    });
      
    //Tooltip
    $(document).tooltip({
        hide: { effect: "blind", duration: 1000 }//blind,explode,etc...
      });
    
    //DatePicker o calendar
    $("#calendar").datepicker();
    
    //tabs
    $("#pestannas").tabs();
    
    
    
    
    
    
    
    
    
    
    
    
    
    //---
});