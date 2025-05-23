// Exercícios Práticos - Arrays em JavaScript
// -------------------------------------------
// Objetivo: Praticar os métodos push, pop, shift, unshift, length e splice

// EXERCÍCIO 01 - Criando e exibindo um array
// Crie um array com três nomes e exiba o array e seu tamanho no console.
// Método sugerido: length
let nomes = ['Eliane', 'Ana', 'Maria'];
console.log(nomes);
console.log("O tamanho do Array nomes é: " + nomes.length);



// EXERCÍCIO 02 - Adicionando elementos ao final
let nomes = ["Ana", "Carlos", "Joana"];
nomes.push("Bruno", "Fernanda");
console.log("Após push:", nomes);

// EXERCÍCIO 03 - Inserindo no início
nomes.unshift("Paula");
console.log("Após unshift:", nomes);

// EXERCÍCIO 04 - Removendo o último
let removidoFinal = nomes.pop();
console.log("Nome removido (final):", removidoFinal);
console.log("Array restante:", nomes);

// EXERCÍCIO 05 - Removendo o primeiro
let removidoInicio = nomes.shift();
console.log("Nome removido (início):", removidoInicio);
console.log("Array restante:", nomes);

// EXERCÍCIO 06 - Removendo e adicionando elementos
let frutas = ["maçã", "banana", "laranja", "uva", "kiwi"];
frutas.splice(1, 2, "abacaxi", "manga");
console.log("Frutas após splice:", frutas);

// EXERCÍCIO 07 - Exibindo o tamanho do array
console.log("Tamanho do array de frutas:", frutas.length);

// EXERCÍCIO 08 - Criando um histórico de páginas
let historico = [];
historico.push("home");
historico.push("sobre");
historico.push("contato");
console.log("Histórico de páginas:", historico);

// EXERCÍCIO 09 - Removendo o último acesso do histórico
let ultimaPagina = historico.pop();
console.log("Saída da página:", ultimaPagina);
console.log("Histórico restante:", historico);

// EXERCÍCIO 10 - Alterando elementos
let cores = ["vermelho", "verde", "amarelo", "roxo"];
cores.splice(2, 1, "azul-marinho");
console.log("Cores após alteração:", cores);
