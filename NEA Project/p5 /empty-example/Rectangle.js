class Rectangle { 
    constructor(strokeSize, Colour, Fill, x, y) {
        this.name  = "Rectangle";
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
        rect(this.mX, this.mY, this.sizeX , this.sizeY);
        noFill();
        
            
    }

}
    

