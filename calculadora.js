let butons = document.getElementsByTagName("button");
let number = "";
let entrada = document.getElementById("entrada");
let operation = "";
let cut = [];
let equalDone=false;
let equal=document.getElementById("equal")

recognize = (e) => {
  if (!e.target.value.match("(?=[CCE])")) {
    if (
      e.target.value.match("(?=[log%π√x])") ||
      e.target.value.match("(?=[-+*/()^])")
    ) {
      operation = e.target.value;
    }
    number += e.target.value;
    entrada.value = number;
  } else restOperations(e);
  if (e.target.value.match("=") && cut.length!=1) {
    cut = number.split(`${operation}`);
    cut[1] = cut[1].slice(0, -1);
    if (cut[0] == "") {
      entrada.value = `${number} ${operationsSpecials(cut[1], operation)}`;
    } else {
      entrada.value = `${number} ${resolve(operation, cut)}`;
    }
  }
};
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
      cut.pop();
      if (entrada.value == "") erase();
      break;
  }
};

operationsSpecials = (num, op) => {
  switch (op) {
    case "log":
      return Math.log(num) / Math.log(10);
    case "%":
      return num / 100;
    case "π":
      return num * Math.PI;
    case "√x":
      return Math.sqrt(num)
  }
};
resolve = (op, num) => {
  switch (op) {
    case "+":
      return Number(num[0]) + Number(num[1]);
    case "-":
      return num[0] - num[1];
    case "*":
      return num[0] * num[1];
    case "/":
      if(num[1]!=0){
      return num[0] / num[1];
      }else return "ERROR"
    case "^":
      let result = 1;
      for (let i = 0; i < num[1]; i++) {
        result = num[0] * result;
      }
      return result;
  }
};

for (let i = 0; i < butons.length; i++) {
  butons[i].addEventListener("click", recognize);
}
equal.addEventListener("click",verificationCantEquals)
document.getElementById("entrada").addEventListener("keyup",recognize)
//TODO agregar controles para que no se apriete igual mas de una vez
//y para la version 2, hacer operaciones algebraicas, revisar el target del input
