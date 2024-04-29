// 1 - Originalmente até 2015 todo valor era definido com Var
// 2 - Então com ES6/ES2015 foram criadas o "let" e o "var";
// 3 - const seria para termos valores constantes sem ter um código ruim Ex: PI;
// 4 - let seria o substituto do "var", o motivo é que "var" é muito IMPREVISÍVEL quando estamos codando.
// A seguir vão alguns argumentos que fizeram criar o "let" para substituir o "var".
//Primeiro argumento: É afetado por Hoisting que é um fenômeno que joga as definições de "var" e "funções" para o topo do código no Javascript.
// PRIMEIRO EXEMPLO:
//console.log(gps); // UNDEFINED
//var gps = 5;
//console.log(gps); // 5
TestandoHoisting(); // Eu posso rodar mesmo não existindo na linha que rodei

function TestandoHoisting() {
    console.log("Eu posso rodar mesmo não existindo na linha que rodei");
}
