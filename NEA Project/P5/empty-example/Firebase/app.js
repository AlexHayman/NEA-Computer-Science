const form = document.querySelector('#Save');
var listLayer = [];


//Firebase doesnt like objects with mthod so converting to standalone objects without methods and storing tit
function objectConverter(Object, list) {
    toolObject = {};
    for(var i in Object) {
        toolObject[i]  = Object[i];   
    }
    list.push(toolObject);
    return list;
}



form.addEventListener('click', (e) => {
    //Pop up Box code
    var name = prompt("Please enter a file name: ");
    if (name == null || name == "") {
        name = "UnamedPieceOfWork";
    }
    var objectList;
    e.preventDefault(); 
    addingObject = { 
        NameField: name,
        CurrentLayerField: currentLayer,
        VisibilityField: Layers.Visibility
    };
    if(Layers.contents != null) {
        for(var i=0; i < Layers.contents.length; i++){
            objectList = [];
            for(var j=0; j < Layers.contents[i].item.length; j++) {
                if(typeof Layers.contents[i].item[j] === 'object') {
                    objectList = objectConverter(Layers.contents[i].item[j], objectList);
                }
                else {
                    objectList.push(Layers.contents[i].item[j]);
                }
            }
            
            addingObject["contentField" + i] = objectList;
        }      
    }
    db.collection('Canvases').add(
        addingObject  
    );
});