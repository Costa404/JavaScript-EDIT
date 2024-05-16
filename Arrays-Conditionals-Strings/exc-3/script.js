const titulo = "Isto é um título longo de um livro";
console.log(titulo);
console.log(titulo.length);

const newTitulo = titulo.replace("livro", "diário");
console.log(newTitulo);

const concatStrings = newTitulo + ", mas não faz mal porque não é uma seca.";
console.log(concatStrings);
console.log(concatStrings.slice(0, 4));
