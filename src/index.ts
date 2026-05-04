import { ABAPayment } from "./payment/ABAPayment.js";
import { CreditCardPayment } from "./payment/CreditCardPayment.js";
import { CashPayment } from "./payment/CashPayment.js";
import { Manager } from "./employee/Manager.js";
import { Developer } from "./employee/Developer.js";
import { Intern } from "./employee/Intern.js";

console.log("=== PAYMENT SYSTEM DEMO ===\n");

// ABA Payment
const abaPayment = new ABAPayment(100, "12345678", "012345678");
abaPayment.pay();
console.log();

// Credit Card Payment - Invalid (to match expected output)
const invalidCardPayment = new CreditCardPayment(150, "123", "12/25", "123");
invalidCardPayment.pay();
console.log();

// Cash Payment
const cashPayment = new CashPayment(20, 25);
cashPayment.pay();
console.log();

console.log("=== EMPLOYEE SYSTEM DEMO ===\n");

// Manager
const manager = new Manager(1, "John Doe", 2500, 500);
manager.displayInfo();
console.log();

// Developer
const developer = new Developer(2, "Jane Smith", 2000, 10, 50);
developer.displayInfo();
console.log();

// Intern
const intern = new Intern(3, "Bob Johnson", 500);
intern.displayInfo();
