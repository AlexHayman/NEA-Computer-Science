class Rectangle { 
    constructor(strokeSize, Colour) {
        this.name  = "Rectangle";
        this.strokeSize = strokeSize;
        this.Colour = Colour;
        this.mX = mouseX;
        this.mY = mouseY;
        
    }
    
    display() {
        rect(this.mX, this.mY, -30, -30);
    }
    
}
