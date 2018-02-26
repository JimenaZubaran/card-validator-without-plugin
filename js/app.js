//Variables globales
const form = document.querySelector("form");

//Funciones
//Validación nombre
const nameFunction = element => {
    let nameValue = element.value;
    if(nameValue.length <= 30){
        element.className = "success";
        return true;
    }else{
        element.className = "error";  
    }
    console.log(" name ")
}


//Validación de CVV
const cvvFunction = element =>{
    let cvvValue = parseInt(element.value);
    if(cvvValue > 100){
        element.className = "success";
        return true;
    }else{
        element.className = "error";
        return false
    }
}



//Validación año
const expirationYearFunction= element =>{
    let yearValue = parseInt(element.value);
    if(yearValue >= 18 && yearValue <= 25){
        element.className = "success";
        return true;
    }else{
        element.className = "error";
        return false
    }
}

//Validación mes
const expirationMonthFunction= element =>{
    let monthValue = parseInt(element.value);
    if(monthValue <= 12){
        element.className = "success";
        return true;
    }else{
        element.className = "error";
        return false
    }
}


//Validación número de tarjeta
const cardNumberFuntion = element => {
    let sum = 0;
    //Convertir valor del input en array de números e invertirlo
    let cardNumberValue = Array.from(cn.value);
    //console.log(cn);
    let numberArray = cardNumberValue.map(num => {
      console.log(Number(num));
        return Number(num);
    }).reverse();
    
    numberArray.forEach((num, index) =>{
      if (index % 2 != 0) { //seleccionar índices pares y multiplicarlos por 2
        var evenNumber = num * 2;
        if (evenNumber > 9) { //si son mayor a 9 convertir a string y sumar su índice 0 y 1
            evenNumber = evenNumber.toString();
            var sumEvenNumber = Number(evenNumber[0]) + Number(evenNumber[1]) //Convertir a número y agregarlos a la suma
            sum = sum + sumEvenNumber; 
            } else {
                sum = sum + evenNumber;
                }
            } else { //Agregar nones a la suma
        sum = sum + num;
        }
    });


  if (sum % 10 === 0) { //Dividir la suma entre 10
    element.className = 'success'
    return true;
    } else {
    element.className = 'error'
    }
  }



//Funcion convertir form en array y guardar cada uno de sus índices en variables
const validateCardDetails = element => {
    //escribe tu código aqui
    let formArray = Array.from(form);
    //Guardar en variable ada uno de los inputs
    let cardNumber = formArray[0];
    let expirationMonth = formArray[1];
    let expirationYear = formArray[2];
    let cvv = formArray[3];
    let name = formArray[4];

    //Llamando a funciones y verificando que todas den true
   if(cardNumberFuntion(cardNumber) && nameFunction(name) && cvvFunction(cvv) && expirationMonthFunction(expirationMonth)  && expirationYearFunction(expirationYear)){
       return true;
        }else{
        return false;
        } 
  }

  
//Evento submit del form
form.addEventListener("submit", e => {
  e.preventDefault();
  if (validateCardDetails(form)) {
    console.log("datos válido... enviar...");
  } else {
    console.log("datos inválidos");
  }
});



