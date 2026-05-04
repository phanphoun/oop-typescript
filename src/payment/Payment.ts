/**
 * ABSTRACT CLASS - Payment
 * 
 * Abstract Class features:
 * - Cannot be instantiated directly
 * - Can have both abstract (no implementation) and concrete (with implementation) methods
 * - Used as a base class for inheritance
 * - Provides partial implementation that child classes can extend
 * 
 * This demonstrates the difference between Abstract Class and Interface:
 * - Abstract Class: Has both abstract methods AND concrete implementation (pay() method)
 * - Interface: Only defines method signatures without any implementation
 */
export abstract class Payment {
  protected amount: number;
  protected transactionId: string;

  constructor(amount: number) {
    this.amount = amount;
    this.transactionId = this.generateTransactionId();
  }

  // Abstract methods - must be implemented by child classes
  abstract validate(): boolean;
  abstract generateReceipt(): string;

  // Concrete method - implementation provided, can be overridden
  pay(): void {
    console.log("Processing payment...");
    if (this.validate()) {
      console.log("Payment successful!");
      console.log(this.generateReceipt());
    } else {
      console.log("Payment failed!");
    }
  }

  // Helper method with implementation
  private generateTransactionId(): string {
    return "TXN" + Date.now() + Math.random().toString(36).substr(2, 9);
  }

  // Concrete method that can be used by all child classes
  getTransactionId(): string {
    return this.transactionId;
  }
}
