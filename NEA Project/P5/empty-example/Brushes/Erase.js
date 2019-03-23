class Erase extends Brush { 
    constructor(strokeSize, Colour, mouseXSave=0, mouseYSave=0) {
        if(mouseXSave == 0 && mouseYSave == 0 ) {
            super(strokeSize, "Erase", Colour);
        }
        else {
            super(strokeSize, "Erase", Colour, true, mouseXSave, mouseYSave)
        }
    }
}

