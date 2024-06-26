// 1 - Novamente vamos criar um algoritmo de calcular área do círculo, porém criar uma versão aprimorado do algoritmo.
// 2 - criar uma função chamada calcularAreaCirculo
// 3 - Criar os parâmetros raio e unidade.
// 4 - Em vez de de definir de forma simplificada como pi = 3.14, nós vamos utilizar um recurso nativo chamado Math que vai trazer o valor correto original de PI.
// 5 - O recurso Math também tem a possibilidade de fazer potenciações com o recurso Math.pow que vamos utilizar também.
// 6 - Vamos definir dentro da função calcularAreaCirculo a seguinte constante: const area = Math.PI * Math.pow(raio, 2);
// 7 - Então vai ficar dessa forma: const area = Math.PI * Math.pow(raio, 2);
// 8 - Toda função pode retornar algo, portanto vamos retornar a area + sua unidade ao quadrado. Ex: return `${area} ${unidade}²`;
// 9 - no final passamos o seguinte valor para trazer um saída console.log(calcularAreaCirculo(2, "m"));
// 10 - Rodamos o código para ver o resultado final.
//Obs: Caso você ache que o resultado está com casas decimais demais, você pode limitar utilizando toFixed() em unidade.

       function CalcularAreaCirculo(raio, medida) {
           const area = Math.PI.toFixed(2).replace("." , ",") * Math.pow(raio, 2);
           return "a area do circulo è :" + area + medida;
       }
       console.log(Math.PI.toFixed(2) .replace ("." , ","));
       console.log(CalcularAreaCirculo(2, "m²" ));
     





















