// sem usar funcções e de forma simplificada SEM USAR SORT


//     const prompt = require ('prompt-sync')();

//     let numero = prompt ("digite um numero, " +
//     "Dessa forma retornarei o maior numero possível com esses algarismos: "
//     )
//     let numeroSplit = []

//         numero = numero.split("");
// console.log (numero)
        
// for (let i = 0; i < numero.length; i++) {
//     for (let j = 0; j < numero.length; j++) {
//       let aux = numero[i];
//       numero[i] = numero[j];
//       numero[j] = aux;

//       if (!numeroSplit.includes(numero.join(""))) {
//         numeroSplit.push(numero.join(""));
//         console.log(numero.join("")); 

           

//     }
//     }
//  }



// //USANDO SORT E DE FORMA SIMPLIFICADA

//  const prompt = require('prompt-sync')();

// // Solicita ao usuário que digite um número
// let numero = prompt("Digite um número. Eu retornarei o maior número possível com esses algarismos: ");

// // Converte o número em uma array de dígitos
// let digitos = numero.split("");

// // Ordena os dígitos em ordem decrescente
// digitos.sort((a, b) => b - a);

// // Junta os dígitos ordenados em uma única string para formar o número
// let maiorNumero = digitos.join("");

// // Exibe o maior número possível
// console.log(`O maior número possível com os algarismos de '${numero}' é: ${maiorNumero}`);



//EXEMPLO USANDO FUNÇÕES 


// const prompt = require('prompt-sync')();

// // Função para encontrar o maior número possível com os algarismos fornecidos
// function maiorNumeroPossivel(numero) {
//     // Converte o número em uma array de dígitos
//     let digitos = numero.split("");

//     // Ordena os dígitos em ordem decrescente
//     digitos.sort((a, b) => b - a);

//     // Retorna o maior número possível formado pelos dígitos ordenados
//     return digitos.join("");
// }

// // Solicita ao usuário que digite um número
// let numero = prompt("Digite um número. Eu retornarei o maior número possível com esses algarismos: ");

// // Chama a função para encontrar o maior número possível
// let resultado = maiorNumeroPossivel(numero);

// // Exibe o resultado para o usuário
// console.log(`O maior número possível com os algarismos de '${numero}' é: ${resultado}`);

