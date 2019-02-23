class Brush { 
    constructor(strokeSize, Colour) {
        this.strokeSize = strokeSize;
        this.Colour = Colour;
        this.name = "Brush";
        this.mX = mouseX;
        this.mY = mouseY;
    }

    display() {
        strokeCap(ROUND);
        strokeWeight(this.strokeSize);
        stroke(this.Colour);
        if(object != 0) {
            if (Layers.contents[eachLayer].item[object-1].name == "Brush") {
                line(this.mX, this.mY, Layers.contents[eachLayer].item[object-1].mX, Layers.contents[eachLayer].item[object-1].mY);
            }   
            
        }
    }
}