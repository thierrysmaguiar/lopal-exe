alert("Cofrinho do Pedro")

let attempts = 0

let total = 0

while (total < 300) {

let valor_inserido = Number(prompt("Digite o valor a ser colocado no cofrinho hoje: "))

if (valor_inserido > 0) {
  total += valor_inserido
    console.log("O valor atual é " + total)
    alert("O valor atual é " + total)
} else {
    console.log("O valor digitado é invalido")
    alert("O valor digitado é invalido")
}
    attempts++
}

console.log(
"Parabéns, você alcançou a meta para comprar a Bicicleta!!" +
"\nValor necessário: 300" +
"\nValor Arrecadado: " + total +
"\nSemanas contabilizadas: " + attempts
)
alert (
"Parabéns, você alcançou a meta para comprar a Bicicleta!!" +
"\nValor necessário: 300" +
"\nValor Arrecadado: " + total +
"\nSemanas contabilizadas: " + attempts
)

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