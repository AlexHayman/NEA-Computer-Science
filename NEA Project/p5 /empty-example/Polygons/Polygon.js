class Polygon { 
    constructor(strokeSize, Colour, Fill, x, y, name) {
        this.name  = name;
        this.strokeSize = strokeSize;
        this.Colour = Colour;
        this.Fill = Fill;
        this.mX = x;
        this.mY = y;
        this.sizeX = 0;
        this.sizeY = 0;
    }
    
    drag() {
        this.sizeX =  mouseX - this.mX;
        this.sizeY = mouseY - this.mY;
    }
    
    display() {
        fill(this.Fill);
        stroke(this.Colour);
        strokeWeight(this.strokeSize);
        if(this.name === "Elipse") {
            ellipse(this.mX, this.mY, this.sizeX * 2.75, this.sizeY * 2.75);
        }
        if(this.name === "Rectangle") {
            rect(this.mX, this.mY, this.sizeX , this.sizeY);
        }
            
    }
}
    