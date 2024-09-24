const prompt = require('prompt-sync');
const entrada = prompt( );

const nomeCompleto = "Ketlyn Silvestre Herrmann";
const anoNascimento = 2006;
let anoAtual = 2024;
let idade = 18;

console.log("Olá eu sou " + nomeCompleto + " estamos no ano " + anoAtual + " minha idade é " + idade + " e sou nascida no ano de " + anoNascimento + ".");

anoAtual = anoAtual + 1;
idade = idade + 1;
console.log("Olá meu nome ainda é " + nomeCompleto + "," + " estamos no ano de " + anoAtual + " e finalmente fiz " + idade + " anos, " + " como eu sou nascida em 2006 ano que vem faço 20 anos e as minhas responsabilidades aumentam.");

console.log(`oi eu sou ${nomeCompleto} meu ano de nascimento é ${anoNascimento} meu ano atual é ${anoAtual} e minha idade é ${idade}`);

const listaDeViagens = new Array(
`Mexico` , 
`Canada`,
`Estados Unidos`,
`Alemanha`,
`Italia`,
);

console.log(listaDeViagens);

console.log(listaDeViagens[4]);

listaDeViagens.push("Coronel Vivida");
console.log(listaDeViagens);

listaDeViagens.splice(1,1);
console.log(listaDeViagens);

var nomeComprador = entrada("Qual é seu nome?");

var idadeComprador = entrada("Qual é a sua idade? ");

  if(idadeComprador <18){
    
    console.log(`Olá, Sr(a). ${nomeComprador} por ter ${idadeComprador} anos, sua idade não é compatível com o nosso regulamento, não podemos vender a nossa passagem a você. Por favor, pedir a um responsável efetuar sua compra! ` );
  }

if(idadeComprador >= 18){
  console.log(`Olá Sr(a) ${nomeComprador} obrigada pela sua preferência de comprar conosco! Selecione o lugar para onde deseja viajar.`);
}
