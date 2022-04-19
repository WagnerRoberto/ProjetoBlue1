console.clear();
//Projeto 1 - A Jornada do Herói

// Criando a historia
const prompt = require('prompt-sync')();
console.log('Em um mundo distante, vem sendo devastada pelo Rei Demonio,');
console.log('chega um jovem, com coragem para enfrentar o Rei Demonio.');
console.log('Qual é o seu nome ?');
let Heroi = prompt();

console.log('Esperamos que voce seja o nosso grande Heroi', Heroi);
console.log('que vai salvar o nosso mundo.');

//Requisitos

//Você deve criar um programa que faça 5 perguntas para o usuário,
//e dependendo das respostas, vai exibir um resultado diferente no final.
//As perguntas devem ser todas de Sim ou Não, e devem ser referentes aos objetivos
//que ele tiveram que ser cumpridos durante a jornada.

console.log('Depois de passar por muitas adversidades, nosso Heroi ', Heroi);
console.log('tera que fazer grandes escolhas antes de');
console.log('enfrentar o Rei Demonio');

//fazendo as 5 perguntas

//pergunta 1
let resposta1 = prompt(`Grande Heroi, ${Heroi} voce deseja liberta a princesa
que esta no Calabouço, s ou n? `);
if (resposta1.toLowerCase() == 's') {
    console.log('Muito bom, Heroi', Heroi, 'vamos continuar');
} else {
    resposta1.toLowerCase() == 'n';
    console.log('humm, tudo bem então Heroi', Heroi, ' vamos continuar');
}

//pergunta 2
let resposta2 = prompt(`Grande Heroi, ${Heroi} voce deseja utilizar a abilidade
Curar na princesa, s ou n?`);
if (resposta2.toLowerCase() == 's') {
    console.log('Muito bom, Heroi', Heroi, 'vamos continuar');
} else {
    resposta2.toLowerCase() == 'n';
    console.log('humm, tudo bem então Heroi', Heroi, ' vamos continuar');
}

//pergunta 3
let resposta3 = prompt(`Grande Heroi, ${Heroi} voce deseja deixar a princesa
em um lugar seguro, s ou n? `);
if (resposta3.toLowerCase() == 's') {
    console.log('Muito bom, Heroi', Heroi, 'vamos continuar');
} else {
    resposta3.toLowerCase() == 'n';
    console.log('humm, tudo bem então Heroi', Heroi, ' vamos continuar');
}

//pergunta 4
let resposta4 = prompt(`Grande Heroi, ${Heroi} voce deseja deseja protejer
a cidade do ataque do Rei Demonio, s ou n? `);
if (resposta4.toLowerCase() == 's') {
    console.log('Muito bom, Heroi', Heroi, 'vamos continuar');
} else {
    resposta4.toLowerCase() == 'n';
    console.log('humm, tudo bem então Heroi', Heroi, ' vamos continuar');
}

//pergunta 5
let resposta5 = prompt(`Grande Heroi, ${Heroi} voce deseja enfrentar o 
Rei Demonio, sim ou nao? `);
if (resposta5.toLowerCase() == 's') {
    console.log('Muito bom, Heroi', Heroi, 'vamos continuar');
} else {
    resposta5.toLowerCase() == 'n';
    console.log('humm, tudo bem então Heroi', Heroi, ' vamos continuar');
}

//No final, o programa deve fazer uma contagem de quantas respostas
//foram Sim, e exibir o resultado de acordo com esse número

console.log('Apos suas ações, a sua aventura terminara com esse resoltado:');

//contagem

let final1 = resposta1 == 's';
if ((resposta1 = 1)) {
} else resposta1 == 'n';
{
    resposta1 = 0;
}
let final2 = resposta2 == 's';
if ((resposta1 = 1)) {
} else resposta2 == 'n';
{
    resposta2 = 0;
}
let final3 = resposta3 == 's';
if ((resposta3 = 1)) {
} else resposta3 == 'n';
{
    resposta3 = 0;
}
let final4 = resposta4 == 's';
if ((resposta1 = 1)) {
} else resposta4 == 'n';
{
    resposta4 = 0;
}
let final5 = resposta5 == 's';
if ((resposta5 = 1)) {
} else resposta5 == 'n';
{
    resposta1 = 0;
}
let final = final1 + final2 + final3 + final4 + final5;

if (final == 0) {
    console.log('Você falha miseravelmente.');
} else if (final <= 2) {
    console.log('Você falha, mas ainda consegue fugir da situação');
} else if (final == 3) {
    console.log(`Você chega perto de conseguir alcançar seu objetivo, 
    mas acaba falhando por pouco.`);
} else if (final == 4) {
    console.log(`Depois de muito esforço você conquista seu objetivo, 
    embora não de maneira perfeita.`);
} else final == 5;
{
    console.log(`Você triunfa de maneira 
    inquestionável e seus feitos serão lembrados
     por muitas gerações.`);
}

//0 respostas Sim: Você falha miseravelmente.
//1 ou 2 respostas Sim: Você falha, mas ainda consegue fugir da situação
//3 respostas Sim: Você chega perto de conseguir
//alcançar seu objetivo, mas acaba falhando por pouco.
//4 respostas Sim: Depois de muito esforço
//você conquista seu objetivo, embora não de maneira perfeita.
//5 respostas Sim: Você triunfa de maneira inquestionável
//e seus feitos serão lembrados por muitas gerações.
