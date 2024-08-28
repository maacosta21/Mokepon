let jugadorCounter = 0
let pcCounter = 0
const max = 3
const min = 1

function aleatorio(max, min) {
    return Math.floor(Math.random() * (max - min + 1)+min)
}

function vidasCounter() {
    while(jugadorCounter < 3 && pcCounter < 3) {
        
        let jugador = prompt('Elige un numero')

    if(jugador == 1){
        alert('elegiste piedra')
    } else if(jugador == 2) {
        alert('elegiste papel')
    } else if(jugador == 3){alert('elegiste tijera')}
    else{
        alert('elige un numero')
        let jugador = prompt('Elige un numero')
    }
     
    let pc = aleatorio(3,1)
    
    if(pc == 1){
        alert('PC elige piedra')
    } else if(pc == 2) {
        alert('PC elige papel')
    } else if(pc == 3){alert('PC elige tijera')}
    
    if (jugador == 1 && pc == 3) {
        alert('Ganaste')
        jugadorCounter ++
    } else if(jugador == 2 && pc == 1){
        alert('Ganaste')
        jugadorCounter ++
    
    }else if(jugador == 3 && pc == 2){
        alert('Ganaste')
        jugadorCounter ++
    }else if (jugador == pc){
        alert('empate')
    } else {
        alert('perdiste') 
        pcCounter ++
    }
    }
} vidasCounter()




