
var event, mainTool, mainObjects, objects, strokeColour, fillColour, backgroundColor;
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
    mainObjects = new Stack();
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
            mainObjects.item[objects].display();
        }
        catch(e) { 
            
        }
    }
    
}

function swapTool(tool) {
    currentTool = tool;
}


function mouseDragged() {
    if (currentTool === "Brush" ) {
        mainObjects.push(new Brush(strokeSize, strokeColour));
    } 
    if (currentTool === "Erase") {
        mainObjects.push(new Erase(strokeSize, backgroundColor));

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
        mainObjects.push("Mouse Released");
    }
    if(currentTool === "Rectangle") {
        mainObjects.push("Mouse Released");
    }
    if(currentTool === "Elipse") {
        mainObjects.push("Mouse Released");
    }
    if(currentTool === "Erase") {
        mainObjects.push("Mouse Released");
    }
}

function click() {
    console.log(strokeColour);
    if (currentTool === "Line" ) {
        mainObjects.push(new Line(strokeSize, strokeColour));
    }
    if (currentTool === "Rectangle" ) {
        mainObjects.push(new Rectangle(5, strokeColour, fillColour, mouseX, mouseY)); //makes the shape bigger
    }
    if (currentTool === "Elipse") {
        mainObjects.push(new Elipse(5, strokeColour, fillColour, mouseX, mouseY));
    }
    if(currentTool === "PaintBucket") {
        FloodFill();
    }
}



