import { Employee } from "./Employee.js";
export class Manager extends Employee {
    bonus;
    constructor(id, name, salary, bonus) {
        super(id, name, salary);
        this.bonus = bonus;
    }
    calculateSalary() {
        return this.salary + this.bonus;
    }
    getRole() {
        return "Manager";
    }
}
//# sourceMappingURL=Manager.js.map