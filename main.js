alert("Acerte a quantidade de balas no pote!!")

let tentativas = 1

let resposta = Number(prompt("Quantas balas tem no pote? (Está entre 1 e 50)"))

// antes dentro do while eu tinha feito algo do tipo
// while (resposta > 0 && resposta < 51 && resposta != 27)
// no entanto eu me esqueci que aqui não precisava definir teto nem chão
// isso porque como o while é unicamente responsável pela repetição
// a unica coisa necessária para ele continuar seria ser diferente de 27
// ou seje, resposta != 27
// isso enquanto o if/else dentro do while faz o papel de teto de 1 á 50
// e invalides se fora dessa régua
while (resposta != 27) {

    if (resposta < 51 && resposta > 27) {
        console.log("O número correto está mais á baixo")
        alert("O número correto está mais á baixo")
    } else if (resposta < 27 && resposta > 0) {
        console.log("O número correto está mais á cima")
        alert("O número correto está mais á cima")
    } else {
        console.log("O número ou valor digitado não é valido!!")
        alert("O número ou valor digitado não é valido!!")
    }

// esse linha precisa estar aqui para o while continuar
// e não travar nas mesagens do if/elseif/else
// tambem se essa linha estivesse no topo antes do if
// e você digitasse alguma resposta errada antes da certa
// ia aparecer a mensagem do else, depois ia dizer que você acertou
// exemplo:
// na primeira ou primeiras respostas coloco letras ou números que não sejam 27
// dai finalmente eu coloco 27
// apareceria "O número ou valor digitado não é valido!!"
// dai logo em seguida aparecia "Parabéns, você acertou o número de balas no pote"
// então toda a mensagem final
resposta = Number(prompt("Quantas balas tem no pote? (Está entre 1 e 50)"))
    
    tentativas++
}

console.log("Parabéns, você acertou o número de balas no pote\nNúmero correto de balas: 27\nTentativas totais: " + tentativas)
alert("Parabéns, você acertou o número de balas no pote\nNúmero correto de balas: 27\nTentativas totais: " + tentativas)

console.log("Por ter acertado, você ganha café e bolo!!")
alert("Por ter acertado, você ganha café e bolo!!")

// obs: a minha pesquisa aqui foi sobre um operador que pudesse indicar diferença
// o mesmo sendo o !=, quando nos temos "resposta != 27", significa que:
// a variavel "resposta" tem de ser diferente de 27
// e enquanto isso for uma verdade, o while continua repetindo
// isso claro que com o "resposta = Number(prompt(..." na penultima linha
___________________________________________________________

// alert("Cofrinho do Pedro")

// let attempts = 0

// let total = 0

// while (total < 300) {

// let valor_inserido = Number(prompt("Digite o valor a ser colocado no cofrinho hoje: "))

// if (valor_inserido > 0) {
//   total += valor_inserido
//     console.log("O valor atual é " + total)
//     alert("O valor atual é " + total)
// } else {
//     console.log("O valor digitado é invalido")
//     alert("O valor digitado é invalido")
// }
//     attempts++
// }

// console.log(
// "Parabéns, você alcançou a meta para comprar a Bicicleta!!" +
// "\nValor necessário: 300" +
// "\nValor Arrecadado: " + total +
// "\nSemanas contabilizadas: " + attempts
// )
// alert (
// "Parabéns, você alcançou a meta para comprar a Bicicleta!!" +
// "\nValor necessário: 300" +
// "\nValor Arrecadado: " + total +
// "\nSemanas contabilizadas: " + attempts
// )

// obs: Neste código tive algumas dificuldades, como

// O principal impecilho era 
// "como somar algo com o que já exite sendo que o valor do que já exista já estará definido como valor final, somar o que será acresentado com o valor final para ser igual ao próprio valor final é algo tipo OQUE"

// O prompt as vezes não aparecer,
// ou quando aparecia, 
// se algo fosse inserido cairia diretamente no else

// tambem teve vezes que o prompt virava NaN

// na última parte pós while,
// mesmo sabendo como por linha embaixo de linha com \n,
// não sabia como colocar as mesmas linhas uma em baixo da outro citando as váriaves total e attemps
// sem que elas se tornassem strings e aparecessem no console.log e alerte como as literáis palavras,
// em todo caso nas minhas tentativas o resultando era que as últimas 2 linhas ficavam grudadas

// acredito qua as situações que resolveram foram:

// principal impecilho - resolvi pesquisando,
//  o correto é não usar "total = total + valor_inserido"
//  e sim usar "total += valor_inserido"
// += é um acumulador, então funciona melhor e corretamente nesse caso

// prompt não parecer e o NaN acredito que foram resolvidos do mesmo jeito
___________________________________________________________

// alert("réveillon")

// let attempts = 10

// while (attempts > 0) {

//     console.log(attempts)
//     alert(attempts)

//     attempts--
// }

//     console.log("FELIZ ANO NOVO!!")
//     alert("FELIZ ANO NOVO!!")

___________________________________________________________

// alert("Captive Portal - Wifi da Padaria")

// const PASSWORD = "pao123"

// let attempts = 0

// while (attempts < 3) {
//     let enter_password = prompt("Digite a senha: ")
    
//     if (enter_password === PASSWORD) {
//         console.log("Conectado a Internet, bom café")
//         alert("Conectado a Internet, bom café")
//         break
//     } else {
//         console.log("Senha incorreta! tente novamente")
//         alert("Senha incorreta! tente novamente")
//     }

//     if (attempts === 2) {
//         alert("Bloqueado!")
//     }

//     attempts++
// }