var Peer = require('simple-peer');
var peer = new Peer({
    initiator: location.hash === '#init',
    trickle: false
});

peer.on('signal', function(data){
    document.getElementById('TuId').value = JSON.stringify(data)
});

document.getElementById('connect').addEventListener('click', function(){
    var OtroId = JSON.parse(document.getElementById('OtroId').value)
    peer.signal(OtroId)
})

document.getElementById('enviar').addEventListener('click', function(){
    var tumensaje = document.getElementById('tumensaje').value
    peer.send(tumensaje)
})

peer.on('data', function(data){
    document.getElementById('mensajes').textContent += data + '\n'
})

console.log("Servidor iniciado...");