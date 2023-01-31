let car = { ///Task 1
    type: 'electric',
    wheels: 4,
}

let sportCar = {
    doors: 2
}
Object.setPrototypeOf(sportCar, car);
console.log(sportCar);
console.log(sportCar.type);
console.log(Object.getPrototypeOf(sportCar) === car);

let passengerCar = Object.create(car)
passengerCar.doors = 4;
Object.setPrototypeOf(passengerCar, car);
console.log(passengerCar);
console.log(passengerCar.type);
console.log(passengerCar.wheels);
console.log(Object.getPrototypeOf(passengerCar) === car);

let toyCar = Object.create(sportCar)
toyCar.type = 'toy';
Object.setPrototypeOf(toyCar, sportCar);
console.log(toyCar);
console.log(toyCar.doors);
console.log(Object.getPrototypeOf(toyCar) === sportCar);

Object.create(car)
toyCar.type = 'toy';
Object.setPrototypeOf(toyCar, car);
console.log(toyCar);
console.log(toyCar.type);
console.log(toyCar.wheels);
console.log(Object.getPrototypeOf(toyCar) === car);


// let employees = { /? /Task 2
//     wallet: {},
//     pay(munth, sum) {
//         this.wallet[munth] = sum;
//     }
// }

// let frontendDeveloper = {
//     name: 'Mike',
// }
// Object.setPrototypeOf(frontendDeveloper, employees);
// frontendDeveloper.pay('june', 1300);

// let backendDeveloper = {
//     name: 'Bob',
// }
// Object.setPrototypeOf(backendDeveloper, employees);
// backendDeveloper.pay('june', 1500);


// console.log(backendDeveloper.wallet.june);
// console.log(frontendDeveloper.wallet.june);


// function User(name, age) { ///Task 3
//     this.name = name;
//     this.age = age;
// }

// let user_1 = new User('Mike', 18);
// let user_2 = new user_1.constructor('Bob', 25);
// console.log(user_1);
// console.log(user_2);


// function UserType(name) { //Task 4
//     for (let i = 0; i < name.length; ++i){
//         this[i] = name[i];
//         if (i + 1 == name.length) {
//             Object.defineProperty(this, 'length', {
//                 enumerable: true,
//                 writable: false,
//                 configurable: true,
//                 value: i + 1
//             });
//         }
//     }
// }

// let admins = new UserType(['Mike', 'Bob', 'Nikola']);
// UserType.prototype = admins;
// admins.join = Array.prototype.join;
// console.log(admins.join(';'));


