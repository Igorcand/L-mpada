const turnOn = document.getElementById( 'turnOn' )
const turnOff = document.getElementById( 'turnOff' )
const lamp = document.getElementById( 'lamp' )


function isLampbroken(){
    return lamp.src.indexOf('quebrada') > -1
}
function lampBroken(){
     lamp.src = '../Desafio lâmpada/img/quebrada.jpg'
}

function lampOn(){
    if(!isLampbroken()){
        lamp.src = '../Desafio lâmpada/img/ligada.jpg'
    }
}

function lampOff(){
    if(!isLampbroken()){
        lamp.src = '../Desafio lâmpada/img/desligada.jpg'
    }
}

turnOn.addEventListener('click', lampOn)
turnOff.addEventListener('click', lampOff)
lamp.addEventListener('mouseover', lampOn)
lamp.addEventListener('mouseleave', lampOff)
lamp.addEventListener('dblclick', lampBroken)