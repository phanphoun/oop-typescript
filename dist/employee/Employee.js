export class Employee {
    id;
    name;
    salary;
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    displayInfo() {
        console.log(`Role: ${this.getRole()}`);
        console.log(`Salary: ${this.calculateSalary()}`);
    }
}
//# sourceMappingURL=Employee.js.map