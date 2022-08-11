
let vez = 'X'

const resultado = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 5, 9],
    [3, 5, 7],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9]
  ]

const jogar = (id) => {
    const casa = document.getElementById(id)

    if(casa.innerHTML == ''){
        if(vez == 'X'){
            casa.innerHTML = 'X'
            vez = 'O'
        }else{
            casa.innerHTML = 'O'
            vez = 'X'
        }
    }


    resultado.forEach(item=>{
    const casa1 = document.getElementById(item[0]).innerHTML
    const casa2 = document.getElementById(item[1]).innerHTML
    const casa3 = document.getElementById(item[2]).innerHTML

    if(casa1 == 'X' && casa2 == 'X' && casa3 == 'X'){
        alert('X venceu')
        jogo = false
        return
    }
      if(casa1 == 'O' && casa2 == 'O' && casa3 == 'O'){
        alert('O venceu!')
        jogo = false
    }
  })
}


const tr = `<tr></tr>`
const tabuleiro = document.querySelector('#tabuleiro')
for(let i = 1; i < 9; i += 3){
  tabuleiro.innerHTML += `
  <tr>
  <td id=${i} onclick="jogar(${i})" style="width: 25px; height: 25px;"></td>
  <td id=${i + 1} onclick="jogar(${i + 1})" style="width: 25px; height: 25px;"></td>
  <td id=${i + 2} onclick="jogar(${i + 2})" style="width: 25px; height: 25px;"></td>
  </tr>
  `
}


