import type { IEmployeeBehavior } from "./IEmployeeBehavior.js";

/**
 * ABSTRACT CLASS - Employee
 * 
 * Abstract Class features:
 * - Cannot be instantiated directly
 * - Can have both abstract and concrete methods
 * - Provides partial implementation that child classes can extend
 * 
 * This demonstrates Interface vs Abstract Class:
 * - Abstract Class: Has abstract methods (calculateSalary, getRole) AND concrete implementation (displayInfo)
 * - Interface: Only defines method signatures without any implementation
 */
export abstract class Employee implements IEmployeeBehavior {
  protected id: number;
  protected name: string;
  protected salary: number;

  constructor(id: number, name: string, salary: number) {
    this.id = id;
    this.name = name;
    this.salary = salary;
  }

  // Abstract methods - must be implemented by child classes
  abstract calculateSalary(): number;
  abstract getRole(): string;

  // Concrete method - implementation provided
  displayInfo(): void {
    console.log(`Role: ${this.getRole()}`);
    console.log(`Salary: ${this.calculateSalary()}`);
  }

  // Interface methods - must be implemented by child classes or provided here
  abstract work(): void;
  abstract takeBreak(minutes: number): void;
}
