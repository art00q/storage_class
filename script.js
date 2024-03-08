class Storage {
  constructor(name) {
    this.name = name;
  }
// Returns value from given key
  get() {
    return localStorage.getItem(this.name);
  }
// Sets value for given key
  set(value) {
    localStorage.setItem(this.name, value);
  }
// Clears value for the key
  clear() {
    localStorage.removeItem(this.name);
  }
// Checks if the key has any value
  isEmpty() {
    return this.get() === undefined || this.get() === null;
  }
}

const names = new Storage('names');

console.log(names.get());
names.set('name');
console.log(names.get());
names.clear();
console.log(names.get());
console.log(names.isEmpty());
names.set('name');
console.log(names.isEmpty());