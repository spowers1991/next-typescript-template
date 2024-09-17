import { Collection } from "./types/Collection";
import { Image } from "./types/Image";
import { Variant } from "./types/Variant";
import { SEO } from './types/SEO'
  
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
  