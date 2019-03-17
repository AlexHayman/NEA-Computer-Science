const form = document.querySelector('#Save');
var listLayer = [];



function objectConverter(Object, list) {
    toolObject = {}
    for(i in Object) {
        toolObject[i]  = Object[i];   
    }
    list.push(toolObject)
    return list
}

form.addEventListener('click', (e) => {
    var objectList 
    e.preventDefault(); 
    addingObject = { 
        CurrentLayerField: currentLayer,
        VisibilityField: Layers.Visibility
    }
    for(var i=0; i < Layers.contents.length; i++){
        objectList = []
        for(var j=0; j < Layers.contents[i].item.length; j++) {
            if(typeof Layers.contents[i].item[j] === 'object') {
                objectList = objectConverter(Layers.contents[i].item[j], objectList)
            }
            else {
                objectList.push(Layers.contents[i].item[j])
            }
        }
        addingObject["contentField" + i] = objectList;
    }      
     db.collection('Canvases').add(
         addingObject  
     );
});