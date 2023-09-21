export interface Order {
    amounts: number[];
    additionalTaxes: number[];
    discounts: number[];
    totalOrder: number;
    paymentMethodId: number;
    payeeId: string;
}