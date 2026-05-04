import { Employee } from "./Employee.js";
export class Intern extends Employee {
    allowance;
    constructor(id, name, allowance) {
        super(id, name, 0);
        this.allowance = allowance;
    }
    calculateSalary() {
        return this.allowance;
    }
    getRole() {
        return "Intern";
    }
}
//# sourceMappingURL=Intern.js.map