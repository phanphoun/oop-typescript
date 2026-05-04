import { Employee } from "./Employee.js";

/**
 * INHERITANCE - Developer extends Employee
 * 
 * Developer "is a" Employee with overtime pay functionality.
 */
export class Developer extends Employee {
  private overtimeHours: number;
  private hourlyRate: number;

  constructor(id: number, name: string, salary: number, overtimeHours: number, hourlyRate: number) {
    super(id, name, salary);
    this.overtimeHours = overtimeHours;
    this.hourlyRate = hourlyRate;
  }

  /**
   * METHOD OVERRIDING - calculateSalary()
   */
  calculateSalary(): number {
    return this.salary + (this.overtimeHours * this.hourlyRate);
  }

  /**
   * METHOD OVERRIDING - getRole()
   */
  getRole(): string {
    return "Developer";
  }

  /**
   * INTERFACE IMPLEMENTATION - work()
   */
  work(): void {
    console.log(`${this.name} (Developer) is writing code and building features.`);
  }

  /**
   * INTERFACE IMPLEMENTATION - takeBreak()
   */
  takeBreak(minutes: number): void {
    console.log(`${this.name} (Developer) is taking a ${minutes}-minute break to review code.`);
  }
}
