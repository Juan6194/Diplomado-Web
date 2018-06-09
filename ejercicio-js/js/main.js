$(function () {
    /*
        1. Tipo de valores:
            - Cadena de texto (STRING): Siempre van entre comillas simples o dobles.
                var myText = 'Hola Mundo';

            - Númerico (NUMBER): Nunca van entre comillas.
                var myNumber = 100;

            - Booleano (BOOLEAN): Valores lógicos binarios, TRUE o FALSE
                var verdadero = true;
                var verdadero2 = 1;

                var falso = false;
                var falso2 = 0;

            - Arreglos (vectores o matrices) (ARRAY): Es un conjunto de valores y siempre
                                                        deben estar entre "[]" y los valores
                                                        separado por comas.
            - Objeto (OBJECT): Es un conjunto de "Propiedades" y "Métodos"
            - Funciones (FUNCTION): Es un conjunto de sentencias que se ejecutan cuando se invoca
                                    a la función. La sintaxis de una función "anónima" es:

                                    function() {
                                        conjunto de sentencias...
                                    }

                                    Una función puede recibir parámetros, un parámetro es una variable local,
                                    es decir que sólo existe dentro de la función.

                                    function(valor1, valor2) {
                                        valor1 y valor2 sólo existen dentro de esta función
                                    }

            - Indefinidos (UNDEFINED)
            - Nulos (NULL)
            - Not an Number (NaN)

        2. Operadores aritméticos:
            +   -> Suma:
                    - Valores NUMBER se suman.
                    - Si al menos un valor es de tipo STRING se concatenan.
            -   -> Resta
            /   -> División
            *   -> Multiplicación
            %   -> Resto
            ++  -> Incremento (1 numero)
            --  -> Decremento


        3. Operadores relacionales: ( siempre van a devolver un valor booleano (BOOLEAN)(Osea true o false))
        >  Mayor que
        <  Menor que
        = Asignar valor a una variable 
        == Igual a
        === Exáctamente igual a
        >=  Mayor o igual que
        <=  Menor o igual que
        !=  Diferente a 
        !== Exáctamente diferente a

    4. Operadores lógicos:  Siempre van a devolver un valor booleano (BOOLEAN).
        &&  AND
                true && true (valores que sean)   ->  true
                true && false  ->  false
                false && true  ->  false
                false && false ->  false

        ||  OR
                true || true   ->  true
                true || false  ->  true
                false || true   ->  true 
                false || false  ->  false

    5. Estructura de control "if else".
        Sintaxis:
            
            if (condicional){
                La condicional debe ser un valor booleano (BOOLEAN)(Verdadero o falso)
                Si la condiconal es igual  true, entonces se ejecuta
                el código que esté dentro de estas llaves.
            } else {
                -Si la condicional es igual a "false" entonces se ejecuta 
                el cógido de esté dentro de estas llaves. 
            }

    6. Iterador "for".
            Sintaxis:

                for(var i = 0; i < 10; i++) {
                    Código que se ejecuta en cada iteración.
                }

    */

    // STRING
    var myName = 'Sergio';
    var myLastName = 'Pérez';

    // NUMBER
    var myAge = 39;
    var myHeight = 1.83;

    // BOOLEAN
    var isMarried = true;
    var isRobot = false;
    var isHappy = true;

    // Suma
    var myFullName = myName + ' ' + myLastName;
        //console.log(myFullName);

    var number1 = 50;
    var number2 = 120;
    var result = number1 + number2;
        //console.log(result);

    var result2 = myName + myAge;
        //console.log(result2);

    var number3 = '40';
    var number4 = '50';
    var result3 = number3 + number4;
        //console.log(result3);

    var resultadoResta = number1 - number2;
        //console.log(resultadoResta);

    var resultadoDivison = number2 / number1;
        //console.log(resultadoDivison);

    var resultadoResto = number2 % number1;
        //console.log(resultadoResto);

    number1++
    number1++
    number1++
    number1++
        //console.log(number1);

    number1--
    number1--
    number1--
    number1--
    number1--
    number1--
        //console.log(number1);

    //ARRAY
    var diasSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sádado', 'Domingo'];
    var numeroDiasSemana = diasSemana.length;
    var position = 0;

            
        //console.log(diasSemana);
        //console.log(numeroDiasSemana);
        //console.log(diasSemana[position]);
        //console.log(diasSemana[1]); <- Ejemplo el resultado debe ser Martes

    //FUNCTION
    // Area = (Base * Altura) / 2;
    // var base1 = 100;
    // var altura1 = 200;
    // var baseAltura1 = base1 * altura1;
    // var areaTriangulo1 = baseAltura1 / 2;

    // var base2 = 105;
    // var altura2 = 350;
    // var baseAltura2 = base2 * altura2;
    // var areaTriangulo2 = baseAltura2 / 2;
        //console.log(areaTriangulo1);
        //console.log(areaTriangulo2);

    // var calculateArea1 = function() {
    //     var base = 100;
    //     var altura = 200;
    //     var baseAltura = base * altura;
    //     var areaTriangulo = baseAltura / 2;
    //     console.log(areaTriangulo);
    // };

    // var calculateArea2 = function() {
    //     var base = 105;
    //     var altura = 350;
    //     var baseAltura = base * altura;
    //     var areaTriangulo = baseAltura / 2;
    //     console.log(areaTriangulo);
    // };

    //var ejemplo;
        //console.log(ejemplo); // Esto devolvera un valor indefinido (UNDEFINED);

    /*
        Calcular el area de los siguiente triángulos:
            1. base = 100, altura = 200;
            2. base = 105, altura = 350;
            3. base = 3876, altura = 1984;
            4. base = 245.34, altura = 54.12;
            5. base = 1254.23, altura = 7463.45;
    */

    var calcularArea = function(base, altura) {
        var area = (base * altura) / 2;
        return area;
    };

    var triangulo1 = calcularArea(100, 200);
    var triangulo2 = calcularArea(105, 350);
    var triangulo3 = calcularArea(3876, 1984);
    var triangulo4 = calcularArea(245.34, 54.12);
    var triangulo5 = calcularArea(1254.23, 7463.45);

    var areas = $('#areas');
    //areas.append(triangulo1, triangulo2, triangulo3, triangulo4, triangulo5);

    // var ul = document.createElement('ul');
    // var li1 = document.createElement('li');
    // var li2 = document.createElement('li');
    // var li3 = document.createElement('li');
    // var li4 = document.createElement('li');
    // var li5 = document.createElement('li');

    // $(li1).append(triangulo1);
    // $(li2).append(triangulo2);
    // $(li3).append(triangulo3);
    // $(li4).append(triangulo4);
    // $(li5).append(triangulo5);
    // $(ul).append(li1, li2, li3, li4, li5);
    // areas.append(ul);

    //OBJECT
    var persona = {
        name: 'Sergio',
        lastName: 'Pérez',
        age: 39,
        height: 1.83,
        isMarried: true,
        isRobot: false,
        pets: [
            {
                type: 'Perro',
                name: 'Perseo',
                age: 16,
            },
            {
                type: 'Gato',
                name: 'Bombi',
                age: 1,
            },
        ],
        printFullName: function() {
            var fullName = this.name + ' ' + this.lastName;
            areas.append(fullName);
        },
    };

    // console.log(persona['name']);
    // console.log(persona['lastName']);
    // console.log(persona['pets'][0]['name']);
    // console.log(persona['pets'][1]['name']);
    // console.log('------------');
    // console.log(persona.name);
    // console.log(persona.lastName);
    // console.log(persona.pets[0].name);
    // console.log(persona.pets[1].name);
    // persona.printFullName();

    var numero5 = 10;
    var numero6 = 20;
    var numero7 = 6;
    var numero8 = 4;
    var texto8 = '4';
    var resultado = numero5 < numero6;
    var resultado2 = numero6 == (numero5 + numero7 + numero8);
    //console.log(resultado);
    //console.log(resultado2);
    var resultado3 = numero8 != texto8;
    var resultado4 = numero8 !== texto8;

    //console.log('Diferente a: ',resultado3);
    //console.log('Exáctamente igual a: ', resultado4);

    var isMexican = true;
    var isHappy = false;

    var isAcceptInFrance = isMexican && isHappy;
    var isAcceptInEU = isMexican || isHappy;

    //console.log('Es aceptado en Francia:', isAcceptInFrance);
    //console.log('Es aceptado en EU:', isAcceptInEU);

    //if (isMexican && isHappy) {
    //    console.log('Es aceptado en Francia');
    //} else {
    //    console.log('No aceptado en Francia');
    //}
    //for(
    //    var i = 0; 
    //    i < numeroDiasSemana; 
    //    i++ 
    // ) {
    //  console.log('El valor de i es: ', diasSemana[i] );
    // }


   var values = [
       { base: 100, height: 200 },
       { base: 105, height: 350 },
       { base: 3876, height: 1984 },
       { base: 245.34, height: 54.12 },
       { base: 1254.23, height: 7463.45 },
   ];
  
   var areaValues = [];
   var ul = document.createElement('ul');

   for(var i = 0; i < values.length; i++) {
        var currentArea = calcularArea(values[i].base, values[i].height);
        areaValues.push(currentArea);
   }

   for(var i = 0; i < areaValues.length; i++) {
       var li= document.createElement('li');
       $(li).append(areaValues[i]);
       $(ul).append(li);
   }
    areas.append(ul);

    /*
    Eventos:
        - click
        - mouseenter ( Cuando el mouse entra, está sobre el elemento)
        - mouseleave ( Cuando el mouse sale, está sobre el elemento)
        - scroll

        JQuery tiene un:

        Método ".on()", permite escuchar eventos que se desencadenan
                        en un elemento HTML en particular.

            Sintaxis: 
            Recibe dos parámetros:
            1. El evento que queremos escuchar.
            2. La función anónima que se va a ejecutar cuando suceda el evento en
            dicho elemento.

            o

            Recibe un parámetro:
            1. Un objeto con pares (evento y funcion a ejecutar)
            

        elementoHTML.on(evento,fn)
        elementoHTML.on('click',function() {...code})

        Método ".css()" de JQuery: Permite modificar estilos CSS.

            Sintaxis:
                Recibe dos parámetros:
                    1.La propiedad CSS que se quiere modificar.
                    2. El nuevo valor de dicha propiedad.


            elementoHTML.css(propiedad,valor);
            elementoHTML.css('color', '#f00')

        Método ".attr()" de jQuey:
            1. Si se pasa un sólo parámetro, éste parámetro debe ser el nombre 
               de un atributo del elemento y enotnces devolverá el valor de éste 
               atributo.

            2.Si se pasan 2 parámetros, el primero debe ser el nombre del atributo 
              que quereos modificar y el segundo el nuevo valor de éste atributo..

            Sintáxis:
                elementoHTML.attr(´src´); esto devolvera el valor del atributo "src".

                elemntoHTML.attr('src', 'image/001.jpg') -> Esto cambiará el valor sel atributo "src"
                                                            por "image/001".



    */

    var myButton = $('#myButton');
    var myWindow = $(window);

    // myButton.on('click', function() {
    //   console.log('Hice clic sobre mi botón');
    // });

    // myButton.on('mouseenter', function() {
    //     console.log('Estoy sobre el botón');
    //   });

    // myButton.on('mouseleave', function() {
    //     console.log('Estoy fuera del botón');
    //   });

    var macImage = $('#macImage');
    //console.log(macImage);
    //var macImageSrc = macImage.attr('src');
    //console.log(macImageSrc);

    myButton.on({
        click:function() {
            macImage.attr('src', 'images/050.jpg');
        },
        mouseenter: function() {
            $(this).css({
                'background-color': '#f00',
                'color': '#ff0',
            });
        },
        mouseleave: function(){
            $(this).css({
                'background-color': 'rgb(235, 166, 18)',
                color: '#ddd',
            });
        },
    });




   myWindow.on('scroll',function(){
       var positionScroll = $(this).scrollTop();
       var newSrc = 'images/0' + positionScroll + '.jpg';

       if (positionScroll <=74) {
        macImage.attr('src', newSrc);
     }

   });

 

});

  
  