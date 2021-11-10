class Group {
    static from(array) {
      const newGroup = new Group();
      for(let i = 0; i < array.length; i++) {
        newGroup.add(array[i])
      }
      return newGroup;
    }
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
  
  let group = Group.from([10, 20]);
  console.log(group.has(10));
  // → true
  console.log(group.has(30));
  // → false
  group.add(10);
  group.delete(10);
  console.log(group.has(10));
  // → false