const form = document.querySelector("form");
console.log(form); 
const inputName = document.getElementById("name");
//Variables globales



//Eventos
inputName.addEventListener("keypress", onlyString);


//funciones
function onlyString() {
    console.log("siii")
    return event.charCode >= 65 && event.charCode <= 90;
}


const nameFunction = element => {
    let nameValue = element.value;
    let typeName = typeof nameValue;
    console.log(typeName);
    if(nameValue.length <= 5){
        onlyString(nameValue);
        element.className = "success";
        console.log("name bien")
    }else{
        //let cvvValue = element.value;
        element.className = "error";  
    }
    console.log(" name ")
}

const cvvFunction = element =>{
    let cvvValue = element.value;
    if(cvvValue > 100 && cvvValue.length === 3){
      //  let cvvInput = document.getElementById("cvv");
        element.className = "success";
        console.log("esta bien")
        return true;
    }else{
        //let cvvValue = element.value;
        element.className = "error";
        console.log("esta mal");
        return false
    }
}

const cardNumberFuntion = element => {
    console.log("holii")
}

const validateCardDetails = element => {
    //escribe tu código aqui
    let formArray = Array.from(form);
    //Obtener el valor de cada uno de los inputs para despues validarlo
    let cardNumber = formArray[0];
    let expirationDate = formArray[1];
    let cvv = formArray[2];
    let name = formArray[3];
    console.log(cardNumber);
    console.log(expirationDate);
    console.log(cvv);
    console.log(name);

    cardNumberFuntion(cardNumber);
    //expirationDateFunction(expirationDate);
    cvvFunction(cvv);
    nameFunction(name);

  }
 
form.addEventListener("submit", e => {
  e.preventDefault();
  if (validateCardDetails(form)) {
    console.log("datos válido... enviar...");
  } else {
    console.log("datos inválidos");
  }
});



