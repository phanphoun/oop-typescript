import { Payment } from "./Payment.js";
import type { IPaymentProcessor } from "./IPaymentProcessor.js";

/**
 * INHERITANCE - CashPayment extends Payment
 * Demonstrates inheritance and method overriding
 */
export class CashPayment extends Payment implements IPaymentProcessor {
  private amountReceived: number;

  constructor(amount: number, amountReceived: number) {
    super(amount);
    this.amountReceived = amountReceived;
  }

  /**
   * METHOD OVERRIDING - validate()
   */
  validate(): boolean {
    return this.amountReceived >= this.amount;
  }

  /**
   * METHOD OVERRIDING - generateReceipt()
   */
  generateReceipt(): string {
    const change = this.amountReceived - this.amount;
    return `Cash Payment Receipt\nAmount Paid: $${this.amount}\nReceived: $${this.amountReceived}\nChange: $${change}`;
  }

  /**
   * METHOD OVERRIDING - pay()
   */
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

  /**
   * INTERFACE IMPLEMENTATION
   */
  processPayment(): void {
    this.pay();
  }

  refund(): void {
    console.log(`Refunding Cash payment of $${this.amount}`);
    console.log(`Transaction ID: ${this.getTransactionId()}`);
  }

  getTransactionId(): string {
    return super.getTransactionId();
  }
}
