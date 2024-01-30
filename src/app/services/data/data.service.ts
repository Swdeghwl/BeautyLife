import { Injectable } from '@angular/core';
import { Count, HomePage, Img, New, Product, productSituation, sliderSituation, typeProduct } from 'src/app/interface/interface';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  slider: Img[] = [
    { src: 'https://cdn-img1.imgworlds.com/assets/51699d91-5240-4f58-bcbc-bf2b50d220e6.jpeg?key=promo-image', alt: '1', situation: sliderSituation.homepageSlider },
    { src: 'https://cdn-img1.imgworlds.com/assets/51699d91-5240-4f58-bcbc-bf2b50d220e6.jpeg?key=promo-image', alt: '1', situation: sliderSituation.homepageSlider },
    { src: 'https://cdn-img1.imgworlds.com/assets/929c2a00-a8dc-4924-849e-4ef085cc8011.jpg?key=promo-image', alt: '3', situation: sliderSituation.homepageSlider },
  ]

  slidersecond: Img[] = [
    { src: 'https://cdn-img1.imgworlds.com/assets/51699d91-5240-4f58-bcbc-bf2b50d220e6.jpeg?key=promo-image', alt: '1', situation: sliderSituation.homepageSlider },
  ]

  side: Count[] = [
    { src: 'https://cdn-img1.imgworlds.com/assets/51699d91-5240-4f58-bcbc-bf2b50d220e6.jpeg?key=promo-image', name: 'name', count: 32 },
    { src: 'https://cdn-img1.imgworlds.com/assets/51699d91-5240-4f58-bcbc-bf2b50d220e6.jpeg?key=promo-image', name: 'name', count: 61 },
    { src: 'https://cdn-img1.imgworlds.com/assets/929c2a00-a8dc-4924-849e-4ef085cc8011.jpg?key=promo-image', name: 'name', count: 76 },
    { src: 'https://cdn-img1.imgworlds.com/assets/929c2a00-a8dc-4924-849e-4ef085cc8011.jpg?key=promo-image', name: 'name', count: 26 },
    { src: 'https://cdn-img1.imgworlds.com/assets/929c2a00-a8dc-4924-849e-4ef085cc8011.jpg?key=promo-image', name: 'name', count: 91 },
    { src: 'https://cdn-img1.imgworlds.com/assets/929c2a00-a8dc-4924-849e-4ef085cc8011.jpg?key=promo-image', name: 'name', count: 12 },
  ]

  products: Count[] = [
    { src: 'https://cdn-img1.imgworlds.com/assets/51699d91-5240-4f58-bcbc-bf2b50d220e6.jpeg?key=promo-image', name: 'name', count: 32, routerAddress: 'product', routerId: 'gp092k' },
    { src: 'https://cdn-img1.imgworlds.com/assets/51699d91-5240-4f58-bcbc-bf2b50d220e6.jpeg?key=promo-image', name: 'name', count: 61, routerAddress: 'product', routerId: 'ghrw34' },
    { src: 'https://cdn-img1.imgworlds.com/assets/929c2a00-a8dc-4924-849e-4ef085cc8011.jpg?key=promo-image', name: 'name', count: 76, routerAddress: 'product', routerId: 'klq23p' },
  ]


  firstProducts: Count[] = [
    { src: 'https://cdn-img1.imgworlds.com/assets/51699d91-5240-4f58-bcbc-bf2b50d220e6.jpeg?key=promo-image', name: 'name', count: 11, routerAddress: 'product', routerId: 'uifg9uvu' },
    { src: 'https://cdn-img1.imgworlds.com/assets/51699d91-5240-4f58-bcbc-bf2b50d220e6.jpeg?key=promo-image', name: 'name', count: 12, routerAddress: 'product', routerId: '0985uiy98' },
    { src: 'https://cdn-img1.imgworlds.com/assets/929c2a00-a8dc-4924-849e-4ef085cc8011.jpg?key=promo-image', name: 'name', count: 13, routerAddress: 'product', routerId: 'ospeifje87' },
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
    { src: 'https://cdn-img1.imgworlds.com/assets/51699d91-5240-4f58-bcbc-bf2b50d220e6.jpeg?key=promo-image', alt: '1', situation: sliderSituation.homepageSlider },
    { src: 'https://cdn-img1.imgworlds.com/assets/929c2a00-a8dc-4924-849e-4ef085cc8011.jpg?key=promo-image', alt: '3', situation: sliderSituation.homepageSlider },
    { src: 'https://cdn-img1.imgworlds.com/assets/929c2a00-a8dc-4924-849e-4ef085cc8011.jpg?key=promo-image', alt: '3', situation: sliderSituation.homepageSlider }
  ]

  newprand: Img[] = [
    { src: 'https://cdn-img1.imgworlds.com/assets/51699d91-5240-4f58-bcbc-bf2b50d220e6.jpeg?key=promo-image', alt: '2', situation: sliderSituation.homepageSlider },
    { src: 'https://cdn-img1.imgworlds.com/assets/929c2a00-a8dc-4924-849e-4ef085cc8011.jpg?key=promo-image', alt: '3', situation: sliderSituation.homepageSlider },
    { src: 'https://cdn-img1.imgworlds.com/assets/51699d91-5240-4f58-bcbc-bf2b50d220e6.jpeg?key=promo-image', alt: '2', situation: sliderSituation.homepageSlider },
    { src: 'https://cdn-img1.imgworlds.com/assets/929c2a00-a8dc-4924-849e-4ef085cc8011.jpg?key=promo-image', alt: '3', situation: sliderSituation.homepageSlider },
  ]

  newproduct: Img[] = [
    { src: 'https://cdn-img1.imgworlds.com/assets/51699d91-5240-4f58-bcbc-bf2b50d220e6.jpeg?key=promo-image', alt: '2', situation: sliderSituation.homepageSlider },
    { src: 'https://cdn-img1.imgworlds.com/assets/929c2a00-a8dc-4924-849e-4ef085cc8011.jpg?key=promo-image', alt: '3', situation: sliderSituation.homepageSlider },
    { src: 'https://cdn-img1.imgworlds.com/assets/51699d91-5240-4f58-bcbc-bf2b50d220e6.jpeg?key=promo-image', alt: '2', situation: sliderSituation.homepageSlider },
    { src: 'https://cdn-img1.imgworlds.com/assets/929c2a00-a8dc-4924-849e-4ef085cc8011.jpg?key=promo-image', alt: '3', situation: sliderSituation.homepageSlider },
  ]

  product: Product[] = [
    {
      id: 'gahyu12@0px',
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPNQlAqVe0PxemLbEjrnMzokTpHTYpxDcnpA&usqp=CAU',
      off: 200,
      price: 189.2,
      whole: 189.2,
      count: 1,
      situation: productSituation.new,
      type: typeProduct.firstProduct,
      description: {
        name: 'sunscreen 125cd',
        caption: 'this is the in our store. we want to say something new do you wnt?. products are cheap and you can\'t say I won\'t this product',
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
      situation: productSituation.new,
      type: typeProduct.firstProduct,
      description: {
        name: 'sunscreen 125cd',
        caption: 'this is the in our store. we want to say something new do you wnt?. products are cheap and you can\'t say I won\'t this product',
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
      situation: productSituation.new,
      type: typeProduct.firstProduct,
      description: {
        name: 'sunscreen 125cd',
        caption: 'this is the in our store. we want to say something new do you wnt?. products are cheap and you can\'t say I won\'t this product',
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
      situation: productSituation.new,
      type: typeProduct.firstProduct,
      count: 1,
      description: {
        name: 'sunscreen 125cd',
        caption: 'this is the in our store. we want to say something new do you wnt?. products are cheap and you can\'t say I won\'t this product',
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
      situation: productSituation.new,
      type: typeProduct.firstProduct,
      count: 1,
      description: {
        name: 'sunscreen 125cd',
        caption: 'this is the in our store. we want to say something new do you wnt?. products are cheap and you can\'t say I won\'t this product',
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
      situation: productSituation.new,
      type: typeProduct.firstProduct,
      count: 1,
      description: {
        name: 'sunscreen 125cd',
        caption: 'this is the in our store. we want to say something new do you wnt?. products are cheap and you can\'t say I won\'t this product',
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
      situation: productSituation.new,
      type: typeProduct.firstProduct,
      count: 1,
      description: {
        name: 'sunscreen 125cd',
        caption: 'this is the in our store. we want to say something new do you wnt?. products are cheap and you can\'t say I won\'t this product',
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
      situation: productSituation.new,
      type: typeProduct.firstProduct,
      count: 1,
      description: {
        name: 'sunscreen 125cd',
        caption: 'this is the in our store. we want to say something new do you wnt?. products are cheap and you can\'t say I won\'t this product',
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
      situation: productSituation.new,
      type: typeProduct.firstProduct,
      count: 1,
      description: {
        name: 'sunscreen 125cd',
        caption: 'this is the in our store. we want to say something new do you wnt?. products are cheap and you can\'t say I won\'t this product',
        situation: {
          productNumber: 62,
          property: {
            sutible: 'sutible for dry skin',
            weight: '1000 gr'
          },
          colors: 'yellow white orange',
        }
      }
    },
  ]

  productAll: Product[] = [
    {
      id: 'gahyu12@0px',
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPNQlAqVe0PxemLbEjrnMzokTpHTYpxDcnpA&usqp=CAU',
      off: 200,
      price: 189.2,
      whole: 189.2,
      count: 1,
      situation: productSituation.new,
      type: typeProduct.firstProduct,
      description: {
        name: 'sunscreen 125cd',
        caption: 'this is the in our store. we want to say something new do you wnt?. products are cheap and you can\'t say I won\'t this product',
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
      situation: productSituation.new,
      type: typeProduct.firstProduct,
      description: {
        name: 'sunscreen 125cd',
        caption: 'this is the in our store. we want to say something new do you wnt?. products are cheap and you can\'t say I won\'t this product',
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
      situation: productSituation.new,
      type: typeProduct.firstProduct,
      description: {
        name: 'sunscreen 125cd',
        caption: 'this is the in our store. we want to say something new do you wnt?. products are cheap and you can\'t say I won\'t this product',
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
      situation: productSituation.new,
      type: typeProduct.firstProduct,
      count: 1,
      description: {
        name: 'sunscreen 125cd',
        caption: 'this is the in our store. we want to say something new do you wnt?. products are cheap and you can\'t say I won\'t this product',
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
      situation: productSituation.new,
      type: typeProduct.firstProduct,
      count: 1,
      description: {
        name: 'sunscreen 125cd',
        caption: 'this is the in our store. we want to say something new do you wnt?. products are cheap and you can\'t say I won\'t this product',
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
      situation: productSituation.new,
      type: typeProduct.firstProduct,
      count: 1,
      description: {
        name: 'sunscreen 125cd',
        caption: 'this is the in our store. we want to say something new do you wnt?. products are cheap and you can\'t say I won\'t this product',
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
      situation: productSituation.new,
      type: typeProduct.firstProduct,
      count: 1,
      description: {
        name: 'sunscreen 125cd',
        caption: 'this is the in our store. we want to say something new do you wnt?. products are cheap and you can\'t say I won\'t this product',
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
      situation: productSituation.new,
      type: typeProduct.firstProduct,
      count: 1,
      description: {
        name: 'sunscreen 125cd',
        caption: 'this is the in our store. we want to say something new do you wnt?. products are cheap and you can\'t say I won\'t this product',
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
      situation: productSituation.new,
      type: typeProduct.firstProduct,
      count: 1,
      description: {
        name: 'sunscreen 125cd',
        caption: 'this is the in our store. we want to say something new do you wnt?. products are cheap and you can\'t say I won\'t this product',
        situation: {
          productNumber: 62,
          property: {
            sutible: 'sutible for dry skin',
            weight: '1000 gr'
          },
          colors: 'yellow white orange',
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
      situation: productSituation.new,
      type: typeProduct.firstProduct,
      description: {
        name: 'sunscreen 125cd',
        caption: 'this is the in our store. we want to say something new do you wnt?. products are cheap and you can\'t say I won\'t this product',
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
      situation: productSituation.new,
      type: typeProduct.firstProduct,
      description: {
        name: 'sunscreen 125cd',
        caption: 'this is the in our store. we want to say something new do you wnt?. products are cheap and you can\'t say I won\'t this product',
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
      situation: productSituation.new,
      type: typeProduct.firstProduct,
      count: 1,
      description: {
        name: 'sunscreen 125cd',
        caption: 'this is the in our store. we want to say something new do you wnt?. products are cheap and you can\'t say I won\'t this product',
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
      situation: productSituation.new,
      type: typeProduct.firstProduct,
      count: 1,
      description: {
        name: 'sunscreen 125cd',
        caption: 'this is the in our store. we want to say something new do you wnt?. products are cheap and you can\'t say I won\'t this product',
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
      situation: productSituation.new,
      type: typeProduct.firstProduct,
      count: 1,
      description: {
        name: 'sunscreen 125cd',
        caption: 'this is the in our store. we want to say something new do you wnt?. products are cheap and you can\'t say I won\'t this product',
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
      situation: productSituation.new,
      type: typeProduct.firstProduct,
      count: 1,
      description: {
        name: 'sunscreen 125cd',
        caption: 'this is the in our store. we want to say something new do you wnt?. products are cheap and you can\'t say I won\'t this product',
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
      situation: productSituation.new,
      type: typeProduct.firstProduct,
      count: 1,
      description: {
        name: 'sunscreen 125cd',
        caption: 'this is the in our store. we want to say something new do you wnt?. products are cheap and you can\'t say I won\'t this product',
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
      situation: productSituation.new,
      type: typeProduct.firstProduct,
      count: 1,
      description: {
        name: 'sunscreen 125cd',
        caption: 'this is the in our store. we want to say something new do you wnt?. products are cheap and you can\'t say I won\'t this product',
        situation: {
          productNumber: 62,
          property: {
            sutible: 'sutible for dry skin',
            weight: '1000 gr'
          },
          colors: 'yellow white orange',
        }
      }
    },
  ]

  constructor() { }

  homepage() {
    return {
      slider: this.slider,
      category: this.category,
      products: this.products,
      newProduct: this.product,
      newImg: this.newproduct,
      popularProduct: this.product,
      popularImg: this.newproduct,
      brands: this.side,
      news: this.news,
    }
  }

  firstproduct(){
    return {
    slider: this.slider,
    category: this.category,
    newProduct: this.product,
    popularProduct: this.product,
    allProduct: this.productAll,
    }
  }

  secondproduct(){
    return {
    slider: this.slidersecond,
    category: this.category,
    newProduct: this.product,
    popularProduct: this.product,
    allProduct: this.productAll,
    }
  }

  thirdproduct(){
    return {
    slider: this.slider,
    category: this.category,
    newProduct: this.product,
    popularProduct: this.product,
    allProduct: this.productAll,
    }
  }
}
