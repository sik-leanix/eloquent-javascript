class Group {
    static from(array) {
      const newGroup = new Group();
      for(let i = 0; i < array.length; i++) {
        newGroup.add(array[i])
      }
      return newGroup;
    }
    [Symbol.iterator]() {
      return new GroupIterator(this);
    };
    constructor() {
      this.values = [];
    }
    add(value) {
      if (!this.has(value)) {
        this.values.push(value);
      }
    }
    
    has(value) {
      return (this.values.includes(value) ? true : false);
    }

    delete(value){
      if (this.has(value)) {
        this.values = this.values.filter(item => item !== value)
    }
  }
  }
  
  class GroupIterator {
    constructor(object){
      this.i = 0;
      this.array = object.values;
    }

    next() {
      if (this.i == this.array.length) return {done: true};
  
      let value = this.array[this.i];
      this.i++;
      return {value, done: false};
    }
  }
  
  
  for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
  }
  // → a
  // → b
  // → c