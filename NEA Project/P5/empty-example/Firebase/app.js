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
    var name = prompt("Please enter a file name: "); //default file name if user gives nothing
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
    if(Layers.contents != null) { //Only writes the drawing from a layer to the database if there are drawings
        for(var i=0; i < Layers.contents.length; i++){
            objectList = [];
            for(var j=0; j < Layers.contents[i].item.length; j++) {
                if(typeof Layers.contents[i].item[j] === 'object') { //If it's an object
                    objectList = objectConverter(Layers.contents[i].item[j], objectList);
                }
                else {
                    objectList.push(Layers.contents[i].item[j]); //This is to add "Mouse Released"
                }
            }
            
            addingObject["contentField" + i] = objectList; //the i ensures each field is unique
        }      
    }
    db.collection('Canvases').add( //Process of adding it to the database
        addingObject  
    );
});