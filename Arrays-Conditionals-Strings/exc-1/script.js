paises = [
  "Albânia",
  "Bolívia",
  "Canadá",
  "Dinamarca",
  "Etiópia",
  "Finlândia",
  "Alemanha",
  "Hungria",
  "Irlanda",
  "Japão",
  "Quênia",
];

for (let i = 0; i < paises.length; i++) {
  paises[i];
  console.log(paises[i]);
}

function PaisesLength() {
  return paises.length;
}
console.log(PaisesLength());

paises.unshift("Portugal");
paises.push("Espanha");

function trimArray() {
  return paises.slice(10);
}

console.log(trimArray());

console.log(paises.join("-"));
