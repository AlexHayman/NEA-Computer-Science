//Parent class for the brust

class Brush {
    constructor(strokeSize, name, Colour) {
        this.strokeSize = strokeSize;
        this.Colour = Colour;
        this.name = name;
        this.mX = mouseX;
        this.mY = mouseY;

    }

    display() {
        strokeCap(ROUND);
        strokeWeight(this.strokeSize);
        stroke(this.Colour);
        if(object != 0) { //creates a line between the last point and the mouse position
            if (Layers.contents[eachLayer].item[object-1].name == this.name) {
                line(this.mX, this.mY, Layers.contents[eachLayer].item[object-1].mX, Layers.contents[eachLayer].item[object-1].mY);
            }   
            
        }
    }
}



