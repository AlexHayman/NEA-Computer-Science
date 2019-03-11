
var event, mainTool, objects, strokeColour, fillColour, backgroundColor, VisibleLayers, Layers, previousTool, dragging, activeLayer, redoStack  ;
window.addEventListener("load", startUp, false);



function startUp() {
    strokeColour = "#000000";
    fillColour = '#000000';
    backgroundColor = '#ffffff';
    strokeColourWeb = document.querySelector("#strokeColour");
    strokeColourWeb.value = "#000000";
    strokeColourWeb.addEventListener("input", updateStroke, false);
    fillColourWeb = document.querySelector("#fillColour");
    fillColourWeb.value = "#000000";
    fillColourWeb.addEventListener("input", updateFill, false);
    strokeColourWeb.select();
    fillColourWeb.select();
    var element = document.getElementById("LayerCounter1");
    element.addEventListener('click', Layer);
    document.getElementById("LayerCounter" + activeLayer).style.backgroundColor = "#1d1d1d";
}

function updateStroke(event) {
    strokeColour = event.target.value;
}


function updateFill(event) {
    fillColour = event.target.value;
 }

function setup() {
    var canvas = createCanvas(1000, 700);
    canvas.parent('canvas');
    currentTool = "brush";
    canvas.mousePressed(click);
    strokeSizeSlider = createSlider(0, 15, 5);
    strokeSizeSlider.position(1150, 100);
    shapeDefualtSize = 30;
    Layers = {
        contents: [],
        Visibility: [true]
    };
    Layers.contents.push(new ArrayStructure());
    currentLayer = 1;
    previousTool = "";
    frameRate(60);
    dragging = false;
    activeLayer = 1;
}

function clearCanvas() {
    output = '<div id="LayerCounter' + currentLayer + '" class="individualLayer">' +
            '<li>Layer ' + currentLayer + '</li>' +
            '<button type="button" id="visibleButton' + currentLayer + '" onclick="ToggleVisible(' + currentLayer + ')">Visible</button>' +
            '</div>';
    for(var i=currentLayer; i >  1; i--) {
        document.getElementById('LayerCounter' + i).outerHTML = "";
    
    }  //Get Rid of all the Layers
    currentLayer = 1;
    Layers = {
        contents: [],
        Visibility: [true]
    };
    Layers.contents.push(new ArrayStructure());
    activeLayer = 1;
    document.getElementById("LayerCounter" + activeLayer).style.backgroundColor = "#1d1d1d"; //Reset Layers and content
}


function draw() {
    strokeSize = strokeSizeSlider.value();
    document.getElementById("strokeSize").innerHTML = strokeSize;
    background(255);

    for (eachLayer=0; eachLayer < Layers.contents.length; eachLayer++) { //displays all the things in the list
        for(object=0; object < Layers.contents[eachLayer].item.length; object++) {
            try {
                if(Layers.Visibility[eachLayer]) {
                
                    if (Layers.contents[eachLayer].item[object].name === "Pencil") {
                     
   
                    }
                    else {
                        Layers.contents[eachLayer].item[object].display();
                    }       
                    
                }
            }
            catch(err) {    

            }
            
        }
    }
}

function swapTool(tool) {
    currentTool = tool;
    if(previousTool != "") {
        document.getElementById(previousTool).style.background = "#33333C";
    }
    document.getElementById(tool).style.background = "#1d1d1d";
    previousTool = tool;
}

function ToggleVisible(number) {
    console.log("visibleButton" + number);
    if(Layers.Visibility[number - 1]) {
        Layers.Visibility[number-1] = false;
        document.getElementById("visibleButton" + number).innerHTML = "NotVisible";
    }
    else {
        Layers.Visibility[number - 1] = true;
        document.getElementById("visibleButton" + number).innerHTML = "Visible";

    }


}

function checkDraw(drawingMethod) {
    if(Layers.Visibility[currentLayer - 1]) {
            Layers.contents[currentLayer - 1].push(drawingMethod);
        }
}

function checkClick() {
    if ((0 < mouseX  && mouseX < width) && (0 < mouseY && mouseY < height) && dragging != true) {
        return true;
    }
    else if (dragging) {
        dragging = false;
        return true;
    }
    return false;
}

function addButton() {
    if (currentLayer != 9) {
        currentLayer += 1;
        Layers.Visibility.push(true);
        Layers.contents.push(new ArrayStructure());
        var output = '';
        output = '<div id="LayerCounter' + currentLayer+ '" class="individualLayer">' +
            '<li>Layer ' + currentLayer + '</li>' +
            '<button type="button" id="visibleButton' + currentLayer + '" onclick="ToggleVisible(' + currentLayer + ')">Visible</button>' +
            '</div>';
        document.getElementById('Layer').innerHTML += output;
        document.getElementById("LayerCounter" + activeLayer).style.backgroundColor = "#33333C";  //Switches Active of Layer
        activeLayer = currentLayer;
        document.getElementById("LayerCounter" + currentLayer).style.backgroundColor = "#1d1d1d";

    }
    LayerClickDetection();
}


function mouseDragged() {
    if(checkClick()) {
        dragging = true;
        if (currentTool === "PaintBrush" ) {
            checkDraw(new PaintBrush(strokeSize, strokeColour));
          
        } 
        if (currentTool === "Erase") {
            checkDraw(new Erase(strokeSize, backgroundColor));

        }
        if (currentTool === "Rectangle" || currentTool === "Elipse" ) {
            
            Layers.contents[currentLayer-1].item[Layers.contents[currentLayer-1].item.length -1].drag();
            
            
        }
    }
}

function mouseReleased() {
    if(checkClick()) {
        if(currentTool === "Erase") {
            checkDraw("Mouse Released");
        }
        if(currentTool === "PaintBrush") {
            checkDraw("Mouse Released");
        }
        if(currentTool === "Rectangle") {
            checkDraw("Mouse Released");
        }
        if(currentTool === "Elipse") {
            checkDraw("Mouse Released");
        }
    }
}

function click() {
    if(checkClick()) {
        if (currentTool === "Line" ) {
            checkDraw(new Line(strokeSize, strokeColour));
        }
        if (currentTool === "Rectangle" ) {
            checkDraw(new Rectangle(strokeSize, strokeColour, fillColour, mouseX, mouseY)); //makes the shape bigger
        }
        if (currentTool === "Elipse") {
            checkDraw(new Elipse(strokeSize, strokeColour, fillColour, mouseX, mouseY));
        }
      
    }
}

function undo() {
    var isLine = false;
  if(Layers.Visibility[currentLayer - 1]) {
        if( Layers.contents[currentLayer - 1].item.length != 0) {
            if (Layers.contents[currentLayer - 1].item.length >= 3) {
                if(Layers.contents[currentLayer-1].lastElement(1).name === "Line" && Layers.contents[currentLayer-1].lastElement(2).name === "Line" && Layers.contents[currentLayer-1].lastElement(3).name != "Line") {
                    isLine = true;
                }
            }
            else {
                isLine = true;
            }
            Layers.contents[currentLayer - 1].pop();
        }
        else {
            isEmpty = true;
        }
        if(isLine) {
            Layers.contents[currentLayer - 1].pop();
        }
         while ((Layers.contents[currentLayer-1].lastElement(1) != "Mouse Released")  && Layers.contents[currentLayer - 1].item.length > 0) {
            if(Layers.contents[currentLayer-1].lastElement(1).name === "Line" ) {
                break;
            }
            Layers.contents[currentLayer - 1].pop();
        }
    }
}

