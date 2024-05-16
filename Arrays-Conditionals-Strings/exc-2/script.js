function finalPrice(preço, desconto) {
  let totalDesconto = desconto / 100;

  if (totalDesconto === 0) {
    return preço * 2;
  } else if (totalDesconto >= 0.1 && totalDesconto < 0.3) {
    return preço - preço * totalDesconto;
  } else if (totalDesconto < 0.1) {
    return preço + preço * totalDesconto;
  } else {
    return "Desconto inválido";
  }
}

console.log(finalPrice(100, 0));
