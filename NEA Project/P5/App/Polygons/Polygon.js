class Polygon { 
    constructor(strokeSize, Colour, Fill, x, y, name, sizeXSave=0, sizeYSave=0) {
        this.name  = name;
        this.strokeSize = strokeSize;
        this.Colour = Colour;
        this.Fill = Fill;
        this.mX = x;
        this.mY = y;
        this.sizeX = sizeXSave;
        this.sizeY = sizeYSave;
    }
    
    drag() {
        this.sizeX =  mouseX - this.mX;
        this.sizeY = mouseY - this.mY;
    }
    
    display() {
        fill(this.Fill);    //Sets settings of the stroke and fill before drawing
        stroke(this.Colour);
        strokeWeight(this.strokeSize);
        if(this.name === "Elipse") {
            ellipse(this.mX, this.mY, this.sizeX * 2.75, this.sizeY * 2.75); //Changing sizeX and sizeY changes the shape size
        }
        if(this.name === "Rectangle") {
            rect(this.mX, this.mY, this.sizeX , this.sizeY);
        }
            
    }
}
    