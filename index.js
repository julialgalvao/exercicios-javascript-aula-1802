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







//1. Manipulação de Datas com o Objeto Date
//Criando uma Data em JavaScript
//Podemos criar uma instância de Date de várias maneiras:
// Criando uma data com a data e hora atuais
const agora = new Date();
console.log(agora); // Exemplo: 2025-02-16T12:00:00.000Z
// Criando uma data específica (Ano, Mês (0-11), Dia, Hora, Minuto, Segundo, Milissegundo)
const dataEspecifica = new Date(2025, 1, 16, 14, 30, 0);
console.log(dataEspecifica); // 16 de Fevereiro de 2025, 14:30
// Criando uma data a partir de uma string (Formato ISO)
const dataISO = new Date("2025-02-16T14:30:00Z");
console.log(dataISO); // 16 de Fevereiro de 2025, 14:30 UTC
// Criando uma data a partir de um timestamp (milissegundos desde 1º de janeiro de 1970)
const dataPorTimestamp = new Date(1708107000000);
console.log(dataPorTimestamp); // Data correspondente ao timestamp

const data = new Date(2025, 1, 16, 14, 30, 0);
console.log(data.getFullYear()); // 2025
console.log(data.getMonth()); // 1 (Fevereiro, pois os meses começam do 0)
console.log(data.getDate()); // 16
console.log(data.getDay()); // 0 (Domingo, pois os dias começam do 0 -  Domingo)
console.log(data.getHours()); // 14
console.log(data.getMinutes()); // 30
console.log(data.getSeconds()); // 0

const data1 = new Date();
data.setFullYear(2026);
data.setMonth(5); // Junho (meses começam do 0)
data.setDate(20);
console.log(data1); // Nova data com os valores atualizados

const data2 = new Date2();
// Formatação padrão local
console.log(data.toLocaleDateString()); // Exemplo: "16/02/2025" (Brasil)
console.log(data.toLocaleDateString("en-US")); // "02/16/2025" (EUA)
console.log(data.toLocaleDateString("pt-BR", { weekday: "long", year: "numeric", month: "long", day: "numeric" }));
// "Domingo, 16 de fevereiro de 2025"

const data3 = new Date3();
data.setDate(data3.getDate() + 7); // Adiciona 7 dias
console.log(data3);
data.setMonth(data3.getMonth() - 1); // Subtrai 1 mês
console.log(data3);