class PaintBrush extends Brush { 
    constructor(strokeSize, Colour, mouseXSave=0, mouseYSave=0) {
        if(mouseXSave == 0 && mouseYSave == 0 ) {
            super(strokeSize, "PaintBrush", Colour);
        }
        else {
            super(strokeSize, "PaintBrush", Colour, true, mouseXSave, mouseYSave)
        }
    }
}

