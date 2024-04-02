function calcular() {
  var valor1 = document.getElementById("valor1").value;
  var valor2 = document.getElementById("valor2").value;
  valor1 = eval(valor1);
  valor2 = eval(valor2);
  operacao = document.getElementById("operacao").value;

  switch (operacao) {
    case "+":
      total = valor1 + valor2;
      document.getElementById("total").innerHTML = total;
      break;
    case "-":
      total = valor1 - valor2;
      document.getElementById("total").innerHTML = total;
      break;
    case "*":
      total = valor1 * valor2;
      document.getElementById("total").innerHTML = total;
      break;
    case "/":
      total = valor1 / valor2;
      document.getElementById("total").innerHTML = total;
      break;
  }
}
