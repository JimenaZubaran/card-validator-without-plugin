//Variables globales
const form = document.querySelector("form");
console.log(form); 
const inputName = document.getElementById("name");




//Eventos
//inputName.addEventListener("keyup", onlyString);


//funciones
//function onlyString() {
  //  console.log("siii")
    ////return event.charCode >= 65 && event.charCode <= 90;
    //return true;
//}

//Validación nombre
const nameFunction = element => {
    let nameValue = element.value;
    let typeName = typeof nameValue;
    console.log(typeName);
    if(nameValue.length <= 5){
       // onlyString(nameValue);
        element.className = "success";
        console.log("name bien")
        return true;
    }else{
        //let cvvValue = element.value;
        element.className = "error";  
    }
    console.log(" name ")
}


//Validación de CVV
const cvvFunction = element =>{
    let cvvValue = parseInt(element.value);
    if(cvvValue > 100){
        element.className = "success";
        console.log("esta bien");
        return true;
    }else{
        //let cvvValue = element.value;
        element.className = "error";
        console.log("esta mal");
        return false
    }
}



//Validación año
const expirationYearFunction= element =>{
    let yearValue = parseInt(element.value);
    if(yearValue >= 18 && yearValue <= 25){
        element.className = "success";
        console.log("esta bien");
        return true;
    }else{
        //let cvvValue = element.value;
        element.className = "error";
        console.log("esta mal");
        return false
    }
}

//Validación mes
const expirationMonthFunction= element =>{
    let monthValue = parseInt(element.value);
    if(monthValue <= 12){
        element.className = "success";
        console.log("esta bien");
        return true;
    }else{
        //let cvvValue = element.value;
        element.className = "error";
        console.log("esta mal");
        return false
    }
}


//Validación número de tarjeta


const validateCardDetails = element => {
    //escribe tu código aqui
    let formArray = Array.from(form);
    //Obtener el valor de cada uno de los inputs para despues validarlo
    let cardNumber = formArray[0];
    let expirationMonth = formArray[1];
    let expirationYear = formArray[2];
    let cvv = formArray[3];
    let name = formArray[4];
    console.log(cardNumber);
    console.log(expirationMonth);
    console.log(cvv);
    console.log(name);

    cardNumberFuntion(cardNumber);
    expirationMonthFunction(expirationMonth);
    expirationYearFunction(expirationYear);
    cvvFunction(cvv);
    nameFunction(name);

  }
 
form.addEventListener("submit", e => {
  e.preventDefault();
  if (validateCardDetails(form)) {
      console.log(validateCardDetails(form));
    console.log("datos válido... enviar...");
  } else {
    console.log("datos inválidos");
  }
});



