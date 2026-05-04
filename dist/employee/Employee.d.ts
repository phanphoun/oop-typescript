export declare abstract class Employee {
    protected id: number;
    protected name: string;
    protected salary: number;
    constructor(id: number, name: string, salary: number);
    abstract calculateSalary(): number;
    abstract getRole(): string;
    displayInfo(): void;
}
//# sourceMappingURL=Employee.d.ts.map