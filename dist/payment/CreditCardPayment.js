import { Payment } from "./Payment.js";
export class CreditCardPayment extends Payment {
    cardNumber;
    expiry;
    cvv;
    constructor(amount, cardNumber, expiry, cvv) {
        super(amount);
        this.cardNumber = cardNumber;
        this.expiry = expiry;
        this.cvv = cvv;
    }
    validate() {
        const cardValid = /^\d{16}$/.test(this.cardNumber);
        const cvvValid = /^\d{3}$/.test(this.cvv);
        return cardValid && cvvValid;
    }
    generateReceipt() {
        const maskedCard = this.cardNumber.replace(/\d(?=\d{4})/g, '*');
        return `Credit Card Receipt\nCard: ${maskedCard}\nExpiry: ${this.expiry}\nAmount: $${this.amount}`;
    }
    pay() {
        console.log("Processing Credit Card payment...");
        if (!this.validate()) {
            console.log("Invalid card number!");
        }
        else {
            super.pay();
        }
    }
}
//# sourceMappingURL=CreditCardPayment.js.map