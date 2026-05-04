import { Payment } from "./Payment.js";
export declare class CashPayment extends Payment {
    private amountReceived;
    constructor(amount: number, amountReceived: number);
    validate(): boolean;
    generateReceipt(): string;
    pay(): void;
}
//# sourceMappingURL=CashPayment.d.ts.map