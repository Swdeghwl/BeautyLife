import { Injectable } from '@angular/core';
import { Img, Product } from 'src/app/interface/interface';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  slider: Img[] = [
    { src: 'https://cdn-img1.imgworlds.com/assets/51699d91-5240-4f58-bcbc-bf2b50d220e6.jpeg?key=promo-image', alt: '1' },
    { src: 'https://cdn-img1.imgworlds.com/assets/929c2a00-a8dc-4924-849e-4ef085cc8011.jpg?key=promo-image', alt: '3' },
  ]

  category: Img[] = [
    { src: 'https://cdn-img1.imgworlds.com/assets/51699d91-5240-4f58-bcbc-bf2b50d220e6.jpeg?key=promo-image', alt: '1' },
    { src: 'https://cdn-img1.imgworlds.com/assets/929c2a00-a8dc-4924-849e-4ef085cc8011.jpg?key=promo-image', alt: '3' },
    { src: 'https://cdn-img1.imgworlds.com/assets/929c2a00-a8dc-4924-849e-4ef085cc8011.jpg?key=promo-image', alt: '3' }
  ]

  product: Product[] = [
    {
      id: 'gahyu12@0px',
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPNQlAqVe0PxemLbEjrnMzokTpHTYpxDcnpA&usqp=CAU',
      off: 200,
      price: 189.2,
      whole: 189.2,
      count: 1,
      description: {
        name: 'sunscreen 125cd',
        caption: 'this is the best product in our store. we want to say something new do you wnt?. products are cheap and you can\'t say I won\'t this product',
        situation: {
          productNumber: 24,
          property: {
            sutible: 'sutible for dry skin',
            weight: '500 gr'
          },
          colors: 'black white orange',
        }
      }
    },
    {
      id: 'gahylk7@0px',
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPNQlAqVe0PxemLbEjrnMzokTpHTYpxDcnpA&usqp=CAU',
      off: 215,
      price: 205,
      whole: 205,
      count: 1,
      description: {
        name: 'sunscreen 125cd',
        caption: 'this is the best product in our store. we want to say something new do you wnt?. products are cheap and you can\'t say I won\'t this product',
        situation: {
          productNumber: 54,
          property: {
            sutible: 'sutible for dry skin',
            weight: '1500 gr'
          },
          colors: 'yellow white orange',
        }
      }
    },
    {
      id: 'glp0lk7@0px',
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPNQlAqVe0PxemLbEjrnMzokTpHTYpxDcnpA&usqp=CAU',
      off: 251,
      price: 235.4,
      whole: 235.4,
      count: 1,
      description: {
        name: 'sunscreen 125cd',
        caption: 'this is the best product in our store. we want to say something new do you wnt?. products are cheap and you can\'t say I won\'t this product',
        situation: {
          productNumber: 76,
          property: {
            sutible: 'sutible for dry skin',
            weight: '1500 gr'
          },
          colors: 'yellow white orange',
        }
      }
    },
    {
      id: 'glop0h7@0px',
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPNQlAqVe0PxemLbEjrnMzokTpHTYpxDcnpA&usqp=CAU',
      off: 234,
      price: 231,
      whole: 231,
      count: 1,
      description: {
        name: 'sunscreen 125cd',
        caption: 'this is the best product in our store. we want to say something new do you wnt?. products are cheap and you can\'t say I won\'t this product',
        situation: {
          productNumber: 23,
          property: {
            sutible: 'sutible for dry skin',
            weight: '1500 gr'
          },
          colors: 'yellow white orange',
        }
      }
    },
    {
      id: 'wet6k7@0px',
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPNQlAqVe0PxemLbEjrnMzokTpHTYpxDcnpA&usqp=CAU',
      off: 186,
      price: 173,
      whole: 173,
      count: 1,
      description: {
        name: 'sunscreen 125cd',
        caption: 'this is the best product in our store. we want to say something new do you wnt?. products are cheap and you can\'t say I won\'t this product',
        situation: {
          productNumber: 32,
          property: {
            sutible: 'sutible for dry skin',
            weight: '1500 gr'
          },
          colors: 'yellow white orange',
        }
      }
    },
    {
      id: 'glosk7@0px',
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPNQlAqVe0PxemLbEjrnMzokTpHTYpxDcnpA&usqp=CAU',
      off: 132,
      price: 123,
      whole: 123,
      count: 1,
      description: {
        name: 'sunscreen 125cd',
        caption: 'this is the best product in our store. we want to say something new do you wnt?. products are cheap and you can\'t say I won\'t this product',
        situation: {
          productNumber: 141,
          property: {
            sutible: 'sutible for dry skin',
            weight: '1500 gr'
          },
          colors: 'yellow white orange',
        }
      }
    },
    {
      id: 'glp9ov@0px',
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPNQlAqVe0PxemLbEjrnMzokTpHTYpxDcnpA&usqp=CAU',
      off: 112,
      price: 108.2,
      whole: 108.2,
      count: 1,
      description: {
        name: 'sunscreen 125cd',
        caption: 'this is the best product in our store. we want to say something new do you wnt?. products are cheap and you can\'t say I won\'t this product',
        situation: {
          productNumber: 21,
          property: {
            sutible: 'sutible for dry skin',
            weight: '1500 gr'
          },
          colors: 'yellow white orange',
        }
      }
    },
    {
      id: 'glp0loi90px',
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPNQlAqVe0PxemLbEjrnMzokTpHTYpxDcnpA&usqp=CAU',
      off: 132,
      price: 109,
      whole: 109,
      count: 1,
      description: {
        name: 'sunscreen 125cd',
        caption: 'this is the best product in our store. we want to say something new do you wnt?. products are cheap and you can\'t say I won\'t this product',
        situation: {
          productNumber: 11,
          property: {
            sutible: 'sutible for dry skin',
            weight: '1500 gr'
          },
          colors: 'yellow white orange',
        }
      }
    }
    
  ]

  constructor() { }
}
