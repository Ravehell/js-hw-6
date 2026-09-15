// class BankAccount {
//     #balance
//     constructor(initialBalance) {
//         this.#balance = initialBalance
//     }
//     getBalance() {
//         return this.#balance
//     }
//     deposit(amount) {
//         this.#balance = this.#balance + amount
//     }
//     withdraw(amount) {
//         this.#balance = this.#balance - amount
//     }
//     getStatus() {
//         if (this.#balance >= 0) {
//             return "Positive"
//         } else {
//             return "Negative"
//         }
//     }
// }

// const account = new BankAccount(1000);

// console.log(account.getBalance()); // 1000

// account.deposit(500);
// console.log(account.getBalance()); // 1500

// account.withdraw(700);
// console.log(account.getBalance()); // 800

// console.log(account.getStatus()); // "Positive"

// account.withdraw(1000);
// console.log(account.getStatus()); // "Negative"


// class ShoppingCart {
//     #items
//     constructor(items) {
//         this.#items = items
//     }
//     getItems() {
//         return this.#items
//     }
//     addItem(item) {
//         this.#items.push(item)
//     }
//     removeItem(itemName) {
//         this.#items = this.#items.filter(item => item.name !== itemName)
//     }
//     getTotalPrice() {
//         return this.#items.reduce((total, item) => total + item.price, 0)
//     }

// }

// const cart = new ShoppingCart([
//     { name: "Phone", price: 1000 },
//     { name: "Headphones", price: 200 },
// ]);

// console.log(cart.getItems());
// // [{ name: "Phone", price: 1000 }, { name: "Headphones", price: 200 }]

// console.log(cart.getTotalPrice()); // 1200

// cart.addItem({ name: "Mouse", price: 100 });

// console.log(cart.getTotalPrice()); // 1300

// cart.removeItem("Phone");

// console.log(cart.getTotalPrice()); // 300


// class User {
//     #username
//     #email
//     constructor(username, email) {
//         this.#username = username
//         this.#email = email
//     }
//     getUsername() {
//         return this.#username
//     }
//     getEmail() {
//         return this.#email
//     }
//     changeUsername(newUsername) {
//         this.#username = newUsername
//     }
//     changeEmail(newEmail) {
//         this.#email = newEmail
//     }
//     getInfo() {
//         return `Username: ${this.#username}, Email: ${this.#email}`
//     }
// }


// const user = new User("Mango", "mango@gmail.com");

// console.log(user.getUsername()); // "Mango"
// console.log(user.getEmail()); // "mango@gmail.com"

// user.changeUsername("Poly");
// user.changeEmail("poly@gmail.com");

// console.log(user.getUsername()); // "Poly"
// console.log(user.getEmail()); // "poly@gmail.com"

// console.log(user.getInfo());
// // "Username: Poly, Email: poly@gmail.com"


// class PhoneBook {
//     #contacts
//     constructor(contacts) {
//         this.#contacts = contacts
//     }
//     getContacts() {
//         return this.#contacts
//     }
//     addContact(contact) {
//         this.#contacts.push(contact)
//     }
//     removeContact(name) {
//         this.#contacts = this.#contacts.filter(contact => contact.name !== name)
//     }
//     findContact(name) {
//         return this.#contacts.find(contact => contact.name === name)
//     }
// }


// const phoneBook = new PhoneBook([
//     { name: "Alex", phone: "123456789" },
//     { name: "John", phone: "987654321" },
// ]);

// console.log(phoneBook.getContacts());

// phoneBook.addContact({
//     name: "Kate",
//     phone: "555555555",
// });

// console.log(phoneBook.findContact("Kate"));
// // { name: "Kate", phone: "555555555" }

// phoneBook.removeContact("John");

// console.log(phoneBook.getContacts());
// // Alex, Kate


// class Counter {
//     #value
//     constructor(initialValue) {
//         this.#value = initialValue
//         this.initialValue = initialValue
//     }
//     getValue() {
//         return this.#value
//     }
//     increment() {
//         this.#value++
//     }
//     decrement() {
//         this.#value--
//     }
//     reset() {
//         this.#value = this.initialValue
//     }
// }


// const counter = new Counter(10);

// console.log(counter.getValue()); // 10

// counter.increment();
// counter.increment();

// console.log(counter.getValue()); // 12

// counter.decrement();

// console.log(counter.getValue()); // 11

// counter.reset();

// console.log(counter.getValue()); // 10


// class TodoList {
//     #tasks
//     constructor(TodoList) {
//         this.#tasks = TodoList
//     }
//     getTasks() {
//         return this.#tasks
//     }
//     addTask(task) {
//         this.#tasks.push(task)
//     }
//     removeTask(task) {
//         this.#tasks = this.#tasks.filter(item => item.name !== name)
//     }
//     hasTask(task) {
//         return this.#tasks.includes(task)
//     }
// }

// const todo = new TodoList([
//     "Learn JavaScript",
//     "Practice classes",
// ]);

// console.log(todo.getTasks());
// // ["Learn JavaScript", "Practice classes"]

// todo.addTask("Learn React");

// console.log(todo.hasTask("Learn React")); // true

// todo.removeTask("Practice classes");

// console.log(todo.getTasks());
// // ["Learn JavaScript", "Learn React"]

// console.log(todo.hasTask("Practice classes")); // false


class Book {
    #title
    #author
    #pages
    constructor(author, title, pages) {
        this.#author = author
        this.#title = title
        this.#pages = pages
    }
    getTitle() {
        return this.#title
    }
    getAuthor() {
        return this.#author
    }
    getPages() {
        return this.#pages
    }
    setPages(newPages) {
        this.#pages = newPages
    }
    getInfo() {
        return `${this.#title} by ${this.#author}, ${this.#pages} pages`
    }
}

const book = new Book("JavaScript Basics", "John Smith", 250);

console.log(book.getTitle()); // "JavaScript Basics"
console.log(book.getAuthor()); // "John Smith"
console.log(book.getPages()); // 250

book.setPages(300);

console.log(book.getPages()); // 300

console.log(book.getInfo());
// "JavaScript Basics by John Smith, 300 pages"