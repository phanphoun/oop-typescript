import { Payment } from "./Payment.js";
import type { IPaymentProcessor } from "./IPaymentProcessor.js";

/**
 * INHERITANCE - CreditCardPayment extends Payment
 * Demonstrates inheritance and method overriding
 */
export class CreditCardPayment extends Payment implements IPaymentProcessor {
  private cardNumber: string;
  private expiry: string;
  private cvv: string;

  constructor(amount: number, cardNumber: string, expiry: string, cvv: string) {
    super(amount);
    this.cardNumber = cardNumber;
    this.expiry = expiry;
    this.cvv = cvv;
  }

  /**
   * METHOD OVERRIDING - validate()
   */
  validate(): boolean {
    const cardValid = /^\d{16}$/.test(this.cardNumber);
    const cvvValid = /^\d{3}$/.test(this.cvv);
    return cardValid && cvvValid;
  }

  /**
   * METHOD OVERRIDING - generateReceipt()
   */
  generateReceipt(): string {
    const maskedCard = this.cardNumber.replace(/\d(?=\d{4})/g, '*');
    return `Credit Card Receipt\nCard: ${maskedCard}\nExpiry: ${this.expiry}\nAmount: $${this.amount}`;
  }

  /**
   * METHOD OVERRIDING - pay()
   */
  pay(): void {
    console.log("Processing Credit Card payment...");
    if (!this.validate()) {
      console.log("Invalid card number!");
    } else {
      super.pay();
    }
  }

  /**
   * INTERFACE IMPLEMENTATION
   */
  processPayment(): void {
    this.pay();
  }

  refund(): void {
    const maskedCard = this.cardNumber.replace(/\d(?=\d{4})/g, '*');
    console.log(`Refunding Credit Card payment for card ending in ${this.cardNumber.slice(-4)}`);
    console.log(`Transaction ID: ${this.getTransactionId()}`);
  }

  getTransactionId(): string {
    return super.getTransactionId();
  }
}
