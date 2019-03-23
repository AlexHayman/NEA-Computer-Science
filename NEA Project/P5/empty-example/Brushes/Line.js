class Line extends Brush { 
    constructor(strokeSize, Colour, mouseXSave=0, mouseYSave=0) {
        if(mouseXSave == 0 && mouseYSave == 0 ) {
            super(strokeSize, "Line", Colour);
        }
        else {
            super(strokeSize, "Line", Colour, true, mouseXSave, mouseYSave)
        }
    }
}

//