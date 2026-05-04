# OOP TypeScript Assignment

## 🎯 Goal
Practice OOP concepts:
- Inheritance
- Method Overriding
- Abstract Class
- Interface vs Abstract Class
- Polymorphism

## 📋 Part 1: Payment System

### Requirements
Create a system supporting ABA, Credit Card, and Cash payments.

### Tasks Breakdown

1. **Base Structure**
   - Create an abstract class `Payment` with common payment behavior
   - Methods: `pay(amount: number): void`, `validate(): boolean`, `generateReceipt(): string`

2. **Payment Types**
   - **ABA Payment**
     - Properties: `accountNumber: string`, `phone: string`
     - Validate account number format
     - Generate specific receipt
   
   - **Credit Card Payment**
     - Properties: `cardNumber: string`, `expiry: string`, `cvv: string`
     - Validate card number (16 digits) and CVV (3 digits)
     - Handle invalid card scenarios
   
   - **Cash Payment**
     - Properties: `amountReceived: number`
     - Calculate and return change if overpaid

3. **OOP Concepts Used**
   - **Inheritance**: All payment types extend abstract `Payment` class
   - **Method Overriding**: Each payment type implements `validate()` and `generateReceipt()` differently
   - **Polymorphism**: Use `Payment` type to handle different payment methods uniformly

### Expected Output
```
Processing ABA payment...
Payment successful!
Processing Credit Card payment...
Invalid card number!
Processing Cash payment...
Change returned: $5
```

---

## 👨‍💼 Part 2: Employee System

### Requirements
Create a system for Manager, Developer, and Intern.

### Tasks Breakdown

1. **Base Class**
   - Abstract class `Employee` with:
     - Properties: `id: number`, `name: string`, `salary: number`
     - Abstract methods: `calculateSalary(): number`, `getRole(): string`

2. **Employee Types**
   - **Manager**
     - Properties: `bonus: number`
     - Salary calculation: base salary + bonus
   
   - **Developer**
     - Properties: `overtimeHours: number`, `hourlyRate: number`
     - Salary calculation: base salary + (overtimeHours × hourlyRate)
   
   - **Intern**
     - Properties: `allowance: number`
     - Salary calculation: allowance only (no base salary)

3. **OOP Concepts Used**
   - **Inheritance**: All employee types extend abstract `Employee` class
   - **Method Overriding**: Each employee type implements `calculateSalary()` differently
   - **Polymorphism**: Use `Employee` type to handle different employee types uniformly

### Expected Output
```
Role: Manager
Salary: 3000
Role: Developer
Salary: 2500
Role: Intern
Salary: 500
```

---

## 📚 Theory Task

### 1. Difference between Interface and Abstract Class

| Aspect | Interface | Abstract Class |
|--------|-----------|----------------|
| Implementation | No implementation, only signatures | Can have both abstract and concrete methods |
| Multiple Inheritance | A class can implement multiple interfaces | A class can extend only one abstract class |
| Constructors | Cannot have constructors | Can have constructors |
| Access Modifiers | All members are public by default | Can have private, protected, public modifiers |
| Purpose | Define a contract for behavior | Provide base implementation and common behavior |

### 2. Where OOP Concepts Were Used

- **Inheritance**: 
  - Payment types (ABA, CreditCard, Cash) extend `Payment` abstract class
  - Employee types (Manager, Developer, Intern) extend `Employee` abstract class

- **Method Overriding**:
  - Each payment type overrides `validate()` with specific validation logic
  - Each payment type overrides `generateReceipt()` with specific receipt format
  - Each employee type overrides `calculateSalary()` with specific calculation logic
  - Each employee type overrides `getRole()` to return their role name

- **Polymorphism**:
  - Using `Payment[]` array to store and process different payment types
  - Using `Employee[]` array to store and process different employee types
  - Same method calls produce different behavior based on object type

---

## 📁 Project Structure

```
src/
├── payment/
│   ├── Payment.ts          (Abstract base class)
│   ├── ABAPayment.ts       (ABA payment implementation)
│   ├── CreditCardPayment.ts (Credit card implementation)
│   └── CashPayment.ts      (Cash payment implementation)
├── employee/
│   ├── Employee.ts         (Abstract base class)
│   ├── Manager.ts          (Manager implementation)
│   ├── Developer.ts        (Developer implementation)
│   └── Intern.ts           (Intern implementation)
└── index.ts                (Main entry point - demonstrates both systems)
```

---

## 🚀 How to Run

```bash
npm run build    # Compile TypeScript
npm start        # Run the application
```

All output will be displayed in the terminal.