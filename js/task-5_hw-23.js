// Напиши клас Car із зазначеними властивостями і методами.
class Car {
    /*
    * Додай статичний метод `getSpecs(car)`,
    * який приймає об'єкт-машину як параметр і виводить
    * в консоль значення властивостей maxSpeed, speed, isOn, distance и price.
    */
    /*
    * Конструктор отримує об'єкт налаштувань.
    *
    * Додай властивості майбутнього екземпляра класу:
    * speed - поточна швидкість, початкова 0
    * price - ціна автомобіля
    * maxSpeed - максимальна швидкість
    * isOn - заведений автомобіль, значення true або false. Спочатку false
    * distance - загальний кілометраж, спочатку 0
    */
    constructor({ maxSpeed, price }) {
        this.carMaxSpeed = maxSpeed;
        this.carPrice = price;
    };
    getSpecs(car) {
        return this.maxSpeed, this.value, this.isOn, this.distance, this.price, car;
    };

    /*
    * Додай геттер і сеттер для властивості price,
    * який буде працювати з властивістю ціни автомобіля.
    */
    /*
    * Додай код для того, щоб завести автомобіль
    * Записує у властивість isOn значення true
    */
    turnOn() {
        this.isOn === "true";
    };
    /*
    * Додай код для того, щоб заглушити автомобіль
    * Записує у властивість isOn значення false,
    * і скидає поточну швидкість в 0
    */
    turnOff() {
        this.isOn === "false";
    };
    /*
    * Додає до властивості speed отримане значення,
    * за умови, що результуюча швидкість
    * не більше, ніж значення властивості maxSpeed
    */
    accelerate({ value }) {
        if (this.value === this.maxSpeed || this.value < this.maxSpeed && this.value > 0) {
            return this.value;
        }
    };
    /*
    * Забирає від властивості speed отримане значення,
    * за умови, що результуюча швидкість не менше нуля
    */
    decelerate({ value }) {
        return this.value;
    };
    /*
    * Додає в поле distance кілометраж (hours * speed),
    * але тільки в тому випадку, якщо машина заведена!
    */
    drive(hours) {
        if (this.isOn === "true") {
            return hours * this.value;
        } else {
            return "заведіть автомобіль";
        };
    };
};
const mustang = new Car({ maxSpeed: 200, price: 2000 });
mustang.turnOn();
mustang.accelerate({ value: 50 });
mustang.drive(2);
mustang.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000
mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();
mustang.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000
console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000