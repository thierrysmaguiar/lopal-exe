alert("Cofrinho do Pedro")

let valor_inserido

let total

let attempts = 0.00

while (total === 300.00) {

valor_inserido = prompt("Digite o valor a ser colocado no cofrinho hoje:")

total = attempts + valor_inserido

    console.log()
    alert("O valor atual é", total)

}

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