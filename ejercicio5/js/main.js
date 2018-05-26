$(function () {
    //-Line
    /* Bloque*/
    /* Selectores jQuery, sintaxis:
        $("[ sleector css]")

        Ejemplos:
        $(".form") -> Esto va a seleccionar todos los elementos HTML
                    que tengan el atributo "class" con un valor "form".
         $("#form") -> Esto va a seleccionar al elemento HTML
                    que tengan el atributo "ID" con un valor "form".

         $("p") -> Esto va a seleccionar a los elementos de tipo "p".

         $(".page-main  .page-section p a") -> Esto va a seleccionar a los elementos de tipo "a".
         que estén dentro de un elemento de tipo "p" que a a vez esté dentro de un elemento "class"
         igual a ".page-section", que a la vez esté dentro de un elemento con "class" igual 


         Ejemplo de combinación de dos objetos utilizando el método (función) ".extende() de $ (Jquery)"

var alumno ={
    nombre: "Juan",
    apellido: "Torres",
    edad: 23,
};

var alumnoUpdate ={
    nombre: "Juan Antonio",
    edad: 34,
    ocupacion: "Web UI developer",
}

$.extend(alumno,alumnoUpdate);

console.log (alumno);
    */

$.extend($.validator.messages,{
    required: " Este campo es obligatorio",
    email: "Por favor, escribe una dirección de correo válida.",
    number: "Por favor, escribe un número entero valido",
    rangelength: $.validator.format("Por favor, escribe un valor entre {0} y {1} caracteres." ),
});
$("#form").validate({
    rules:{
        tel:{
            rangelength: [8, 10],
            number: true,

        },
       
    }
});

//console.log($.validator.messages);

});
