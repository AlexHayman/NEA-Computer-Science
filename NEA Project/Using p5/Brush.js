class Brush {
    constructor(strokeSize, Colour) {
        this.strokeSize = strokeSize;
        this.Colour = Colour;
        this.name = "Brush";
        this.mX = mouseX;
        this.mY = mouseY;
    }

    display() {
        console.log(this.strokeSize);
        stokeweight(this.strokeSize);
        stroke(this.Colour);
        if(objects != 0) {
            if (mainObjects[objects-1].name == "Brush") {
                line(this.mX, this.mY, mainObjects[objects-1].mX, mainObjects[objects-1].mY);
            }   
            
        }
    }
}