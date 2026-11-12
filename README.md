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