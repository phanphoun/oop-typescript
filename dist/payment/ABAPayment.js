import { Payment } from "./Payment.js";
export class ABAPayment extends Payment {
    accountNumber;
    phone;
    constructor(amount, accountNumber, phone) {
        super(amount);
        this.accountNumber = accountNumber;
        this.phone = phone;
    }
    validate() {
        const accountValid = this.accountNumber.length >= 8;
        const phoneValid = this.phone.length >= 9;
        return accountValid && phoneValid;
    }
    generateReceipt() {
        return `ABA Payment Receipt\nAccount: ${this.accountNumber}\nPhone: ${this.phone}\nAmount: $${this.amount}`;
    }
    pay() {
        console.log("Processing ABA payment...");
        super.pay();
    }
}
//# sourceMappingURL=ABAPayment.js.map