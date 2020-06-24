class Bank {
    constructor(bankName) {

        this._bankName = bankName;
        this.allCustomers = [];
    }

    newCustomer(customer) {
        if (this.allCustomers.find(c => c.personalId === customer.personalId) !== undefined) {
            throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`)
        }
        customer.totalMoney = 0;
        customer.transaction = [];
        customer.counter = 1;
        this.allCustomers.push(customer);

        return customer;
    }

    depositMoney(personalId, amount) {
        const currentUser = this.allCustomers.find(c => c.personalId === personalId);

        if (currentUser === undefined) {

            throw new Error(`We have no customer with this ID!`)

        }


        currentUser.totalMoney += Number(amount);

        currentUser.transaction.unshift(`${currentUser.counter}. ${currentUser.firstName} ${currentUser.lastName} made deposit of ${amount}$!`);
        currentUser.counter++;
        return `${ currentUser.totalMoney}$`
    }

    withdrawMoney(personalId, amount) {

        const currentUser = this.allCustomers.find(c => c.personalId === personalId);
        if (currentUser === undefined) {

            throw new Error(`We have no customer with this ID!`)

        }

        if (currentUser.totalMoney < amount) {

            throw new Error(`${currentUser.firstName} ${currentUser.lastName} does not have enough money to withdraw that amount!`)
        }

        currentUser.totalMoney -= Number(amount);
        currentUser.transaction.unshift(`${currentUser.counter}. ${currentUser.firstName} ${currentUser.lastName} withdrew ${amount}$!`);
        currentUser.counter++;



        return `${ currentUser.totalMoney}$`
    }

    customerInfo(personalId) {

        const currentUser = this.allCustomers.find(c => c.personalId === personalId);
        if (currentUser === undefined) {

            throw new Error(`We have no customer with this ID!`)

        }


        const result = [
            `Bank name: ${this._bankName}`,
            `Customer name: ${currentUser.firstName} ${currentUser.lastName}`,
            `Customer ID: ${currentUser.personalId}`,
            `Total Money: ${currentUser.totalMoney}$`,
            `Transactions:`

        ];


        currentUser.transaction.forEach(t=> 
            result.push(t));



        return result.join('\n');

    }





}

let bank = new Bank("SoftUni Bank");

console.log(bank.newCustomer({firstName: "Svetlin", lastName: "Nakov", personalId: 6233267}));
console.log(bank.newCustomer({firstName: "Mihaela", lastName: "Mileva", personalId: 4151596}));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596,555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));



