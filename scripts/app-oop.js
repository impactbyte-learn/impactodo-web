class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age || 1;
  }
  walk() {
    console.log(`${this.name} is walking`);
  }
  run() {
    console.log(`${this.name} is running`);
  }
}

class Employee extends Human {
  constructor(name, age, profession, salary) {
    super(name, age);
    this.profession = profession;
    this.salary = salary;
  }
}

class Boss extends Human {
  constructor(name, age, power, income) {
    super(name, age);
    this.power = power;
    this.income = income;
  }
}

const haidar = new Human("Haidar", 24);
const yanuar = new Employee("Yanuar", 71, "Developer", 10000);
const dody = new Boss("Dody", 31, "Goreng Gorengan", 123456789);

console.log(haidar);
console.log(yanuar);
console.log(dody);

haidar.run();
yanuar.walk();
dody.run();
