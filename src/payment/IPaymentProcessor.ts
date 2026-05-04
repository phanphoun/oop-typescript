/**
 * INTERFACE - IPaymentProcessor
 * 
 * Difference between Interface and Abstract Class:
 * - Interface: Only defines method signatures (no implementation), used for contracts
 * - Abstract Class: Can have both abstract and implemented methods, used for partial implementation
 * - Class can implement multiple interfaces but extend only one abstract class
 * - Interfaces are for "what it can do", Abstract Classes are for "what it is"
 */
export interface IPaymentProcessor {
  processPayment(): void;
  refund(): void;
  getTransactionId(): string;
}
