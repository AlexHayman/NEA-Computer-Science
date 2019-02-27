
var event, mainTool, objects, strokeColour, fillColour, backgroundColor, VisibleLayers, LayerCounter, Layers, currentLayer, previousTool, dragging;
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
    strokeSizeSlider = createSlider(0, 10, 5);
    strokeSizeSlider.position(1150, 20);
    shapeDefualtSize = 30;
    Layers = {
        contents: [],
        Visibility: [true]
    };
    Layers.contents.push(new Stack());
    LayerCounter = 2;
    currentLayer = 1;
    previousTool = "";
    frameRate(60);
    dragging = false;
}

function draw() {
    strokeSize = strokeSizeSlider.value();
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
    for(i=0; i < Layers.Visibility.length; i++)
        if(Layers.Visibility[i]) {
            Layers.contents[Layers.Visibility.length - 1].push(drawingMethod);
        }
}

function checkClick() {
    if ((0 < mouseX  && mouseX < width) && (0 < mouseY && mouseY < height)) {
        return true;
    }
    else if (dragging) {
        dragging = false;
        return true;
    }
  
    
    return false;
}

function addButton() {
    currentLayer += 1;
    Layers.Visibility.push(true);
    Layers.contents.push(new Stack());
    var output = '';
    output = '<div class="individualLayer">' +
        '<li>Layer ' + LayerCounter + '</li>' +
        '<button type="button" id="visibleButton' + LayerCounter + '" onclick="ToggleVisible(' + LayerCounter + ')">Visible</button>' +
        '</div>';
    LayerCounter += 1;
    document.getElementById('Layer').innerHTML += output;
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
            checkDraw(new Rectangle(5, strokeColour, fillColour, mouseX, mouseY)); //makes the shape bigger
        }
        if (currentTool === "Elipse") {
            checkDraw(new Elipse(5, strokeColour, fillColour, mouseX, mouseY));
        }
        if(currentTool === "PaintBucket") {
            FloodFill();
        }
    }
}



