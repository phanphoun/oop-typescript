export abstract class Payment {
  protected amount: number;

  constructor(amount: number) {
    this.amount = amount;
  }

  abstract validate(): boolean;
  abstract generateReceipt(): string;

  pay(): void {
    console.log("Processing payment...");
    if (this.validate()) {
      console.log("Payment successful!");
      console.log(this.generateReceipt());
    } else {
      console.log("Payment failed!");
    }
  }
}
