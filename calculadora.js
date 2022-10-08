let butons = document.getElementsByTagName("button");
let number = "";
let entrada = document.getElementById("entrada");
let operacion = "";
let cut = [];

recognize = (e) => {
  if (!e.target.value.match("(?=[CCE])")) {
    if (
      e.target.value.match("(?=[log%π])") ||
      e.target.value.match("(?=[-+*/()^])")
    ) {
      operation = e.target.value;
    }
    number += e.target.value;
    entrada.value = number;
  } else restOperations(e);
  if (e.target.value.match("=")) {
    cut = number.split(`${operation}`);
    console.log("si entre en =", cut);
    cut[1] = cut[1].slice(0, -1);
    console.log(cut[1]);
    console.log(operation);
    if (cut[0] == "") {
      entrada.value = `${number} ${operationsSpecials(cut[1], operation)}`;
    } else {
      console.log(number);
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
      return num * 3.141583104326456;
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
      return num[0] / num[1];
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

//TODO agregar controles para que no se apriete igual mas de una vez
//division por cero
//aplicar la raiz
//y para la version 2, hacer operaciones algebraicas
