import { Employee } from "./Employee.js";
export class Developer extends Employee {
    overtimeHours;
    hourlyRate;
    constructor(id, name, salary, overtimeHours, hourlyRate) {
        super(id, name, salary);
        this.overtimeHours = overtimeHours;
        this.hourlyRate = hourlyRate;
    }
    calculateSalary() {
        return this.salary + (this.overtimeHours * this.hourlyRate);
    }
    getRole() {
        return "Developer";
    }
}
//# sourceMappingURL=Developer.js.map