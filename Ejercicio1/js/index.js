



function func1() {
    let text=document.getElementById("input1").value;
    let result=text.length; 
    const resp=document.getElementById("resp1");
    resp.innerHTML=`${result} caracteres`;

}

  function func2() {
    const input = document.getElementById("input2");
	const tipoDato = document.getElementById("resp2");
    if (isNaN(input.value)) {
        tipoDato.innerHTML = `texto`;
    } else {
        tipoDato.innerHTML = `número`;
    }
}

function func3() {
    // Obtener el valor del nombre y la edad ingresados por el usuario
  var nombre = document.getElementById("input3").value;
  var edad = document.getElementById("input3b").value;

  // Verificar si la edad es mayor o igual a 18
  if (edad >= 18) {
    // Si es mayor o igual a 18, mostrar un mensaje indicando que es mayor de edad
    document.getElementById("resp3").innerHTML ="Hola "+ nombre + " eres mayor de edad";
  } else {
    // Si es menor a 18, mostrar un mensaje indicando que es menor de edad
    document.getElementById("resp3").innerHTML ="Hola "+ nombre + " eres menor de edad";
  }

}
function func4() {
    // Obtener los valores del nombre, materia y notas ingresados por el usuario
  var nombre = document.getElementById("input4").value;
  var materia = document.getElementById("Materia").value;
  var nota1 = parseFloat(document.getElementById("nota1_4").value);
  var nota2 = parseFloat(document.getElementById("nota2_4").value);
  var nota3 = parseFloat(document.getElementById("nota3_4").value);

  // Calcular el promedio de las 3 notas
  var promedio = (nota1 + nota2 + nota3) / 3;

  // Determinar si el usuario pasó o perdió la materia
  if (promedio >= 3.0) {
    // Si el promedio es igual o superior a 3.0, mostrar un mensaje indicando que pasó la materia
    document.getElementById("resp4").innerHTML = "Felicitaciones " + nombre +", "+"<span class=\"notapasa\">su nota es " + promedio.toFixed(2) +"</span>"+ ",  Pasaste la materia " + materia + ".";

  } else {
    // Si el promedio es menor a 3.0, mostrar un mensaje indicando que perdió la materia
    document.getElementById("resp4").innerHTML = "Lastimosamente " + nombre +", "+"<span class=\"notalose\">su nota es " + promedio.toFixed(2) +"</span>"+ ",  Perdiste la materia " + materia + ".";


  }

}
function func5() {
    // Obtener el número ingresado por el usuario
    var numero = parseFloat(document.getElementById("input5").value);
    console.log(numero);

        
    if(!Number.isInteger(numero)){
        document.getElementById("resp5").innerHTML = "Debe ingresar números enteros.";
        document.getElementById("resp5").style.color = "red";
    }else if(numero <= 0){
        document.getElementById("resp5").innerHTML = "Debe ingresar números positivos.";
        document.getElementById("resp5").style.color = "red";
        if(!Number.isInteger(numero)){
            document.getElementById("resp5").innerHTML = "Debe ingresar números enteros positivos.";
            document.getElementById("resp5").style.color = "red";
        }
    }else if (numero % 2 == 0) {
            document.getElementById("resp5").innerHTML = "El número " + numero + " es Par.";
            document.getElementById("resp5").style.color = "green";
          } else {
            document.getElementById("resp5").innerHTML = "El número " + numero + " es Impar.";
            document.getElementById("resp5").style.color = "red";
          }
    
  
    
  }
  function func6() {
    // Obtener el texto ingresado por el usuario y el texto a buscar
    var inputText = document.getElementById("input6").value;
    var searchText = document.getElementById("input6b").value;
    var regex = new RegExp(searchText, "g");
    var outputText =inputText.replace(regex, '<span class="notalose">'+searchText+'</span>');
    document.getElementById("resp6").innerHTML = outputText;
    
  }
  
  function func7(){
    
    var a = parseFloat(document.getElementById("input7").value);
    var b = parseFloat(document.getElementById("input7b").value);

    if (a >= 0 && b >= 0 && Number.isInteger(a) && Number.isInteger(b)) {
      if (a % b === 0) {
        console.log("El número " + a + " es divisible entre el número " + b);
        document.getElementById("resp7").innerHTML = "El número " + a + " es divisible entre el número " + b;
      } else {
        console.log("El número " + a + " no es divisible entre el número " + b);
        document.getElementById("resp7").innerHTML = "El número " + a + " no es divisible entre el número " + b;
      }
    } else {
      console.log("Ingrese números enteros positivos.");
      document.getElementById("resp7").innerHTML = "Ingrese números enteros positivos.";
    }
  }
  function func8(){
    var numeros = document.getElementById("input8").value;
    
    var numerosArray = numeros.replace(/ /g,"").split(",");
    var result="";
    for (var i = 0; i < numerosArray.length; i++) {
      var numero = parseFloat(numerosArray[i]);
      
      if (numero%1===0) {
        if (numero % 2 === 0) {
          result += numero +'<span style="color: blue;"> es número par</span>';
          result+="<br>";
        } else {
          result += numero +'<span style="color: green;"> es número impar</span>';
          result+="<br>";
        }
      }else{
        result +=numero +'<span style="color: red;"> no es numero entero</span>';
        result+="<br>";
        
      }
    }
    document.getElementById("resp8").innerHTML = result; 
  }

  //animacion
  $(document).ready(function() {
    $('h1').hide().fadeIn(2000).animate({top: '50px'}, 1000);
  });

  $(document).ready(function() {
    $('button.scroll-btn[href^="#"]').on('click', function(event) {
      var target = $(this.getAttribute('href'));
      if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
          scrollTop: target.offset().top
        }, 1000);
      }
    });
  });
