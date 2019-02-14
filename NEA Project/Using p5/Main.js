var event, mainColour, mainTool, mainObjects, objects;

function setup() {
    var canvas = createCanvas(800, 600);
    mainColour = "black";
    currentTool = "brush";
    canvas.mousePressed(click);
    mainObjects = [];
    strokeSizeSlider = createSlider(0, 10, 5);
    strokeSizeSlider.position(10, 10);
}

function draw() {
    strokeSize = strokeSizeSlider.value()
    for (objects=0; objects < mainObjects.length; objects++) {
        try {
            mainObjects[objects].display();
        }
        catch(e) {
            
        }
    }
}


function swapTool(tool) {
    currentTool = tool;
}

function changeColour(colour) {
    mainColour = colour;

}

function mouseDragged() {
    if (currentTool === "Brush" ) {
        mainObjects.push(new Brush(strokeSize, mainColour));
    }

}

function mouseReleased() {
    if(currentTool === "Brush") {
        mainObjects.push("Mouse Released");
    }
}

function click() {
    if (currentTool === "Line" ) {
        print(mainObjects)
        mainObjects.push(new Line(strokeSize, mainColour));
    }
    if (currentTool === "Rectangle" ) {
        mainObjects.push(new Rectangle(5, mainColour));
    }
}



