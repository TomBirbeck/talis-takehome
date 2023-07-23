//
// This is only a SKELETON file for the 'Simple Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Element {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
}
}

export class List {
  constructor(arr) {
    this.head = null;
    if(arr){
      for (let i = 0; i < arr.length; i++) {
        this.add(new Element(arr[i]));
      }
    }
    }

  add(nextValue) {
    this.head = new Element(nextValue.value, this.head); 
  }

  get length() {
    let length = 0; 
    let node = this.head;
    while (node) {
        length++;
        node = node.next
    }
    return length;
  }

  toArray() {
    const arr = [];
    let current = this.head;
    while(current){
      arr.push(current.value);
      current = current.next
    }
    return arr
  }

  reverse() {
    const list = new List();
    let current = this.head;
    while(current){
      list.add(new Element(current.value));
      current = current.next
    }
    return list;
  }
}