let butons = document.getElementsByTagName("button");
let operations = [];
let number = "";
let entrada = document.getElementById("entrada");
let special = false;
let basic = false;
//problema log entra al else if pero no guarda en operations ni pushea nada

recognize = (e) => {
  if (!e.target.value.match("(?=[CCE])")) {
    if (e.target.value.match("(?=[log%π])")) special = true;
    if (e.target.value.match("(?=[-+*/()%^π=])")) basic = true;
    number += e.target.value;
    operations.push(e.target.value);
    console.log(operations);
    entrada.value = number;
  } else restOperations(e);
  if (operations.length == 2 && special) {
    special = false;
    entrada.value = `${number}\n ${operationsSpecials(e, operations)}`;
  } else if (operations.length >= 3 && basic) {
    basic = false;
    entrada.value = number+ "\n" + resolve(operations);
  }
};
//no perder lareferencia de la operacion que estoy haciendo
//ir concatenando el numero y cuando ingrese un simbolo recien pushear ese number al array
//TODO revisar que todas las funciones anden bien ;
//hacer algo diferente con el signo igual, reemplazar n/n por raiz
//hacer un hover sobre los botones
// TODO falla poner mas de 3 numeros o un numero>2 cifras par operar

erase = () => {
  number = "";
  operations = [];
};

restOperations = (e) => {
  switch (e.target.value) {
    case "CE":
      entrada.value = "";
      erase();
      break;
    case "C":
      entrada.value = entrada.value.slice(0, -1);
      operations.pop();
      if (entrada.value == "") erase();
      break;
  }
};
operationsSpecials = (e, op) => {
  switch (op[0]) {
    case "log":
      return Math.log(op[1]) / Math.log(10);
    case "%":
      return op[1] / 100;
    case "π":
      return op[1] * 3.141583104326456;
  }
};
resolve = (op) => {
  switch (op[1]) {
    case "+":
      return Number(op[0]) + Number(op[2]);
    case "-":
      return op[0] - op[2];
    case "*":
      return op[0] * op[2];
    case "/":
      return op[0] / op[2];
    case "^":
      let result = 1;
      for (let i = 0; i < op[2]; i++) {
        result = op[0] * result;
      }
      return result;
  }
};

for (let i = 0; i < butons.length; i++) {
  butons[i].addEventListener("click", recognize);
}
