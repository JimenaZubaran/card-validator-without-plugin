const form = document.querySelector("form");
console.log(form); 
//Variables globales
//Eventos 
//funciones

const cvvFunc = element =>{
    console.log(element.length)
    let cvvValue = element.value;
    if(cvvValue > 100 && cvvValue.length === 3){
      //  let cvvInput = document.getElementById("cvv");
        element.className = "success";
        console.log("esta bien")
    }else{
        let cvvValue = element.value;
        element.className = "error";
        console.log("esta mal");
    }
    console.log("holaa amigos");
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

    cvvFunc(cvv);
  }
 
form.addEventListener("submit", e => {
  e.preventDefault();
  if (validateCardDetails(form)) {
    console.log("datos válido... enviar...");
  } else {
    console.log("datos inválidos");
  }
});



