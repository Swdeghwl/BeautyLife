// Product

export interface Situation {
    productNumber: number;
    property: Object;
    colors: string;
}

export interface Description{
    name: string;
    caption: string;
    situation: Situation;
}

export interface Product {
    id: string;
    src: string;
    off: number;
    price: number;
    whole: number;
    count: number;
    description: Description;
}

// New

export interface New {
    
}

// Img

export interface Img {
    src: string;
    alt: string
}