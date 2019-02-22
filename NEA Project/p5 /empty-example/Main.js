
var event, mainTool, mainObjects, objects, strokeColour, fillColour, backgroundColor, Visible;
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
    Visible = true;
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
    mainObjects = new Stack();
    Layers = new Stack();
    strokeSizeSlider = createSlider(0, 10, 5);
    strokeSizeSlider.position(1150, 20);
    shapeDefualtSize = 30;
}

function draw() {
  
    strokeSize = strokeSizeSlider.value();
    background(255);
   
    updatePixels();

    for (objects=0; objects < mainObjects.item.length; objects++) { //displays all the things in the list
        try {
            if(Visible) {
                mainObjects.item[objects].display();
            }
        }
        catch(e) { 
            
        }
    }
    
}

function swapTool(tool) {
    currentTool = tool;
}

function ToggleVisible() {
    if(Visible) {
        Visible = false;
    }
    else {
        Visible = true;
    }
}

function checkDraw(drawingMethod) {
    if(Visible) {
    mainObjects.push(drawingMethod);
    }
}

function addButton() {
    var output = '';
    output = '<div class="individualLayer">' +
        '<li>Layers</li>' +
        '<button type="button" onclick="ToggleVisible()">Visible</button>' +
        '</div>';
    document.getElementById('Layer').innerHTML += output;
}


function mouseDragged() {
    if (currentTool === "Brush" ) {
        checkDraw(new Brush(strokeSize, strokeColour));
    } 
    if (currentTool === "Erase") {
        checkDraw(new Erase(strokeSize, backgroundColor));

    }
    if (currentTool === "Rectangle" || currentTool === "Elipse" ) {
        try {
            if(mainObjects.item[mainObjects.item.length -1])
            mainObjects.item[mainObjects.item.length -1].drag();
        }
        catch(e) {

        }
    }
}

function mouseReleased() {
    if(currentTool === "Brush") {
        checkDraw("Mouse Released");
    }
    if(currentTool === "Rectangle") {
        checkDraw("Mouse Released");
    }
    if(currentTool === "Elipse") {
        checkDraw("Mouse Released");
    }
    if(currentTool === "Erase") {
        checkDraw("Mouse Released");
    }
}

function click() {
    console.log(strokeColour);
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



