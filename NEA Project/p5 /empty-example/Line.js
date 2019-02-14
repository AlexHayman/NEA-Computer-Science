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
        if(objects != 0) {
            if (mainObjects.item[objects-1].name == "Line") {
                line(this.mX, this.mY, mainObjects.item[objects-1].mX, mainObjects.item[objects-1].mY);
            }   
            
        }
        
    }
}