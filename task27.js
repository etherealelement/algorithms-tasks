// Prototype
// порождающий паттерн мы должны создавать объекты без внедрения в базовый класс, мы создаем клоны которые уже будем затачивать
// под разные задачи
class TeslaCar {
    constructor(model,price,interior, autopilot) {
        this.model = model;
        this.price = price;
        this.interior = interior;
        this.autopilot = autopilot;
    }
    produce() {
        return new TeslaCar(this.model,this.price, this.interior, this.autopilot)
    }
}

// Создаем базовый прототип  класса
const prototypeCar = new TeslaCar("S",80000,"black", true);
// Создаем клонов которых будем изменять
const car1 = prototypeCar.produce();
const car2 = prototypeCar.produce();
const car3 = prototypeCar.produce();
// Изменяем клон без внедрения в логику базового класса
car1.interior = "white"


// Builder
// Используется для создания объектов со сложными состояниями может иметь доп слой абстрации "Директор" который управляет строителями

// базовый случай
class Car {
    constructor() {
        this.autoPulot = false;
        this.parktron = false;
        this.signaling = false;
    }
}
// строитель
class CarBuilder {
    constructor() {
        this.car = new Car();
    }
    addAutoPilot(autoPilot) {
        this.car.autoPulot = autoPilot;
        return this;
    }
    addParktronic(parktronic) {
        this.car.parktronic = parktronic;
        return this;
    }
    addSignaling(signaling) {
        this.car.signaling = signaling;
        return this;
    }
    updateEngine(engine) {
        this.car.engine = engine;
        return this;
    }
    build() {
        return this.car;
    }
}

const myCar = new CarBuilder().addAutoPilot(true).addParktronic(true).updateEngine("V8").build();

// Decorator

// C помощью данного класса мы можем добавлять в объект новые свойства и методы и расширять его возможности


class Car {
    constructor() {
        this.price = 10000;
        this.model = "Car";
    }
    getPrice() {
        return this.price;
    }
    getDescription() {
        return this.model;
    }
}

class Audi extends Car {
    constructor() {
        super();
        this.price = 250000;
        this.model = "Audi";
    }
}

class AutoPilot { // декоратор который дополняет базовый класс
    constructor(car) {
        this.car = car;
    }
    getPrice() {
        return this.car.getPrice() + 5000;
    }
    getDescription() {
        return `${this.car.getDescription()} with autopilot`
    }
}

let audi = new Audi();
audi = new AutoPilot(audi);


// Фасад
// Задача собрать сложные структуры их объеденить и выдать простой способ манипуляции, спрятать сложные детали реализации внутри себя, а ну ружу выдавать простой и понятный интерфейс взаимодействия

class  Conveyor {
    setBody() {}
    getEngine() {}
    // ...
}

class ConceyorFacade {
    constructor(car) {
        this.car = car;
    }
    assembleCar() {
        this.car.setBody();
        this.car.getEngine()
    }
}

const conceyorFacade = new ConceyorFacade(new Conveyor());
console.log(conceyorFacade.assembleCar())


// Observer
// Поведенческий паттерн проектирования который создает механизм подписки который позволяет подписаться на элементы и следить за их изменениями

class AutoNews {
    constructor() {
        this.news = '';
        this.actions = [];
    }
    setNews(text) {
        this.news = text;
        this.notifyAll();
    }
    notifyAll() {
        return this.actions.forEach(subs => subs.inform(this));
    }
    register(observer) {
        this.actions.push(observer);
    }
    unregister(observer) {
        this.actions = this.actions.filter(el => !(el instanceof observer))
    }
}

class Jack {
    inform(message) {
        console.log(message.new)}
}
class Max {
    inform(message) {
        console.log(message.news)
    }
}

const autoNews = new AutoNews();
autoNews.register(new Jack());
autoNews.register(new Max());
autoNews.setNews("New Tesla price 400000");

// State

// Поведенческий паттерн который меняет объектам поведение в зависимости от состояния

class OrderStatus {
    constructor(name, nextStatus) {
        this.name = name;
        this.nextStatus = nextStatus;
    }   
    next() {
        return new this.nextStatus();
    }
}

// на основании этого класса создадим шаги доставки

class WaitingForPayment extends OrderStatus {
    constructor() {
        super('waitingForPayment', Shipping)
    }
}

class Shipping extends OrderStatus {
    constructor() {
        super("shipping", Delivered);
    }
}

class Delivered extends OrderStatus {
    constructor() {
        super("delivered", Delivered)
    }
}

class Order {
    constructor() {
        this.state = new WaitingForPayment();
    }
    nextState() {
        this.state = this.state.next();
    }
}

const myOrder = new Order();

console.log(myOrder.state.name);
myOrder.nextState();
console.log(console.log(myOrder.state.name));