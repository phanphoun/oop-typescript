export class Payment {
    amount;
    constructor(amount) {
        this.amount = amount;
    }
    pay() {
        console.log("Processing payment...");
        if (this.validate()) {
            console.log("Payment successful!");
            console.log(this.generateReceipt());
        }
        else {
            console.log("Payment failed!");
        }
    }
}
//# sourceMappingURL=Payment.js.map