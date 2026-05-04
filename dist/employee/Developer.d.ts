import { Employee } from "./Employee.js";
export declare class Developer extends Employee {
    private overtimeHours;
    private hourlyRate;
    constructor(id: number, name: string, salary: number, overtimeHours: number, hourlyRate: number);
    calculateSalary(): number;
    getRole(): string;
}
//# sourceMappingURL=Developer.d.ts.map