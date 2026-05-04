import { Payment } from "./Payment.js";

export class CashPayment extends Payment {
  private amountReceived: number;

  constructor(amount: number, amountReceived: number) {
    super(amount);
    this.amountReceived = amountReceived;
  }

  validate(): boolean {
    return this.amountReceived >= this.amount;
  }

  generateReceipt(): string {
    const change = this.amountReceived - this.amount;
    return `Cash Payment Receipt\nAmount Paid: $${this.amount}\nReceived: $${this.amountReceived}\nChange: $${change}`;
  }

  pay(): void {
    console.log("Processing Cash payment...");
    if (this.validate()) {
      const change = this.amountReceived - this.amount;
      if (change > 0) {
        console.log(`Change returned: $${change}`);
      }
      super.pay();
    } else {
      console.log("Insufficient cash received!");
    }
  }
}
