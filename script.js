alert('Ola Seja bem vindo a Calculadora! ');
var operacao = prompt("Digite 'S' para somar, 'L' para subtrair, 'D' para dividir, 'M' para multiplicar: ");
var n1 = parseInt(prompt("Digite o primeiro número: "));
var n2 = parseInt(prompt("Digite o segundo número:  "));


if (operacao === 'S' || operacao === 's') {
   
   var somar = n1+n2;
   alert(somar);
} else if (operacao === 'L' || operacao === 'l') {
  
   var diminuir = n1-n2;
   alert(diminuir)
} else if (operacao === 'D' || operacao === 'd') {
  
   var dividir = n1/n2;
   alert(dividir);
} else if (operacao === 'M' || operacao === 'm') {
   
   var multiplicar = n1*n2;
   alert(multiplicar);
} 


/*var nome = prompt('Digite seu nome: ');
alert(nome + ', seja bem vindo!');*/
