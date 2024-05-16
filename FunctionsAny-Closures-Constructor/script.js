// ================

// anonymous function

// ================

const test = function () {
  console.log("Isto foi demasiado rápido!");
};

test();

// ================

// closure

// ================

function formulário(nomeForm) {
  return function (nomeUser) {
    return `${nomeForm}:${nomeUser}`;
  };
}

console.log(formulário("Nome")("Vitor"));

// ================

// constructor

// ================

function Pais(cidade, dia) {
  this.cidade = cidade;
  this.dia = dia;
}

let cidadeUm = new Pais("Londres", 20);
cidadeUm.dia = 2.5;
console.log(parseInt(cidadeUm.dia));
