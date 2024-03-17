// Product

export enum productSituation {
    popular,
    new,
    cheap,
    expensive,
    highQuality
}

export enum typeProduct {
    firstProduct,
    secondProduct,
    thirdProduct
}

export interface Situation {
    productNumber: number;
    filter: Filter
}

export interface Description {
    name: string;
    caption: string;
    situation: Situation;
}

export interface Product {
    id: string;
    srcAll: string[];
    src: string;
    off: number;
    price: number;
    whole: number;
    brand: Brand;
    count: number;
    situation: productSituation;
    type: typeProduct;
    description: Description;
}

export interface Products {
    product: Product[];
    productId: string | undefined;
}

export interface ProductId {
    product: Product;
    productId: string;
}


// id

export interface IdProduct {
    idNew: string;
    idPopular: string;
    idAll?: string;
}

// New

export interface New {
    src: string;
    time: string;
    title: string;
    description: string;
}

// Img

export enum imgSituation {
    // add
    homepageAdd,
    firstAdd,
    secondAdd,
    thirdAdd,

    // off
    popular,
    new,
}

export interface Img {
    src: string;
    alt: string
    situation: imgSituation;
    routerId: string;
    target: productSituation;
}

// Slider

export enum sliderSituation {
    // slider
    homepageSlider,
    firstSlider,
    secondSlider,
    thirdSlider,
    sign,
}

export interface Slider {
    src: string;
    alt: string
    situation: sliderSituation;
}

// Count

export enum countSituatoin{
    brand,
    product
}

export interface Count {
    src: string;
    alt: string;
    name: string;
    count: number;
    situation: countSituatoin;
    routerId: string;
}

// Filter

export interface Filter {
    name?: string;
    filterType: string;
    filterName: string[];
}

// Account

export interface Account{
    userName: string;
    email: string;
    address: string;
    name: string;
    national: string;
    birthday: string;
}

// brand

export enum Brand{
    nothing,
    brand_1,
    brand_2,
    brand_3,
    brand_4,
    brand_5,
    brand_6,
}

// Main Cast

// Homepage

export interface HomePage {
    slider: Slider[];
    category: Img[];
    products: Count[];
    newProduct: Products;
    newImg: Img[];
    popularProduct: Products;
    popularImg: Img[];
    brands: Count[];
    news: New[];
}

// ProductCast

export interface ProductCast {
    slider: Slider[];
    category: Img[];
    newProduct: Products;
    popularProduct: Products;
    allProduct: Products;
}

// FilterCast

export interface FilterCast {
    product: Product[];
    filter: Filter
}

// Category

export interface Category{
    products: Count[];
    brands: Count[];
    news: New[];
}