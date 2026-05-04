export declare abstract class Payment {
    protected amount: number;
    constructor(amount: number);
    abstract validate(): boolean;
    abstract generateReceipt(): string;
    pay(): void;
}
//# sourceMappingURL=Payment.d.ts.map