import { Collection } from "./Collection";
import { Image } from "./Image";
import { Variant } from "./Variant";
import { SEO } from './SEO'
  
export interface Product {
    id: string;
    title: string;
    description: string;
    handle: string;
    quantity: number;
    price: string;
    collections: Collection[];
    images: Image[];
    variants: Variant[];
    seo: SEO;
}

export type Products= Product[];
  