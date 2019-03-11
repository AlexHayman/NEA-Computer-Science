class ModifiedStack  {

    constructor(Length) {
        this.item = [];
        this.length = Length;
    }

    push(element) {
        return this.item.push(element);
    }

    pop() {
        if(this.item.length === 0) {
            return "Underflow";
        }
        else {
            return this.item.pop();
        }
    }

    peek() {
        return this.item[this.item.length - 1];
    }

    isEmpty() {
        return this.item.length === 0;
    }

    isFull() {
        return this.item.length >= this.length;
    }

    removeBottom() {
        return this.item.splice(0, 1);
    }
    
}
