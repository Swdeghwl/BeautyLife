// Product

export enum productSituation {
    popular,
    new,
}

export enum typeProduct{
    firstProduct,
    secondProduct,
    thirdProduct
}

export interface Situation {
    productNumber: number;
    filter: Filter[]
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
    situation: productSituation;
    type: typeProduct;
    description: Description;
}

// New

export interface New {
    src: string;
    time: string;
    title: string;
    description: string;
}

// Img

export enum sliderSituation{
    homepageSlider,
    firstSlider,
    secondSlider,
    thirdeSlider,
    categoryImg,
    popularImg,
    newImg
}

export interface Img {
    src: string;
    alt: string
    situation: sliderSituation;
}

// Count

export interface Count{
    src: string;
    name: string;
    count: number;
    routerAddress?: string;
    routerId?: string;
}

// All Product

// Filter

export interface Filter{
    filterType: string;
    filterName: string[];
}

// All

export interface AllProduct {
    product: Product[];
    filter: Filter[];
}

// main

// Homepage

export interface HomePage{
    slider: Img[],
    category: Img[],
    products: Count[],
    newProduct: Product[],
    newImg: Img[],
    popularProduct: Product[],
    popularImg: Img[],
    brands: Count[],
    news: New[],
}

// ProductCast

export interface ProductCast {
    slider: Img[],
    category: Img[],
    newProduct: Product[],
    popularProduct: Product[],
    allProduct: Product[]
}