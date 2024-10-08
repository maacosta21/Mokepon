let jugadorMascota
let pcMascota
let ataquePC
let ataqueJugador
let jugadorCounter = 3
let pcCounter = 3
let resultado
const max = 3
const min = 1

//Variables DOM

const botonMacostaJuagador = document.querySelector('#boton-mascota')
//Mascotas
const mascotaRatigueya = document.querySelector('#Ratigueya')
const mascotaHipodoge = document.querySelector('#Hipodoge')
const mascotaCapipepo = document.querySelector('#Capipepo')
//secciones
const sectionPet = document.querySelector('#Section-pet')
const sectionAttacks = document.querySelector('#section-attack')
const spanPlayerImage = document.querySelector('#Player-section')
const spanEnemyImage = document.querySelector('#Enemy-section')


sectionAttacks.style.display = 'none'

const sectionCombat = document.querySelector('#Combate')
sectionCombat.style.display = 'none'

//spans
const mascotaJugadorDom = document.querySelector('#PlayerPET')
const mascotaPcDom = document.querySelector('#PCPET')
const spanVidasJugador = document.querySelector('#vidas-jugador')
const spanVidasPC = document.querySelector('#vidas-pc')


//Fuego
const ataqueFuego = document.querySelector('#boton-fuego')
function fuego(){
    ataqueJugador = 'Fuego'
    ataqueAleatorioEnemigo()
}
ataqueFuego.addEventListener('click', fuego)
//Agua
const ataqueAgua = document.querySelector('#boton-agua')

function agua(){
    ataqueJugador = 'Agua'
    ataqueAleatorioEnemigo()
}

ataqueAgua.addEventListener('click', agua)

//Tierra
const ataqueTierra= document.querySelector('#boton-tierra')

function tierra(){
    ataqueJugador = 'Tierra'
    ataqueAleatorioEnemigo()
}

ataqueTierra.addEventListener('click', tierra)
//funtion Generate Pet pictures

function generatePictures(sujeto, section){
    if(sujeto == 'Hipodoge' ) {
        section.innerHTML = '<img src="./assets/mokepons_mokepon_hipodoge_attack.png" alt="Unable to load">'
    }else if(sujeto == 'Capipepo'){
        section.innerHTML = '<img src="./assets/mokepons_mokepon_capipepo_attack.png" alt="Unable to load">'
    }else if(sujeto == 'Ratigueya') {
        section.innerHTML = '<img src="./assets/mokepons_mokepon_ratigueya_attack.png" alt="Unable to load">'
    }
}

//Eleccion jugador
botonMacostaJuagador.addEventListener('click', eleccionJugador)
function eleccionJugador() {
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
    generatePictures(jugadorMascota, spanPlayerImage)  
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

    sectionPet.style.display = 'none'
    sectionAttacks.style.display = 'block'
    mascotaJugadorDom.innerHTML = jugadorMascota
    mascotaPcDom.innerHTML = pcMascota
    generatePictures(pcMascota, spanEnemyImage)
}

//Ataque enemigo
function ataqueAleatorioEnemigo() {
    let pcAleatorio = aleatorio(3,1)

    if(pcAleatorio == 1){
        ataquePC = 'Fuego'
    } else if(pcAleatorio == 2) {
        ataquePC = 'Agua'
    } else {
        ataquePC = 'Tierra'
    }
    sectionCombat.style.display = 'block'
    generarResultado()

}

//Resultado combate
const createResultadoJugador = document.querySelector('#tablero-jugador')
const createResultadoPC = document.querySelector('#tablero-enemigo')
const mesajeFinal = document.querySelector('#mensaje-final')

function generarResultado() {
    if(ataqueJugador == 'Fuego' && ataquePC == 'Tierra') {
        resultado = 'Ganaste'
        pcCounter--
    }else if (ataqueJugador == 'Agua' && ataquePC == 'Fuego'){
        resultado = 'Ganaste'
        pcCounter--
    }else if (ataqueJugador == 'Tierra' && ataquePC == 'Agua'){
        resultado = 'Ganaste'
        pcCounter--
    }else if (ataqueJugador == ataquePC){
        resultado = 'Empate'
    } else {
        resultado = 'perdiste'
        jugadorCounter--
    }

    //Resultado Jugador
    nuevoResultadoJugador = document.createElement('p')
    nuevoResultadoJugador.innerHTML = ataqueJugador
    createResultadoJugador.appendChild(nuevoResultadoJugador)
    //Resultado PC
    nuevoResultadoPC = document.createElement('p')
    nuevoResultadoPC.innerHTML = ataquePC
    createResultadoPC.appendChild(nuevoResultadoPC)
    //vidas
    spanVidasJugador.innerHTML = jugadorCounter
    spanVidasPC.innerHTML = pcCounter
    DisablePets()
}

function crearMensajeFinal() {
    if(jugadorCounter == 0){
        mesajeFinal.innerHTML = 'Perdiste'
    } else if (pcCounter == 0) {
        mesajeFinal.innerHTML = 'Ganaste'
    }
        
}


//Enable and disable Interface
function DisablePets() {
if(jugadorCounter == 0 || pcCounter == 0 ) {

    //buttons
    ataqueFuego.disabled = true
    ataqueAgua.disabled = true
    ataqueTierra.disabled = true
    //Sections
    botonReiniciar.style.display = 'block'
    sectionCombat.style.display = 'none'
    sectionAttacks.style.display = 'none'
}
crearMensajeFinal()
}

//Boton reiniciar
const botonReiniciar = document.querySelector('#boton-reiniciar')
botonReiniciar.addEventListener('click', reloadWindow)
function reloadWindow() {
    location.reload()
}
botonReiniciar.style.display = 'none'

