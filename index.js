function thanos(vitorias, derrotas) {
    let result = vitorias - derrotas
    return result
  }
  
  function rank() {
    let resultRank = thanos(50, 20)
    let nivel = ""
    if (resultRank <= 10) {
      nivel = "Ferro"
    } else if (resultRank >= 11 && resultRank  <= 20) {
      nivel = "Bronze"
    } else if (resultRank >= 21 && resultRank <= 50) {
      nivel = "Prata"
    } else if (resultRank >= 51 && resultRank <= 80) {
      nivel = "Ouro"
    } else if (resultRank >= 81 && resultRank <= 90) {
      nivel = "Diamante"
    } else if (resultRank >= 91 && resultRank <= 100) {
      nivel = "Lendário"
    } else if (resultRank >= 101) {
      nivel = "Imortal"
    }
    return `O Herói tem de saldo de ${resultRank} e está no nível de ${nivel}`
  }
  
  console.log(rank())