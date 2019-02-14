class Line {
    constructor(strokeSize, Colour) {
        this.strokeSize = strokeSize;
        this.Colour = Colour;
        this.name = "Line";
        this.mX = mouseX;
        this.mY = mouseY;
    }

    display() {
        stroke(this.Colour);
        if(objects != 0) {
            if (mainObjects[objects-1].name == "Line") {
                line(this.mX, this.mY, mainObjects[objects-1].mX, mainObjects[objects-1].mY);
            }   
            
        }
        
    }
}