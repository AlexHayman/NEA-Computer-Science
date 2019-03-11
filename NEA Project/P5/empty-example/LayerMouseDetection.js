function LayerClickDetection() {
    for(var i=1; i < currentLayer + 1; i++) {
        var element = document.getElementById("LayerCounter" + i);
        element.addEventListener('click', Layer);
    }
       
        
}

function Layer() {
    document.getElementById("LayerCounter" + currentLayer).style.backgroundColor = "#33333C";
    currentLayer = parseInt(this.id.slice(-1));
    document.getElementById("LayerCounter" + currentLayer).style.backgroundColor = "#1d1d1d";
}