export abstract class Employee {
  protected id: number;
  protected name: string;
  protected salary: number;

  constructor(id: number, name: string, salary: number) {
    this.id = id;
    this.name = name;
    this.salary = salary;
  }

  abstract calculateSalary(): number;
  abstract getRole(): string;

  displayInfo(): void {
    console.log(`Role: ${this.getRole()}`);
    console.log(`Salary: ${this.calculateSalary()}`);
  }
}
