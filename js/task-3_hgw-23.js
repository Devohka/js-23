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