import { ABAPayment } from "./payment/ABAPayment.js";
import { CreditCardPayment } from "./payment/CreditCardPayment.js";
import { CashPayment } from "./payment/CashPayment.js";
import { Payment } from "./payment/Payment.js";
import type { IPaymentProcessor } from "./payment/IPaymentProcessor.js";
import { Manager } from "./employee/Manager.js";
import { Developer } from "./employee/Developer.js";
import { Intern } from "./employee/Intern.js";
import { Employee } from "./employee/Employee.js";
import type { IEmployeeBehavior } from "./employee/IEmployeeBehavior.js";

console.log("=== OOP CONCEPTS DEMONSTRATION ===\n");

console.log("1. INHERITANCE & METHOD OVERRIDING");
console.log("===================================\n");
console.log("Payment classes inherit from abstract Payment class and override methods:");
console.log("- ABAPayment extends Payment\n- CreditCardPayment extends Payment\n- CashPayment extends Payment\n");
console.log("Employee classes inherit from abstract Employee class and override methods:");
console.log("- Manager extends Employee\n- Developer extends Employee\n- Intern extends Employee\n");

console.log("2. ABSTRACT CLASS");
console.log("==================\n");
console.log("Payment and Employee are abstract classes that cannot be instantiated directly.");
console.log("They provide both abstract methods (must implement) and concrete methods (inherited).\n");

console.log("3. INTERFACE vs ABSTRACT CLASS");
console.log("==============================\n");
console.log("Interfaces (IPaymentProcessor, IEmployeeBehavior) define contracts without implementation.");
console.log("Classes can implement multiple interfaces but extend only one abstract class.");
console.log("- Payment classes implement IPaymentProcessor interface");
console.log("- Employee classes implement IEmployeeBehavior interface\n");

console.log("4. POLYMORPHISM - PAYMENT SYSTEM");
console.log("=================================\n");

/**
 * POLYMORPHISM DEMONSTRATION
 * 
 * Polymorphism allows treating objects of different subclasses as objects of their parent class.
 * The correct method implementation is determined at runtime (runtime polymorphism).
 * Here, we store different payment types in a Payment[] array and call pay() on each.
 */
const payments: Payment[] = [
  new ABAPayment(100, "12345678", "012345678"),
  new CreditCardPayment(150, "1234567890123456", "12/25", "123"),
  new CashPayment(20, 25)
];

console.log("Processing payments using polymorphism (Payment type):");
payments.forEach((payment, index) => {
  console.log(`\nPayment ${index + 1}:`);
  payment.pay();
});

console.log("\n---");

/**
 * POLYMORPHISM WITH INTERFACE
 * 
 * Polymorphism also works with interfaces.
 * Different payment types can be treated as IPaymentProcessor.
 */
const processors: IPaymentProcessor[] = [
  new ABAPayment(100, "12345678", "012345678"),
  new CreditCardPayment(150, "1234567890123456", "12/25", "123"),
  new CashPayment(20, 25)
];

console.log("\nProcessing payments using interface polymorphism (IPaymentProcessor type):");
processors.forEach((processor, index) => {
  console.log(`\nProcessor ${index + 1}:`);
  processor.processPayment();
  console.log(`Transaction ID: ${processor.getTransactionId()}`);
});

console.log("\n---");

console.log("\n5. POLYMORPHISM - EMPLOYEE SYSTEM");
console.log("==================================\n");

/**
 * POLYMORPHISM WITH EMPLOYEES
 * 
 * Different employee types can be stored in an Employee[] array.
 * Each employee will call their own overridden methods at runtime.
 */
const employees: Employee[] = [
  new Manager(1, "John Doe", 2500, 500),
  new Developer(2, "Jane Smith", 2000, 10, 50),
  new Intern(3, "Bob Johnson", 500)
];

console.log("Displaying employee info using polymorphism (Employee type):");
employees.forEach((employee, index) => {
  console.log(`\nEmployee ${index + 1}:`);
  employee.displayInfo();
});

console.log("\n---");

/**
 * POLYMORPHISM WITH INTERFACE
 * 
 * Different employee types can be treated as IEmployeeBehavior.
 */
const behaviors: IEmployeeBehavior[] = [
  new Manager(1, "John Doe", 2500, 500),
  new Developer(2, "Jane Smith", 2000, 10, 50),
  new Intern(3, "Bob Johnson", 500)
];

console.log("\nDemonstrating behaviors using interface polymorphism (IEmployeeBehavior type):");
behaviors.forEach((behavior, index) => {
  console.log(`\nBehavior ${index + 1}:`);
  behavior.work();
  behavior.takeBreak(15);
});

console.log("\n---");

console.log("\n6. SUMMARY");
console.log("==========");
console.log("✓ Inheritance: Classes extend parent classes to reuse code");
console.log("✓ Method Overriding: Child classes provide specific implementations");
console.log("✓ Abstract Class: Base class with abstract and concrete methods");
console.log("✓ Interface vs Abstract Class: Interfaces define contracts, abstract classes provide partial implementation");
console.log("✓ Polymorphism: Objects of different types treated as common type, correct methods called at runtime");
