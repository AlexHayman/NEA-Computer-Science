class Line {
    constructor(strokeSize, Colour) {
        this.strokeSize = strokeSize;
        this.Colour = Colour;
        this.name = "Line";
        this.mX = mouseX;
        this.mY = mouseY;
    }

    display() {
        strokeWeight(this.strokeSize);
        stroke(this.Colour);
        strokeCap(SQUARE);
        if(object != 0) {
            if (Layers.contents[eachLayer].item[object-1].name == "Line") {
                line(this.mX, this.mY, Layers.contents[eachLayer].item[object-1].mX, Layers.contents[eachLayer].item[object-1].mY);
            }   
            
        }
        
    }
}