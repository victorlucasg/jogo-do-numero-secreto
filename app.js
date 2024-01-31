let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto; 
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto.');
    exibirTextoNaTela('p', 'Escolha um número entre 01 e 10:');
}
    
exibirMensagemInicial ();


function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');

        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}.`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela ('p', 'O número secreto é menor.');
        } else {
            exibirTextoNaTela ('p', 'O número secreto é maior.' )
        }
        tentativas ++;
        limparCampo();
    }
} 

function gerarNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
   let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

   if (quantidadeDeElementosNaLista == numeroLimite) {
    listaDeNumerosSorteados = [];
   }

   if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
   } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    return numeroEscolhido;
   }
}


// Limpando o campo do chute.
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}











// Desafios de aprendizado:


// Criar uma função que exibe "Olá, mundo!" no console.
// function saudacao() {
//     console.log ('Olá, mundo!');
// }
// // após criar a função, é preciso chamá-la:
// saudacao();



// Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
// function saudacao() {
//     let mundo = 'mundo!';
//     console.log(`Olá, ${mundo}!`);
// }

// saudacao();



// Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
// function dobrarNumero(numero) {
//     return numero * 2;
// }

// let resultado = dobrarNumero(30);
// console.log(resultado);



// Criar uma função que recebe três números como parâmetros e retorna a média deles.
// function calcularMedia(num1, num2, num3) {
//     // Calcula a média dos três números
//     let media = (num1 + num2 + num3) / 3;

//     // Retorna a média
//     return media;
// }

// // Exemplo de uso da função
// let resultadoMedia = calcularMedia(10, 20, 30);
// console.log(resultadoMedia); // Isso irá exibir a média (20) no console



// Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
// function comparacaoNumeros(num1, num2) {
//     if (num1 > num2) {
//         return num1;
//     } else {
//         return num2;
//     }
// }

// let = resultadoMaiorNumero = comparacaoNumeros(80, 20);
// console.log(resultadoMaiorNumero);




// Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo.
// function numeroPrincipal (numero) {
//     return (numero * numero);
// }

// let calculoNumero = numeroPrincipal(3);
// console.log(calculoNumero);




// Desenvolva uma função que calcule o valor de um produto com desconto. A função deve receber o valor original do produto e o percentual de desconto como parâmetros, e retornar o valor com desconto aplicado. Utilize essa função para calcular o valor final de diferentes produtos.

// function calcularValorComDesconto(valorOriginal, percentualDesconto) {
//     // Verifica se o percentual de desconto é válido (entre 0 e 100)
//     if (percentualDesconto < 0 || percentualDesconto > 100) {
//         console.error('Erro: Percentual de desconto inválido.');
//         return null;  // Retorna null em caso de erro
//     }

//     // Calcula o valor com desconto
//     let valorDesconto = (valorOriginal * percentualDesconto) / 100;
//     let valorComDesconto = valorOriginal - valorDesconto;

//     return valorComDesconto;
// }

// // Exemplo de uso da função
// let valorProduto1 = calcularValorComDesconto(100, 10);
// console.log("Valor final do Produto 1:", valorProduto1);

// let valorProduto2 = calcularValorComDesconto(50, 20);
// console.log("Valor final do Produto 2:", valorProduto2);



// Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
// function imcUsuario(altura, peso) {
//     return peso / altura ** 2;
// }

// let calculoImc = imcUsuario(1.67, 76.0);
// console.log ((calculoImc.toFixed(2))); // usando .toFixed2 para controlar as casas decimais.

// if (calculoImc < 24.9 && calculoImc > 18.6) {
//     console.log('Você está no peso ideal!')
// } else {
//     console.log ('Peso fora do normal, cuide-se!')
// }



// Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.




// Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
// function cambio (valorDolar) {
//     const cotacaoDolar = 4.80;
//     return valorDolar * cotacaoDolar;
// }

// let conversaoCambio = cambio(4.80);
// console.log(conversaoCambio);




// Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
// function medidasSala (altura, largura) {
//     let area = altura * largura;
//     let perimetro = 2 * (altura + largura);

//     console.log(`Área da sala: ${area} m².`);
//     console.log(`Perímetro da sala: ${perimetro} m².`);
// }

// medidasSala(2.20, 5);


// Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.


// Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.


// Crie uma lista vazia, com o nome listaGenerica.
// let listaGenerica = [];



// Crie uma lista de linguagens de programação chamada linguagensDeProgramacao com os seguintes elementos: 'JavaScript','C','C++', 'Kotlin' e 'Python'.
// let linguagensDeProgramacao = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

// Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.
// linguagensDeProgramacao.push ('Java');
// linguagensDeProgramacao.push ('Ruby');
// linguagensDeProgramacao.push ('GoLang');

// console.log (linguagensDeProgramacao[5]);


// Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.
// let = nomes = ['Victor', 'Guilherme', 'Ana'];
// console.log(nomes[2]);