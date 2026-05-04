import { Employee } from "./Employee.js";

/**
 * INHERITANCE - Manager extends Employee
 * 
 * Inheritance allows Manager to inherit properties and methods from Employee.
 * Manager "is a" Employee with additional bonus functionality.
 */
export class Manager extends Employee {
  private bonus: number;

  constructor(id: number, name: string, salary: number, bonus: number) {
    super(id, name, salary);
    this.bonus = bonus;
  }

  /**
   * METHOD OVERRIDING - calculateSalary()
   * 
   * Provides Manager-specific salary calculation including bonus.
   */
  calculateSalary(): number {
    return this.salary + this.bonus;
  }

  /**
   * METHOD OVERRIDING - getRole()
   */
  getRole(): string {
    return "Manager";
  }

  /**
   * INTERFACE IMPLEMENTATION - work()
   */
  work(): void {
    console.log(`${this.name} (Manager) is managing the team and making strategic decisions.`);
  }

  /**
   * INTERFACE IMPLEMENTATION - takeBreak()
   */
  takeBreak(minutes: number): void {
    console.log(`${this.name} (Manager) is taking a ${minutes}-minute break for a meeting.`);
  }
}
