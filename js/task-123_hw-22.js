// 1

// class Account {

//     constructor({ login, email }) {
//         this.logiN = login;
//         this.emaiL = email;
//     }
//     getInfo() {
//         return `${this.login} ${this.email}`;
//     };

// };

// const mango = new Account({
//     login: 'Mangozedog',
//     email: 'mango@dog.woof',
// });
// mango.getInfo(mango.login, mango.email); // Login: Mangozedog, Email: mango@dog.woof
// console.log(mango);

// const poly = new Account({
//     login: "Poly",
//     email: "poly@mail.com",
// });
// getInfo(poly.login, poly.email);
// poly.getInfo(); // Login: Poly, Email: poly@mail.com
// console.log(poly);

// 2

// class User {
//     constructor(name, age, followers) {
//     this.nameUser = name;
//     this.ageUser = age;
//     this.followersUser = followers;
// };
//     getInfo() {
//         return `User ${name} is ${age} years old and has ${followers} followers`;
//     };
// };

// const mango = new User({
//     name: 'Mango',
//     age: 2,
//     followers: 20,
// });

// mango.getInfo(); // User Mango is 2 years old and has 20 followers
// const poly = new User({
//     name: 'Poly',
//     age: 3,
//     followers: 17,
// });

// poly.getInfo(); // User Poly is 3 years old and has 17 followers

// 3

// class Storage {
//     constructor(items) {
//         this.items = items;
//     };

//     getItems() {
//         return this.items;
//     };;

//     addItem(item) {
//         this.items.push(item);
//         return this.items;
//     };

//     removeItem(item) {
//         const index = this.items.indexOf(item);
//         if (index !== -1) {
//             this.items.splice(index, 1);
//         };
//     };
// };

// const storage = new Storage([
//     'Нанітоіди',
//     'Пролонгер',
//     'Залізні жупи',
//     'Антигравітатор',
//     ]);

//     const items = storage.getItems();
//     console.log(items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор" ]
//     storage.addItem('Дроїд');
//     console.log(storage.items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор", "Дроїд" ]
//     storage.removeItem('Пролонгер');
//     console.log(storage.items); // [ "Нанітоіди", "Залізні жупи", "Антигравітатор", "Дроїд" ]