import { SelectedOption } from "./SelectedOption";
import { Stock } from "./Stock";

export interface Variant {
    id: string;
    title: string;
    quantity: number;
    price: string;
    selectedOptions: SelectedOption[];
    stock: Stock;
}