import { Payment } from "./Payment.js";
export declare class CreditCardPayment extends Payment {
    private cardNumber;
    private expiry;
    private cvv;
    constructor(amount: number, cardNumber: string, expiry: string, cvv: string);
    validate(): boolean;
    generateReceipt(): string;
    pay(): void;
}
//# sourceMappingURL=CreditCardPayment.d.ts.map