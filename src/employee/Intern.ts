import { Employee } from "./Employee.js";

export class Intern extends Employee {
  private allowance: number;

  constructor(id: number, name: string, allowance: number) {
    super(id, name, 0);
    this.allowance = allowance;
  }

  calculateSalary(): number {
    return this.allowance;
  }

  getRole(): string {
    return "Intern";
  }
}
