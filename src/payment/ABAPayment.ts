import { Payment } from "./Payment.js";

export class ABAPayment extends Payment {
  private accountNumber: string;
  private phone: string;

  constructor(amount: number, accountNumber: string, phone: string) {
    super(amount);
    this.accountNumber = accountNumber;
    this.phone = phone;
  }

  validate(): boolean {
    const accountValid = this.accountNumber.length >= 8;
    const phoneValid = this.phone.length >= 9;
    return accountValid && phoneValid;
  }

  generateReceipt(): string {
    return `ABA Payment Receipt\nAccount: ${this.accountNumber}\nPhone: ${this.phone}\nAmount: $${this.amount}`;
  }

  pay(): void {
    console.log("Processing ABA payment...");
    super.pay();
  }
}
