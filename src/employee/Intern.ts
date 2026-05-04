import { Employee } from "./Employee.js";

/**
 * INHERITANCE - Intern extends Employee
 * 
 * Intern "is a" Employee with allowance instead of salary.
 */
export class Intern extends Employee {
  private allowance: number;

  constructor(id: number, name: string, allowance: number) {
    super(id, name, 0);
    this.allowance = allowance;
  }

  /**
   * METHOD OVERRIDING - calculateSalary()
   */
  calculateSalary(): number {
    return this.allowance;
  }

  /**
   * METHOD OVERRIDING - getRole()
   */
  getRole(): string {
    return "Intern";
  }

  /**
   * INTERFACE IMPLEMENTATION - work()
   */
  work(): void {
    console.log(`${this.name} (Intern) is learning and assisting with basic tasks.`);
  }

  /**
   * INTERFACE IMPLEMENTATION - takeBreak()
   */
  takeBreak(minutes: number): void {
    console.log(`${this.name} (Intern) is taking a ${minutes}-minute break to study.`);
  }
}
