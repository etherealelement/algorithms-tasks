// Singleton (Порождающий паттерн)
// Singleton -

// нужен каждый раз в когда в системе должен быть объект в едином экземпляре и к которому может быть доступ из разных частей программы


// 1 вариант
let instance;
class Counter {
    constructor() {
        if(!instance) instance = this;
        return instance;
    }
    getCount() {
        return instance.count
    }
    increaseCount() {
        return instance.count++
    }
}
const myCount1 = new Counter();
const myCount2 = new Counter();
myCount1.increaseCount();
myCount1.increaseCount();
myCount2.increaseCount();
myCount2.increaseCount();
console.log(myCount2.getCount()) // 4
console.log(myCount1.getCount()) // 4;

// не смотря на то что у нас 2 разных объектов они все ссылаются на 1 и изменяют его 4 раза;
// теперь любой объект созданный с помощью конструктора counter будет получать ссылку на инстанс а не создавать каждый раз новый инстанc;

// -----

// Фабричный метод
// нужен тогда когда нужно создавать много однотипных объектов, объектов с одиноковой структурой но разными данными

class Bmw {
    constructor(model, price, maxSpeed) {
        this.model = model;
        this.price = price;
        this.maxSpeed = maxSpeed;
    }
}

class BmwFactory {
    create(type) {
        if (type === "X5") {
            return new Bmw(type, 10700, 300);
        }
        if (type === "X6") return new Bmw(type, 10600, 300)
    }
}

const factory = new BmwFactory();
const x5 = factory.create("X5");

// Prototype это паттерн позволяющий копировать объекты не вдаваясь в подробности их реализации.

class TeslaCar {
    constructor(model, price, interior, autopilot) {
        this.model = model;
        this.price = price;
        this.interior = interior;
        this.autopilot = autopilot;
    }

    produce() {
        return new TeslaCar(this.model,this.price,this.interior,this.autopilot)
    }
}

// Базовая документация

const prototypeCar = new TeslaCar("S",80000, "black", true);

// Клоны
const car1 = prototypeCar.produce();
const car2 = prototypeCar.produce();
const car3 = prototypeCar.produce();

// изменяем объект
car1.interior = "white"

