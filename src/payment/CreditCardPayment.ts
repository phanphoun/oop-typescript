import { Payment } from "./Payment.js";

export class CreditCardPayment extends Payment {
  private cardNumber: string;
  private expiry: string;
  private cvv: string;

  constructor(amount: number, cardNumber: string, expiry: string, cvv: string) {
    super(amount);
    this.cardNumber = cardNumber;
    this.expiry = expiry;
    this.cvv = cvv;
  }

  validate(): boolean {
    const cardValid = /^\d{16}$/.test(this.cardNumber);
    const cvvValid = /^\d{3}$/.test(this.cvv);
    return cardValid && cvvValid;
  }

  generateReceipt(): string {
    const maskedCard = this.cardNumber.replace(/\d(?=\d{4})/g, '*');
    return `Credit Card Receipt\nCard: ${maskedCard}\nExpiry: ${this.expiry}\nAmount: $${this.amount}`;
  }

  pay(): void {
    console.log("Processing Credit Card payment...");
    if (!this.validate()) {
      console.log("Invalid card number!");
    } else {
      super.pay();
    }
  }
}
