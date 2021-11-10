class PGroup {
    constructor (members) {
        this.members = members;
    }
    add (value) {
      if (!this.has(value)) {
          return new PGroup(this.members.concat(value));
      }
    }
    delete (value) {
      if (this.has(value)) {
           return new PGroup(this.members.filter(item => item !== value));
      }
    }
    has (value) {
        return (this.members.includes(value) ? true : false);
    }
  }
  
  PGroup.empty = new PGroup([]);
  
  let a = PGroup.empty.add("a");
  let ab = a.add("b");
  let b = ab.delete("a");
  
  console.log(b.has("b"));
  // → true
  console.log(a.has("b"));
  // → false
  console.log(b.has("a"));
  // → false