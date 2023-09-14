// 1

class Account {

    constructor({ login, email }) {
        this.logiN = login;
        this.emaiL = email;
    }
    getInfo() {
        return `${this.login} ${this.email}`;
    };

};

const mango = new Account({
    login: 'Mangozedog',
    email: 'mango@dog.woof',
});
mango.getInfo(mango.login, mango.email); // Login: Mangozedog, Email: mango@dog.woof
console.log(mango);

const poly = new Account({
    login: "Poly",
    email: "poly@mail.com",
});
poly.getInfo(poly.login, poly.email);// Login: Poly, Email: poly@mail.com
 
console.log(poly);

