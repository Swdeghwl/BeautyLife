import { Injectable } from '@angular/core';
import { Count, Img, New, Product } from 'src/app/interface/interface';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  slider: Img[] = [
    { src: 'https://cdn-img1.imgworlds.com/assets/51699d91-5240-4f58-bcbc-bf2b50d220e6.jpeg?key=promo-image', alt: '1' },
    { src: 'https://cdn-img1.imgworlds.com/assets/929c2a00-a8dc-4924-849e-4ef085cc8011.jpg?key=promo-image', alt: '3' },
  ]

  side: Count[] = [
    { src: 'https://cdn-img1.imgworlds.com/assets/51699d91-5240-4f58-bcbc-bf2b50d220e6.jpeg?key=promo-image', name: 'name', count: 32 },
    { src: 'https://cdn-img1.imgworlds.com/assets/51699d91-5240-4f58-bcbc-bf2b50d220e6.jpeg?key=promo-image', name: 'name', count: 61 },
    { src: 'https://cdn-img1.imgworlds.com/assets/929c2a00-a8dc-4924-849e-4ef085cc8011.jpg?key=promo-image', name: 'name', count: 76 },
    { src: 'https://cdn-img1.imgworlds.com/assets/929c2a00-a8dc-4924-849e-4ef085cc8011.jpg?key=promo-image', name: 'name', count: 26 },
    { src: 'https://cdn-img1.imgworlds.com/assets/929c2a00-a8dc-4924-849e-4ef085cc8011.jpg?key=promo-image', name: 'name', count: 91 },
    { src: 'https://cdn-img1.imgworlds.com/assets/929c2a00-a8dc-4924-849e-4ef085cc8011.jpg?key=promo-image', name: 'name', count: 12 },
  ]

  products: Count[]= [
      { src: 'https://cdn-img1.imgworlds.com/assets/51699d91-5240-4f58-bcbc-bf2b50d220e6.jpeg?key=promo-image', name: 'name', count: 32 },
      { src: 'https://cdn-img1.imgworlds.com/assets/51699d91-5240-4f58-bcbc-bf2b50d220e6.jpeg?key=promo-image', name: 'name', count: 61 },
      { src: 'https://cdn-img1.imgworlds.com/assets/929c2a00-a8dc-4924-849e-4ef085cc8011.jpg?key=promo-image', name: 'name', count: 76 },
    ]

  news: New[] = [
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMrQ8HdKx5aoQE2o9-sigwlAD_dqV2wqKlVA&usqp=CAU',
      time: '25 january, 2024',
      title: 'this is our today news and we are going to say something',
      description: 'this is our today news and we are going to say something this is our today news and we are going to say something this is our today news and we are going to say something'
    },
    {
      src: 'https://img.freepik.com/premium-photo/laptop-table-dark-room-3d-rendering-ai-generated_877188-667.jpg',
      time: '25 january, 2024',
      title: 'this is our today news and we are going to say something',
      description: 'this is our today news and we are going to say something this is our today news and we are going to say something this is our today news and we are going to say something'
    },
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIUfSDmm3zSoVns7QLM2WFVpmG22Fn1bD8fA&usqp=CAU',
      time: '25 january, 2024',
      title: 'this is our today news and we are going to say something',
      description: 'this is our today news and we are going to say something this is our today news and we are going to say something this is our today news and we are going to say something'
    },
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMrQ8HdKx5aoQE2o9-sigwlAD_dqV2wqKlVA&usqp=CAU',
      time: '25 january, 2024',
      title: 'this is our today news and we are going to say something',
      description: 'this is our today news and we are going to say something this is our today news and we are going to say something this is our today news and we are going to say something'
    },
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMrQ8HdKx5aoQE2o9-sigwlAD_dqV2wqKlVA&usqp=CAU',
      time: '25 january, 2024',
      title: 'this is our today news and we are going to say something',
      description: 'this is our today news and we are going to say something this is our today news and we are going to say something this is our today news and we are going to say something'
    },
  ]

  category: Img[] = [
    { src: 'https://cdn-img1.imgworlds.com/assets/51699d91-5240-4f58-bcbc-bf2b50d220e6.jpeg?key=promo-image', alt: '1' },
    { src: 'https://cdn-img1.imgworlds.com/assets/929c2a00-a8dc-4924-849e-4ef085cc8011.jpg?key=promo-image', alt: '3' },
    { src: 'https://cdn-img1.imgworlds.com/assets/929c2a00-a8dc-4924-849e-4ef085cc8011.jpg?key=promo-image', alt: '3' }
  ]

  newprand: Img[] = [
    { src: 'https://cdn-img1.imgworlds.com/assets/51699d91-5240-4f58-bcbc-bf2b50d220e6.jpeg?key=promo-image', alt: '2' },
    { src: 'https://cdn-img1.imgworlds.com/assets/929c2a00-a8dc-4924-849e-4ef085cc8011.jpg?key=promo-image', alt: '3' },
    { src: 'https://cdn-img1.imgworlds.com/assets/51699d91-5240-4f58-bcbc-bf2b50d220e6.jpeg?key=promo-image', alt: '2' },
    { src: 'https://cdn-img1.imgworlds.com/assets/929c2a00-a8dc-4924-849e-4ef085cc8011.jpg?key=promo-image', alt: '3' },
  ]

  newproduct: Img[] = [
    { src: 'https://cdn-img1.imgworlds.com/assets/51699d91-5240-4f58-bcbc-bf2b50d220e6.jpeg?key=promo-image', alt: '2' },
    { src: 'https://cdn-img1.imgworlds.com/assets/929c2a00-a8dc-4924-849e-4ef085cc8011.jpg?key=promo-image', alt: '3' },
    { src: 'https://cdn-img1.imgworlds.com/assets/51699d91-5240-4f58-bcbc-bf2b50d220e6.jpeg?key=promo-image', alt: '2' },
    { src: 'https://cdn-img1.imgworlds.com/assets/929c2a00-a8dc-4924-849e-4ef085cc8011.jpg?key=promo-image', alt: '3' },
  ]

  product: Product[] = [
    {
      id: 'gahyu12@0px',
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPNQlAqVe0PxemLbEjrnMzokTpHTYpxDcnpA&usqp=CAU',
      off: 200,
      price: 189.2,
      whole: 189.2,
      count: 1,
      situation: 'none',
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
      situation: 'none',
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
      situation: 'none',
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
      situation: 'none',
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
      situation: 'none',
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
      situation: 'none',
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
      situation: 'none',
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
      situation: 'none',
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
    },
    {
      id: 'glp86ui90px',
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPNQlAqVe0PxemLbEjrnMzokTpHTYpxDcnpA&usqp=CAU',
      off: 109,
      price: 109,
      whole: 109,
      situation: 'none',
      count: 1,
      description: {
        name: 'sunscreen 125cd',
        caption: 'this is the best product in our store. we want to say something new do you wnt?. products are cheap and you can\'t say I won\'t this product',
        situation: {
          productNumber: 62,
          property: {
            sutible: 'sutible for dry skin',
            weight: '1000 gr'
          },
          colors: 'yellow white orange',
        }
      }
    }

  ]

  constructor() { }
}
