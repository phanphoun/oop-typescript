import { Payment } from "./Payment.js";
export declare class ABAPayment extends Payment {
    private accountNumber;
    private phone;
    constructor(amount: number, accountNumber: string, phone: string);
    validate(): boolean;
    generateReceipt(): string;
    pay(): void;
}
//# sourceMappingURL=ABAPayment.d.ts.map