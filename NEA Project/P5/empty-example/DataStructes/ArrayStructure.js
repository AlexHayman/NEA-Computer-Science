//Class for an Array for functions. Used this for readability

class ArrayStructure  {
    
    constructor() {
        this.item = [];
    }

    push(element) {
        return this.item.push(element);
    }

    pop() {
        if(this.item.length == 0) {
            return "Underflow";
        }
        else {
            return this.item.pop();
        }
    }
    
    lastElement(number) {
        return this.item[this.item.length - number];
    }

    
}
