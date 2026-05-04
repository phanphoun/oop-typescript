import { Employee } from "./Employee.js";

export class Developer extends Employee {
  private overtimeHours: number;
  private hourlyRate: number;

  constructor(id: number, name: string, salary: number, overtimeHours: number, hourlyRate: number) {
    super(id, name, salary);
    this.overtimeHours = overtimeHours;
    this.hourlyRate = hourlyRate;
  }

  calculateSalary(): number {
    return this.salary + (this.overtimeHours * this.hourlyRate);
  }

  getRole(): string {
    return "Developer";
  }
}
