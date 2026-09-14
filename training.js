// class Cart {
//     #items
//     constructor(initialItems) {
//         this.#items = initialItems
//     }

//     getItems() {
//         return this.#items
//     }
//     addItem(item) {
//         this.#items.push(item)
//     }
//     removeItem(item) {
//         const index = this.#items.indexOf(item);
//         if (index != -1) {
//             this.#items.splice(index, 1)
//         }
//     }
//     getCount() {
//         return this.#items.length
//     }
// }

// const cart = new Cart(["Apple", "Banana"]);

// console.log(cart.getItems()); // ["Apple", "Banana"]

// cart.addItem("Orange");
// console.log(cart.getItems()); // ["Apple", "Banana", "Orange"]

// cart.removeItem("Banana");
// console.log(cart.getItems()); // ["Apple", "Orange"]

// console.log(cart.getCount()); // 2


class BankAccount {
    #balance
    constructor(initialBalance) {
        this.#balance = initialBalance
    }
    getBalance() {
        return this.#balance
    }
    deposit(amount) {
        this.#balance = this.#balance + amount
    }
    withdraw(amount) {
        this.#balance = this.#balance - amount
    }
    getStatus() {
        if (this.#balance >= 0) {
            return "Positive"
        } else {
            return "Negative"
        }
    }
}

const account = new BankAccount(1000);

console.log(account.getBalance()); // 1000

account.deposit(500);
console.log(account.getBalance()); // 1500

account.withdraw(700);
console.log(account.getBalance()); // 800

console.log(account.getStatus()); // "Positive"