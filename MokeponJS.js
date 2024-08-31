let jugadorMascota
let pcMascota
let jugadorCounter = 0
let pcCounter = 0
const max = 3
const min = 1

//Variables DOM

const botonMacostaJuagador = document.querySelector('#boton-mascota')
const mascotaHipodoge = document.querySelector('#Hipodoge')
const mascotaCapipepo = document.querySelector('#Capipepo')
const mascotaRatigueya = document.querySelector('#Ratigueya')
const mascotaJugadorDom = document.querySelector('#PlayerPET')
const mascotaPcDom = document.querySelector('#PCPET')
botonMacostaJuagador.addEventListener('click', alertas)

function alertas() {
    if(mascotaHipodoge.checked) {
        jugadorMascota = 'Hipodoge'
        mascotaPCSelect()
    } else if(mascotaCapipepo.checked) {
        jugadorMascota = 'Capipepo'
        mascotaPCSelect()
    } else if(mascotaRatigueya.checked) {
        jugadorMascota = 'Ratigueya'
        mascotaPCSelect()
    } else {alert('Elige una mascosta')}
    
}

function aleatorio(max, min) {
     return Math.floor(Math.random() * (max - min + 1)+min) 
}

function mascotaPCSelect() {
    let pcAleatorio = aleatorio(3,1)

    if(pcAleatorio == 1){
        pcMascota = 'Hipodoge'
    } else if(pcAleatorio == 2) {
        pcMascota = 'Capipepo'
    } else {
        pcMascota = 'Ratigueya'
    }

    mascotaJugadorDom.innerHTML = jugadorMascota
    mascotaPcDom.innerHTML = pcMascota
}



