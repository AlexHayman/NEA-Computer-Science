//Parent class for the brust

class Brush {
    constructor(strokeSize, name, Colour, saved=false, mouseXPos=0, mouseYPos=0) {
        this.strokeSize = strokeSize;
        this.Colour = Colour;
        this.name = name;
        if(!saved) {
            this.mX = mouseX;
            this.mY = mouseY;
        }
        else {
            this.mX =  mouseXPos;
            this.mY = mouseYPos;
        }

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



