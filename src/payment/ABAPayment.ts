import { Payment } from "./Payment.js";
import type { IPaymentProcessor } from "./IPaymentProcessor.js";

/**
 * INHERITANCE - ABAPayment extends Payment
 * 
 * Inheritance allows a class to inherit properties and methods from a parent class.
 * This promotes code reuse and establishes an "is-a" relationship.
 * ABAPayment "is a" Payment.
 */
export class ABAPayment extends Payment implements IPaymentProcessor {
  private accountNumber: string;
  private phone: string;

  constructor(amount: number, accountNumber: string, phone: string) {
    super(amount);
    this.accountNumber = accountNumber;
    this.phone = phone;
  }

  /**
   * METHOD OVERRIDING - validate()
   * 
   * Child class provides its own implementation of a method defined in the parent class.
   * This allows specific behavior for each payment type.
   */
  validate(): boolean {
    const accountValid = this.accountNumber.length >= 8;
    const phoneValid = this.phone.length >= 9;
    return accountValid && phoneValid;
  }

  /**
   * METHOD OVERRIDING - generateReceipt()
   */
  generateReceipt(): string {
    return `ABA Payment Receipt\nAccount: ${this.accountNumber}\nPhone: ${this.phone}\nAmount: $${this.amount}`;
  }

  /**
   * METHOD OVERRIDING - pay()
   * 
   * Overrides parent's pay() method to add ABA-specific logic,
   * then calls super.pay() to reuse parent's payment logic.
   */
  pay(): void {
    console.log("Processing ABA payment...");
    super.pay();
  }

  /**
   * INTERFACE IMPLEMENTATION - processPayment()
   * 
   * Classes implementing IPaymentProcessor must provide these methods.
   * This demonstrates that a class can both extend an abstract class AND implement interfaces.
   */
  processPayment(): void {
    this.pay();
  }

  refund(): void {
    console.log(`Refunding ABA payment for account ${this.accountNumber}`);
    console.log(`Transaction ID: ${this.getTransactionId()}`);
  }

  getTransactionId(): string {
    return super.getTransactionId();
  }
}
