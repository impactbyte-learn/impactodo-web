function Employee(name, profession) {
  this.name = name;
  this.profession = profession;
}

const fuad = new Employee("Fuad Baskara", "Developer");

console.log(fuad);

// -----------------------------------------------------------------------------

class Boss {
  constructor(name, profession) {
    this.name = name;
    this.profession = profession;
  }
}

const dody = new Boss("Stefanus Dody", "Boss Besar");

console.log(dody);
