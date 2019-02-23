class Erase { 
    constructor(strokeSize, Colour) {
        this.strokeSize = strokeSize;
        this.Colour = Colour;
        this.name = "Erase";
        this.mX = mouseX;
        this.mY = mouseY;
    }

    display() {
        strokeCap(ROUND);
        strokeWeight(this.strokeSize);
        stroke(this.Colour);
        if(object != 0) {
            if (Layers.contents[eachLayer].item[object-1].name == "Erase") {
                line(this.mX, this.mY, Layers.contents[eachLayer].item[object-1].mX, Layers.contents[eachLayer].item[object-1].mY);
            }   
            
        }
    }
}