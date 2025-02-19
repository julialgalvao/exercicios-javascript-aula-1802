//Exercício 1: Arrow Function com um parâmetro
// Função arrow que recebe um número e retorna o dobro dele
const dobro = numero => numero * 2;
console.log(dobro(7));
console.log(dobro(15));

//Exercício 2: Arrow Function com múltiplos parâmetros
// Função arrow que recebe dois parâmetros e retorna o resultado da divisão
const dividir = (a, b) => a / b;
console.log(dividir(10, 2));
console.log(dividir(9, 3));


//Exercício 3: Arrow Function com múltiplas linhas
// Função arrow que recebe um nome e retorna uma mensagem de boas-vindas
const BoasVindas = Nome => {
    return `Seja bem-vindo, ${Nome}!`;
};
console.log(BoasVindas("MILLY"));
console.log(BoasVindas("LINE"));



//Exercício 4: Higher-Order Function personalizada
// Função que recebe dois números e uma operação, e executa a operação.
const UU = (a, b, operacao) => operacao(a, b);
console.log(UU(15, 3, (a, b) => a - b)); // 3 (-)
console.log(UU(9, 5, (a, b) => a * b)); // 20 (*)

//Exercício 5: map() – Transformação de um array
// Criando um array com preços e aplicando um desconto de 10% usando map()
const precos = [100, 230, 150, 800];
const desc = precos.map(preco => preco * 0.9);
console.log(desc);

//Exercício 6: filter() – Filtrando valores em um array
// Criando um array com idades e filtrando apenas as idades menores que 18
const idades = [12, 17, 18, 21, 15, 22];
const menoresDeIdade = idades.filter(idade => idade < 18);
console.log(menoresDeIdade);


//Exercício 7: reduce() – Somando valores de um array
// Criando um array com números e calculando o produto de todos os números usando reduce()
const numeros = [3, 4, 7, 8];
const produto = numeros.reduce((acc, numero) => acc * numero, 1);
console.log(produto); 
