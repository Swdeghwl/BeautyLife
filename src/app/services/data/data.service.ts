import { Injectable } from '@angular/core';
import { Count, Img, New, Product, Slider, countSituatoin, imgSituation, productSituation, sliderSituation, typeProduct } from 'src/app/interface/interface';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  product(): Product[] {
    return [
      {
        id: '1',
        src: 'https://picsum.photos/id/1/200/300',
        off: 15,
        price: 60,
        whole: 60,
        count: 1,
        situation: productSituation.popular,
        type: typeProduct.firstProduct,
        description: {
          name: 'Product X',
          caption: 'A popular product with color and suitability filters',
          situation: {
            productNumber: 3,
            filter: [
              {
                filterType: 'color',
                filterName: ['red'],
              },
              {
                filterType: 'sutible',
                filterName: ['dry'],
              },
            ],
          },
        },
      },
      {
        id: '2',
        src: 'https://picsum.photos/id/2/200/300',
        off: 10,
        price: 50,
        whole: 50,
        count: 1,
        situation: productSituation.new,
        type: typeProduct.secondProduct,
        description: {
          name: 'Product Y',
          caption: 'A new product with color and suitability filters',
          situation: {
            productNumber: 2,
            filter: [
              {
                filterType: 'color',
                filterName: ['green'],
              },
              {
                filterType: 'sutible',
                filterName: ['wet'],
              },
            ],
          },
        },
      },
      {
        id: '3',
        src: 'https://picsum.photos/id/3/200/300',
        off: 25,
        price: 80,
        whole: 80,
        count: 1,
        situation: productSituation.popular,
        type: typeProduct.thirdProduct,
        description: {
          name: 'Product Z',
          caption: 'Another popular product with color and suitability filters',
          situation: {
            productNumber: 5,
            filter: [
              {
                filterType: 'color',
                filterName: ['black'],
              },
              {
                filterType: 'sutible',
                filterName: ['dry'],
              },
            ],
          },
        },
      },
      {
        id: '4',
        src: 'https://picsum.photos/id/4/200/300',
        off: 18,
        price: 70,
        whole: 70,
        count: 1,
        situation: productSituation.new,
        type: typeProduct.firstProduct,
        description: {
          name: 'Product W',
          caption: 'A new product with color and suitability filters',
          situation: {
            productNumber: 6,
            filter: [
              {
                filterType: 'color',
                filterName: ['gray'],
              },
              {
                filterType: 'sutible',
                filterName: ['wet'],
              },
            ],
          },
        },
      },
      {
        id: '5',
        src: 'https://picsum.photos/id/5/200/300',
        off: 12,
        price: 55,
        whole: 55,
        count: 1,
        situation: productSituation.popular,
        type: typeProduct.secondProduct,
        description: {
          name: 'Product V',
          caption: 'Another popular product with color and suitability filters',
          situation: {
            productNumber: 8,
            filter: [
              {
                filterType: 'color',
                filterName: ['red'],
              },
              {
                filterType: 'sutible',
                filterName: ['dry'],
              },
            ],
          },
        },
      },
      {
        id: '6',
        src: 'https://picsum.photos/id/6/200/300',
        off: 20,
        price: 65,
        whole: 65,
        count: 1,
        situation: productSituation.new,
        type: typeProduct.thirdProduct,
        description: {
          name: 'Product U',
          caption: 'A new product with color and suitability filters',
          situation: {
            productNumber: 1,
            filter: [
              {
                filterType: 'color',
                filterName: ['green'],
              },
              {
                filterType: 'sutible',
                filterName: ['wet'],
              },
            ],
          },
        },
      },
      {
        id: '7',
        src: 'https://picsum.photos/id/7/200/300',
        off: 15,
        price: 60,
        whole: 60,
        count: 1,
        situation: productSituation.popular,
        type: typeProduct.firstProduct,
        description: {
          name: 'Product T',
          caption: 'A popular product with color and suitability filters',
          situation: {
            productNumber: 3,
            filter: [
              {
                filterType: 'color',
                filterName: ['red'],
              },
              {
                filterType: 'sutible',
                filterName: ['dry'],
              },
            ],
          },
        },
      },
      {
        id: '8',
        src: 'https://picsum.photos/id/8/200/300',
        off: 10,
        price: 50,
        whole: 50,
        count: 1,
        situation: productSituation.new,
        type: typeProduct.secondProduct,
        description: {
          name: 'Product S',
          caption: 'A new product with color and suitability filters',
          situation: {
            productNumber: 2,
            filter: [
              {
                filterType: 'color',
                filterName: ['green'],
              },
              {
                filterType: 'sutible',
                filterName: ['wet'],
              },
            ],
          },
        },
      },
      {
        id: '9',
        src: 'https://picsum.photos/id/9/200/300',
        off: 25,
        price: 80,
        whole: 80,
        count: 1,
        situation: productSituation.popular,
        type: typeProduct.thirdProduct,
        description: {
          name: 'Product R',
          caption: 'Another popular product with color and suitability filters',
          situation: {
            productNumber: 5,
            filter: [
              {
                filterType: 'color',
                filterName: ['black'],
              },
              {
                filterType: 'sutible',
                filterName: ['dry'],
              },
            ],
          },
        },
      },
      {
        id: '10',
        src: 'https://picsum.photos/id/10/200/300',
        off: 18,
        price: 70,
        whole: 70,
        count: 1,
        situation: productSituation.new,
        type: typeProduct.firstProduct,
        description: {
          name: 'Product Q',
          caption: 'A new product with color and suitability filters',
          situation: {
            productNumber: 6,
            filter: [
              {
                filterType: 'color',
                filterName: ['gray'],
              },
              {
                filterType: 'sutible',
                filterName: ['wet'],
              },
            ],
          },
        },
      },
      {
        id: '11',
        src: 'https://picsum.photos/id/11/200/300',
        off: 20,
        price: 70,
        whole: 70,
        count: 1,
        situation: productSituation.popular,
        type: typeProduct.secondProduct,
        description: {
          name: 'Product P',
          caption: 'Another popular product with color and suitability filters',
          situation: {
            productNumber: 8,
            filter: [
              {
                filterType: 'color',
                filterName: ['red'],
              },
              {
                filterType: 'sutible',
                filterName: ['wet'],
              },
            ],
          },
        },
      },
      {
        id: '12',
        src: 'https://picsum.photos/id/12/200/300',
        off: 15,
        price: 65,
        whole: 65,
        count: 1,
        situation: productSituation.new,
        type: typeProduct.thirdProduct,
        description: {
          name: 'Product O',
          caption: 'A new product with color and suitability filters',
          situation: {
            productNumber: 4,
            filter: [
              {
                filterType: 'color',
                filterName: ['green'],
              },
              {
                filterType: 'sutible',
                filterName: ['dry'],
              },
            ],
          },
        },
      },
      {
        id: '13',
        src: 'https://picsum.photos/id/13/200/300',
        off: 22,
        price: 75,
        whole: 75,
        count: 1,
        situation: productSituation.popular,
        type: typeProduct.secondProduct,
        description: {
          name: 'Product N',
          caption: 'Another popular product with color and suitability filters',
          situation: {
            productNumber: 7,
            filter: [
              {
                filterType: 'color',
                filterName: ['blue'],
              },
              {
                filterType: 'sutible',
                filterName: ['wet'],
              },
            ],
          },
        },
      },
      {
        id: '14',
        src: 'https://picsum.photos/id/14/200/300',
        off: 12,
        price: 55,
        whole: 55,
        count: 1,
        situation: productSituation.new,
        type: typeProduct.firstProduct,
        description: {
          name: 'Product M',
          caption: 'A new product with color and suitability filters',
          situation: {
            productNumber: 10,
            filter: [
              {
                filterType: 'color',
                filterName: ['orange'],
              },
              {
                filterType: 'sutible',
                filterName: ['dry'],
              },
            ],
          },
        },
      },
      {
        id: '15',
        src: 'https://picsum.photos/id/15/200/300',
        off: 18,
        price: 70,
        whole: 70,
        count: 1,
        situation: productSituation.nothing,
        type: typeProduct.firstProduct,
        description: {
          name: 'Product L',
          caption: 'A product with color and suitability filters',
          situation: {
            productNumber: 9,
            filter: [
              {
                filterType: 'color',
                filterName: ['purple'],
              },
              {
                filterType: 'sutible',
                filterName: ['wet'],
              },
            ],
          },
        },
      },
      {
        id: '16',
        src: 'https://picsum.photos/id/16/200/300',
        off: 20,
        price: 75,
        whole: 75,
        count: 1,
        situation: productSituation.nothing,
        type: typeProduct.secondProduct,
        description: {
          name: 'Product K',
          caption: 'A product with color and suitability filters',
          situation: {
            productNumber: 11,
            filter: [
              {
                filterType: 'color',
                filterName: ['yellow'],
              },
              {
                filterType: 'sutible',
                filterName: ['dry'],
              },
            ],
          },
        },
      },
      {
        id: '17',
        src: 'https://picsum.photos/id/17/200/300',
        off: 15,
        price: 65,
        whole: 65,
        count: 1,
        situation: productSituation.nothing,
        type: typeProduct.thirdProduct,
        description: {
          name: 'Product J',
          caption: 'A product with color and suitability filters',
          situation: {
            productNumber: 12,
            filter: [
              {
                filterType: 'color',
                filterName: ['brown'],
              },
              {
                filterType: 'sutible',
                filterName: ['normal'],
              },
            ],
          },
        },
      },
      {
        id: '18',
        src: 'https://picsum.photos/id/18/200/300',
        off: 22,
        price: 80,
        whole: 80,
        count: 1,
        situation: productSituation.nothing,
        type: typeProduct.firstProduct,
        description: {
          name: 'Product I',
          caption: 'A product with color and suitability filters',
          situation: {
            productNumber: 13,
            filter: [
              {
                filterType: 'color',
                filterName: ['cyan'],
              },
              {
                filterType: 'sutible',
                filterName: ['normal'],
              },
            ],
          },
        },
      },
      {
        id: '19',
        src: 'https://picsum.photos/id/19/200/300',
        off: 12,
        price: 55,
        whole: 55,
        count: 1,
        situation: productSituation.nothing,
        type: typeProduct.secondProduct,
        description: {
          name: 'Product H',
          caption: 'A product with color and suitability filters',
          situation: {
            productNumber: 14,
            filter: [
              {
                filterType: 'color',
                filterName: ['magenta'],
              },
              {
                filterType: 'sutible',
                filterName: ['normal'],
              },
            ],
          },
        },
      },
      {
        id: '20',
        src: 'https://picsum.photos/id/20/200/300',
        off: 18,
        price: 70,
        whole: 70,
        count: 1,
        situation: productSituation.nothing,
        type: typeProduct.thirdProduct,
        description: {
          name: 'Product G',
          caption: 'A product with color and suitability filters',
          situation: {
            productNumber: 15,
            filter: [
              {
                filterType: 'color',
                filterName: ['orange'],
              },
              {
                filterType: 'sutible',
                filterName: ['dry'],
              },
            ],
          },
        },
      },
      {
        id: '21',
        src: 'https://picsum.photos/id/21/200/300',
        off: 20,
        price: 75,
        whole: 75,
        count: 1,
        situation: productSituation.nothing,
        type: typeProduct.firstProduct,
        description: {
          name: 'Product F',
          caption: 'A product with color and suitability filters',
          situation: {
            productNumber: 16,
            filter: [
              {
                filterType: 'color',
                filterName: ['yellow'],
              },
              {
                filterType: 'sutible',
                filterName: ['wet'],
              },
            ],
          },
        },
      },
      {
        id: '22',
        src: 'https://picsum.photos/id/22/200/300',
        off: 15,
        price: 65,
        whole: 65,
        count: 1,
        situation: productSituation.nothing,
        type: typeProduct.secondProduct,
        description: {
          name: 'Product E',
          caption: 'A product with color and suitability filters',
          situation: {
            productNumber: 17,
            filter: [
              {
                filterType: 'color',
                filterName: ['brown'],
              },
              {
                filterType: 'sutible',
                filterName: ['wet'],
              },
            ],
          },
        },
      },
      {
        id: '23',
        src: 'https://picsum.photos/id/23/200/300',
        off: 22,
        price: 80,
        whole: 80,
        count: 1,
        situation: productSituation.nothing,
        type: typeProduct.thirdProduct,
        description: {
          name: 'Product D',
          caption: 'A product with color and suitability filters',
          situation: {
            productNumber: 18,
            filter: [
              {
                filterType: 'color',
                filterName: ['cyan'],
              },
              {
                filterType: 'sutible',
                filterName: ['dry'],
              },
            ],
          },
        },
      },
      {
        id: '24',
        src: 'https://picsum.photos/id/24/200/300',
        off: 12,
        price: 55,
        whole: 55,
        count: 1,
        situation: productSituation.nothing,
        type: typeProduct.firstProduct,
        description: {
          name: 'Product C',
          caption: 'A product with color and suitability filters',
          situation: {
            productNumber: 19,
            filter: [
              {
                filterType: 'color',
                filterName: ['magenta'],
              },
              {
                filterType: 'sutible',
                filterName: ['wet'],
              },
            ],
          },
        },
      },
      {
        id: '25',
        src: 'https://picsum.photos/id/25/200/300',
        off: 18,
        price: 70,
        whole: 70,
        count: 1,
        situation: productSituation.nothing,
        type: typeProduct.secondProduct,
        description: {
          name: 'Product B',
          caption: 'A product with color and suitability filters',
          situation: {
            productNumber: 20,
            filter: [
              {
                filterType: 'color',
                filterName: ['purple'],
              },
              {
                filterType: 'sutible',
                filterName: ['wet'],
              },
            ],
          },
        },
      },
      {
        id: '26',
        src: 'https://picsum.photos/id/26/200/300',
        off: 20,
        price: 75,
        whole: 75,
        count: 1,
        situation: productSituation.nothing,
        type: typeProduct.thirdProduct,
        description: {
          name: 'Product A',
          caption: 'A product with color and suitability filters',
          situation: {
            productNumber: 21,
            filter: [
              {
                filterType: 'color',
                filterName: ['yellow'],
              },
              {
                filterType: 'sutible',
                filterName: ['dry'],
              },
            ],
          },
        },
      },
      {
        id: '27',
        src: 'https://picsum.photos/id/27/200/300',
        off: 15,
        price: 65,
        whole: 65,
        count: 1,
        situation: productSituation.nothing,
        type: typeProduct.firstProduct,
        description: {
          name: 'Product Z',
          caption: 'A product with color and suitability filters',
          situation: {
            productNumber: 22,
            filter: [
              {
                filterType: 'color',
                filterName: ['brown'],
              },
              {
                filterType: 'sutible',
                filterName: ['wet'],
              },
            ],
          },
        },
      },
      {
        id: '28',
        src: 'https://picsum.photos/id/28/200/300',
        off: 22,
        price: 80,
        whole: 80,
        count: 1,
        situation: productSituation.nothing,
        type: typeProduct.secondProduct,
        description: {
          name: 'Product Y',
          caption: 'A product with color and suitability filters',
          situation: {
            productNumber: 23,
            filter: [
              {
                filterType: 'color',
                filterName: ['cyan'],
              },
              {
                filterType: 'sutible',
                filterName: ['dry'],
              },
            ],
          },
        },
      },
      {
        id: '29',
        src: 'https://picsum.photos/id/29/200/300',
        off: 12,
        price: 55,
        whole: 55,
        count: 1,
        situation: productSituation.nothing,
        type: typeProduct.thirdProduct,
        description: {
          name: 'Product X',
          caption: 'A product with color and suitability filters',
          situation: {
            productNumber: 24,
            filter: [
              {
                filterType: 'color',
                filterName: ['magenta'],
              },
              {
                filterType: 'sutible',
                filterName: ['wet'],
              },
            ],
          },
        },
      },
      {
        id: '30',
        src: 'https://picsum.photos/id/30/200/300',
        off: 18,
        price: 70,
        whole: 70,
        count: 1,
        situation: productSituation.nothing,
        type: typeProduct.firstProduct,
        description: {
          name: 'Product W',
          caption: 'A product with color and suitability filters',
          situation: {
            productNumber: 25,
            filter: [
              {
                filterType: 'color',
                filterName: ['orange'],
              },
              {
                filterType: 'sutible',
                filterName: ['wet'],
              },
            ],
          },
        },
      },
      {
        id: '31',
        src: 'https://picsum.photos/id/31/200/300',
        off: 20,
        price: 75,
        whole: 75,
        count: 1,
        situation: productSituation.nothing,
        type: typeProduct.secondProduct,
        description: {
          name: 'Product V',
          caption: 'A product with color and suitability filters',
          situation: {
            productNumber: 26,
            filter: [
              {
                filterType: 'color',
                filterName: ['yellow'],
              },
              {
                filterType: 'sutible',
                filterName: ['dry'],
              },
            ],
          },
        },
      },
      {
        id: '32',
        src: 'https://picsum.photos/id/32/200/300',
        off: 15,
        price: 65,
        whole: 65,
        count: 1,
        situation: productSituation.nothing,
        type: typeProduct.thirdProduct,
        description: {
          name: 'Product U',
          caption: 'A product with color and suitability filters',
          situation: {
            productNumber: 27,
            filter: [
              {
                filterType: 'color',
                filterName: ['brown'],
              },
              {
                filterType: 'sutible',
                filterName: ['wet'],
              },
            ],
          },
        },
      },
      {
        id: '33',
        src: 'https://picsum.photos/id/33/200/300',
        off: 22,
        price: 80,
        whole: 80,
        count: 1,
        situation: productSituation.nothing,
        type: typeProduct.firstProduct,
        description: {
          name: 'Product T',
          caption: 'A product with color and suitability filters',
          situation: {
            productNumber: 28,
            filter: [
              {
                filterType: 'color',
                filterName: ['cyan'],
              },
              {
                filterType: 'sutible',
                filterName: ['dry'],
              },
            ],
          },
        },
      },
      {
        id: '34',
        src: 'https://picsum.photos/id/34/200/300',
        off: 12,
        price: 55,
        whole: 55,
        count: 1,
        situation: productSituation.nothing,
        type: typeProduct.secondProduct,
        description: {
          name: 'Product S',
          caption: 'A product with color and suitability filters',
          situation: {
            productNumber: 29,
            filter: [
              {
                filterType: 'color',
                filterName: ['magenta'],
              },
              {
                filterType: 'sutible',
                filterName: ['wet'],
              },
            ],
          },
        },
      },
      {
        id: '35',
        src: 'https://picsum.photos/id/35/200/300',
        off: 18,
        price: 70,
        whole: 70,
        count: 1,
        situation: productSituation.nothing,
        type: typeProduct.thirdProduct,
        description: {
          name: 'Product R',
          caption: 'A product with color and suitability filters',
          situation: {
            productNumber: 30,
            filter: [
              {
                filterType: 'color',
                filterName: ['purple'],
              },
              {
                filterType: 'sutible',
                filterName: ['wet'],
              },
            ],
          },
        },
      },
      {
        id: '36',
        src: 'https://picsum.photos/id/36/200/300',
        off: 20,
        price: 75,
        whole: 75,
        count: 1,
        situation: productSituation.nothing,
        type: typeProduct.firstProduct,
        description: {
          name: 'Product Q',
          caption: 'A product with color and suitability filters',
          situation: {
            productNumber: 31,
            filter: [
              {
                filterType: 'color',
                filterName: ['yellow'],
              },
              {
                filterType: 'sutible',
                filterName: ['dry'],
              },
            ],
          },
        },
      },
      {
        id: '37',
        src: 'https://picsum.photos/id/37/200/300',
        off: 15,
        price: 65,
        whole: 65,
        count: 1,
        situation: productSituation.nothing,
        type: typeProduct.secondProduct,
        description: {
          name: 'Product P',
          caption: 'A product with color and suitability filters',
          situation: {
            productNumber: 32,
            filter: [
              {
                filterType: 'color',
                filterName: ['brown'],
              },
              {
                filterType: 'sutible',
                filterName: ['wet'],
              },
            ],
          },
        },
      },
      {
        id: '38',
        src: 'https://picsum.photos/id/38/200/300',
        off: 22,
        price: 80,
        whole: 80,
        count: 1,
        situation: productSituation.nothing,
        type: typeProduct.thirdProduct,
        description: {
          name: 'Product O',
          caption: 'A product with color and suitability filters',
          situation: {
            productNumber: 33,
            filter: [
              {
                filterType: 'color',
                filterName: ['cyan'],
              },
              {
                filterType: 'sutible',
                filterName: ['dry'],
              },
            ],
          },
        },
      },
      {
        id: '39',
        src: 'https://picsum.photos/id/39/200/300',
        off: 12,
        price: 55,
        whole: 55,
        count: 1,
        situation: productSituation.nothing,
        type: typeProduct.firstProduct,
        description: {
          name: 'Product N',
          caption: 'A product with color and suitability filters',
          situation: {
            productNumber: 34,
            filter: [
              {
                filterType: 'color',
                filterName: ['magenta'],
              },
              {
                filterType: 'sutible',
                filterName: ['wet'],
              },
            ],
          },
        },
      },
      {
        id: '40',
        src: 'https://picsum.photos/id/40/200/300',
        off: 18,
        price: 70,
        whole: 70,
        count: 1,
        situation: productSituation.new,
        type: typeProduct.firstProduct,
        description: {
          name: 'Product M',
          caption: 'A new product with color and suitability filters',
          situation: {
            productNumber: 35,
            filter: [
              {
                filterType: 'color',
                filterName: ['orange'],
              },
              {
                filterType: 'sutible',
                filterName: ['wet'],
              },
            ],
          },
        },
      },
      {
        id: '41',
        src: 'https://picsum.photos/id/41/200/300',
        off: 20,
        price: 75,
        whole: 75,
        count: 1,
        situation: productSituation.popular,
        type: typeProduct.secondProduct,
        description: {
          name: 'Product L',
          caption: 'A popular product with color and suitability filters',
          situation: {
            productNumber: 36,
            filter: [
              {
                filterType: 'color',
                filterName: ['yellow'],
              },
              {
                filterType: 'sutible',
                filterName: ['dry'],
              },
            ],
          },
        },
      },
      {
        id: '42',
        src: 'https://picsum.photos/id/42/200/300',
        off: 15,
        price: 65,
        whole: 65,
        count: 1,
        situation: productSituation.new,
        type: typeProduct.thirdProduct,
        description: {
          name: 'Product K',
          caption: 'A new product with color and suitability filters',
          situation: {
            productNumber: 37,
            filter: [
              {
                filterType: 'color',
                filterName: ['brown'],
              },
              {
                filterType: 'sutible',
                filterName: ['wet'],
              },
            ],
          },
        },
      },
      {
        id: '43',
        src: 'https://picsum.photos/id/43/200/300',
        off: 22,
        price: 80,
        whole: 80,
        count: 1,
        situation: productSituation.popular,
        type: typeProduct.firstProduct,
        description: {
          name: 'Product J',
          caption: 'A popular product with color and suitability filters',
          situation: {
            productNumber: 38,
            filter: [
              {
                filterType: 'color',
                filterName: ['cyan'],
              },
              {
                filterType: 'sutible',
                filterName: ['dry'],
              },
            ],
          },
        },
      },
      {
        id: '44',
        src: 'https://picsum.photos/id/44/200/300',
        off: 12,
        price: 55,
        whole: 55,
        count: 1,
        situation: productSituation.new,
        type: typeProduct.secondProduct,
        description: {
          name: 'Product I',
          caption: 'A new product with color and suitability filters',
          situation: {
            productNumber: 39,
            filter: [
              {
                filterType: 'color',
                filterName: ['magenta'],
              },
              {
                filterType: 'sutible',
                filterName: ['wet'],
              },
            ],
          },
        },
      },
      {
        id: '45',
        src: 'https://picsum.photos/id/45/200/300',
        off: 18,
        price: 70,
        whole: 70,
        count: 1,
        situation: productSituation.new,
        type: typeProduct.thirdProduct,
        description: {
          name: 'Product H',
          caption: 'A new product with color and suitability filters',
          situation: {
            productNumber: 40,
            filter: [
              {
                filterType: 'color',
                filterName: ['purple'],
              },
              {
                filterType: 'sutible',
                filterName: ['wet'],
              },
            ],
          },
        },
      },
      {
        id: '46',
        src: 'https://picsum.photos/id/46/200/300',
        off: 20,
        price: 75,
        whole: 75,
        count: 1,
        situation: productSituation.popular,
        type: typeProduct.firstProduct,
        description: {
          name: 'Product G',
          caption: 'A popular product with color and suitability filters',
          situation: {
            productNumber: 41,
            filter: [
              {
                filterType: 'color',
                filterName: ['yellow'],
              },
              {
                filterType: 'sutible',
                filterName: ['dry'],
              },
            ],
          },
        },
      },
      {
        id: '47',
        src: 'https://picsum.photos/id/47/200/300',
        off: 15,
        price: 65,
        whole: 65,
        count: 1,
        situation: productSituation.new,
        type: typeProduct.secondProduct,
        description: {
          name: 'Product F',
          caption: 'A new product with color and suitability filters',
          situation: {
            productNumber: 42,
            filter: [
              {
                filterType: 'color',
                filterName: ['brown'],
              },
              {
                filterType: 'sutible',
                filterName: ['wet'],
              },
            ],
          },
        },
      },
      {
        id: '48',
        src: 'https://picsum.photos/id/48/200/300',
        off: 22,
        price: 80,
        whole: 80,
        count: 1,
        situation: productSituation.popular,
        type: typeProduct.thirdProduct,
        description: {
          name: 'Product E',
          caption: 'A popular product with color and suitability filters',
          situation: {
            productNumber: 43,
            filter: [
              {
                filterType: 'color',
                filterName: ['cyan'],
              },
              {
                filterType: 'sutible',
                filterName: ['dry'],
              },
            ],
          },
        },
      },
      {
        id: '49',
        src: 'https://picsum.photos/id/49/200/300',
        off: 12,
        price: 55,
        whole: 55,
        count: 1,
        situation: productSituation.new,
        type: typeProduct.firstProduct,
        description: {
          name: 'Product D',
          caption: 'A new product with color and suitability filters',
          situation: {
            productNumber: 44,
            filter: [
              {
                filterType: 'color',
                filterName: ['magenta'],
              },
              {
                filterType: 'sutible',
                filterName: ['wet'],
              },
            ],
          },
        },
      },
      {
        id: '50',
        src: 'https://picsum.photos/id/50/200/300',
        off: 18,
        price: 70,
        whole: 70,
        count: 1,
        situation: productSituation.popular,
        type: typeProduct.secondProduct,
        description: {
          name: 'Product C',
          caption: 'A popular product with color and suitability filters',
          situation: {
            productNumber: 45,
            filter: [
              {
                filterType: 'color',
                filterName: ['orange'],
              },
              {
                filterType: 'sutible',
                filterName: ['wet'],
              },
            ],
          },
        },
      },
      {
        id: '51',
        src: 'https://picsum.photos/id/51/200/300',
        off: 20,
        price: 75,
        whole: 75,
        count: 1,
        situation: productSituation.new,
        type: typeProduct.thirdProduct,
        description: {
          name: 'Product B',
          caption: 'A new product with color and suitability filters',
          situation: {
            productNumber: 46,
            filter: [
              {
                filterType: 'color',
                filterName: ['yellow'],
              },
              {
                filterType: 'sutible',
                filterName: ['dry'],
              },
            ],
          },
        },
      },
      {
        id: '52',
        src: 'https://picsum.photos/id/52/200/300',
        off: 15,
        price: 65,
        whole: 65,
        count: 1,
        situation: productSituation.popular,
        type: typeProduct.firstProduct,
        description: {
          name: 'Product A',
          caption: 'A popular product with color and suitability filters',
          situation: {
            productNumber: 47,
            filter: [
              {
                filterType: 'color',
                filterName: ['brown'],
              },
              {
                filterType: 'sutible',
                filterName: ['wet'],
              },
            ],
          },
        },
      },
      {
        id: '53',
        src: 'https://picsum.photos/id/53/200/300',
        off: 22,
        price: 80,
        whole: 80,
        count: 1,
        situation: productSituation.new,
        type: typeProduct.secondProduct,
        description: {
          name: 'Product Z',
          caption: 'A new product with color and suitability filters',
          situation: {
            productNumber: 48,
            filter: [
              {
                filterType: 'color',
                filterName: ['cyan'],
              },
              {
                filterType: 'sutible',
                filterName: ['dry'],
              },
            ],
          },
        },
      },
      {
        id: '54',
        src: 'https://picsum.photos/id/54/200/300',
        off: 12,
        price: 55,
        whole: 55,
        count: 1,
        situation: productSituation.popular,
        type: typeProduct.thirdProduct,
        description: {
          name: 'Product Y',
          caption: 'A popular product with color and suitability filters',
          situation: {
            productNumber: 49,
            filter: [
              {
                filterType: 'color',
                filterName: ['magenta'],
              },
              {
                filterType: 'sutible',
                filterName: ['wet'],
              },
            ],
          },
        },
      },
    ]
  }

  image(): Img[] {
    return [
      {
        src: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/modern-fashion-clothing-sale-ad-design-template-f1def7d5f2c1c70005fc6ed3b08f1774_screen.jpg?ts=1609970500",
        alt: "Image 1",
        situation: imgSituation.homepageAdd,
        routerId: "1"
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmmbg2uBWvWm9KiNWX6OJfh8op2vR-J-2Qiw&usqp=CAU",
        alt: "Image 2",
        situation: imgSituation.firstAdd,
        routerId: "2"
      },
      {
        src: "https://www.sliderrevolution.com/wp-content/uploads/2023/06/fashion-website-templates.jpg",
        alt: "Image 3",
        situation: imgSituation.homepageAdd,
        routerId: "3"
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROPsnS-tOsubd5QNFtreRoq6Qa2mJ7ndmqeA&usqp=CAU",
        alt: "Image 4",
        situation: imgSituation.firstAdd,
        routerId: "4"
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0BVcpxYkGgVbcgyUY3qYtwfLj2t8CKRxh5w&usqp=CAU",
        alt: "Image 5",
        situation: imgSituation.homepageAdd,
        routerId: "5"
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyrSkyfXYR-Tkxc3ecXSTCeGCVdPwYmNmY0w&usqp=CAU",
        alt: "Image 6",
        situation: imgSituation.firstAdd,
        routerId: "6"
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjocaaFAcHI5reqLDJ7Ot6pdhJfyRf9siyqTS9Yv8qwud8w7tuzZAuJPASoK42u-h2dnQ&usqp=CAU",
        alt: "Image 7",
        situation: imgSituation.secondAdd,
        routerId: "7"
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZay37h5fBC7H6q2wfrVSGAAViTTECRV84agAL1Unaj_9H8ZAQTDpBCgts-CEDMpYA0s8&usqp=CAU",
        alt: "Image 8",
        situation: imgSituation.thirdAdd,
        routerId: "8"
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlNUoip0rjoN40m2O82rNdW_pn3KoOY-xe-i0I7PtHDYTXyaJkut__OCD-LCFWjPFwyxk&usqp=CAU",
        alt: "Image 9",
        situation: imgSituation.secondAdd,
        routerId: "9"
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlbjuC0tPQHM9mUeHHTn5gz-5GU06cvY_PrWdVeUMtZomm1Idxa7JSRb_dwuSJr_hdo_g&usqp=CAU",
        alt: "Image 10",
        situation: imgSituation.thirdAdd,
        routerId: "10"
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1AwF3ZSju7-b2cgfZex1c7i1LKLH-J7PkA5egU2HrUlBo9PjskIvjpyBn_RQqxXXHleI&usqp=CAU",
        alt: "Image 11",
        situation: imgSituation.secondAdd,
        routerId: "11"
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkvL9zWSVROYbw7LAaLLvXROQHnL5-NURMhl5UMYam_lK29vnI8WhyHW5w2Sh4eulAAks&usqp=CAU",
        alt: "Image 12",
        situation: imgSituation.thirdAdd,
        routerId: "12"
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXgIRy99fNWjA6J1TJAgR4KyTdyoF23ryN20vRD2Fg_ImM0OoJ_Tc8ru7lwHzu4ANpRyE&usqp=CAU",
        alt: "Image 13",
        situation: imgSituation.popular,
        routerId: "13"
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiytsdQpLfjasanoCRRvzrp86ku4lxDeSEdxWIdYyr7OwWG2asD8g_aVMrK3Xa3WAWVhk&usqp=CAU",
        alt: "Image 14",
        situation: imgSituation.new,
        routerId: "14"
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCj7GyPm5rorpZPicMXkJQc6j_7VXLlvGuSfZqYneUiX_igs0KWb4-0RDJmXi1k5cTQyE&usqp=CAU",
        alt: "Image 15",
        situation: imgSituation.popular,
        routerId: "15"
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2BJqLDlonJRBGa23y2QP18vWwx3rxWpEa1Ckba7m4urwwZ4fmZYJRB2EM95eHosABS2M&usqp=CAU",
        alt: "Image 16",
        situation: imgSituation.new,
        routerId: "16"
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4y44nnIzHtGnaEMgT9ccQ0nVco9MOye2kPhlNyyAaSvfE1dJ-t24R5-Gki7SyJa4HCLE&usqp=CAU",
        alt: "Image 17",
        situation: imgSituation.popular,
        routerId: "17"
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQymQBHgpS6oGgbs1ZlwJaRcoVL5LQ57Xlygl14hAjPOYnWAHekd17YBu-peVhm1lNiliw&usqp=CAU",
        alt: "Image 18",
        situation: imgSituation.new,
        routerId: "18"
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzQrT_SE8NsHNWlT5epmdQRuvTsQSf69a10hUlfLDluBW5LNtrnxwzR2FDycBNV8WLDDY&usqp=CAU",
        alt: "Image 19",
        situation: imgSituation.popular,
        routerId: "19"
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToD6b8J0AbF8GwMVo9WoqVO4Rj5rq293yxQ9ZyUWLhsy4t0OuQV1A-TdXL4xOyxQVAZt0&usqp=CAU",
        alt: "Image 20",
        situation: imgSituation.new,
        routerId: "20"
      },
    ]
  }

  slider(): Slider[] {
    return [
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9LJoo2Qm69EtIbZem4GSYZk-bYh8malIVJw&usqp=CAU",
        alt: 'image 1',
        situation: sliderSituation.homepageSlider
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn4yBAmh6Tn7za9uDe0hKMvgCU1Thi6EbJpw&usqp=CAU",
        alt: 'image 2',
        situation: sliderSituation.homepageSlider
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfqsMz91-0XHExxIK3KovkL4T_3Jjn-Gz-jdO5BGf2MPj2g-pp28ol1U-pvoqvxkt5K_Y&usqp=CAU",
        alt: 'image 3',
        situation: sliderSituation.homepageSlider
      },
      {
        src: "https://phlearn.com/wp-content/uploads/2016/06/add-patterns-to-clothing-after-1200px.jpg?fit=1200%2C800&quality=99&strip=all",
        alt: 'image 4',
        situation: sliderSituation.firstSlider
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn4yBAmh6Tn7za9uDe0hKMvgCU1Thi6EbJpw&usqp=CAU",
        alt: 'image 5',
        situation: sliderSituation.firstSlider
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfqsMz91-0XHExxIK3KovkL4T_3Jjn-Gz-jdO5BGf2MPj2g-pp28ol1U-pvoqvxkt5K_Y&usqp=CAU",
        alt: 'image 6',
        situation: sliderSituation.firstSlider
      },
      {
        src: "https://phlearn.com/wp-content/uploads/2016/06/add-patterns-to-clothing-after-1200px.jpg?fit=1200%2C800&quality=99&strip=all",
        alt: 'image 7',
        situation: sliderSituation.secondSlider
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn4yBAmh6Tn7za9uDe0hKMvgCU1Thi6EbJpw&usqp=CAU",
        alt: 'image 8',
        situation: sliderSituation.secondSlider
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfqsMz91-0XHExxIK3KovkL4T_3Jjn-Gz-jdO5BGf2MPj2g-pp28ol1U-pvoqvxkt5K_Y&usqp=CAU",
        alt: 'image 9',
        situation: sliderSituation.secondSlider
      },
      {
        src: "https://phlearn.com/wp-content/uploads/2016/06/add-patterns-to-clothing-after-1200px.jpg?fit=1200%2C800&quality=99&strip=all",
        alt: 'image 10',
        situation: sliderSituation.thirdSlider
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn4yBAmh6Tn7za9uDe0hKMvgCU1Thi6EbJpw&usqp=CAU",
        alt: 'image 11',
        situation: sliderSituation.thirdSlider
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfqsMz91-0XHExxIK3KovkL4T_3Jjn-Gz-jdO5BGf2MPj2g-pp28ol1U-pvoqvxkt5K_Y&usqp=CAU",
        alt: 'image 12',
        situation: sliderSituation.thirdSlider
      },
    ]
  }

  count(): Count[] {
    return [
      {
        src: "https://www.bonsoir.co.in/cdn/shop/articles/5_Great_Men_Trending_Cloths_1024x1024.jpg?v=1645441781",
        alt: "firstProduct",
        name: "firstProduct",
        count: 65,
        situation: countSituatoin.product,
        routerId: "1",
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkOjWFjOw3PG4RzvWmjH8SllvOpBer20pCOTYBAr__ukSwkOMe9RcC9brdjp0bA9aL8nU&usqp=CAU",
        alt: "secondProduct",
        name: "secondProduct",
        count: 69,
        situation: countSituatoin.product,
        routerId: "2",
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRybz4gBaL9k67h-EeBbh8U1ZcWJ6ZrAI2BC3Uf9RXbH23UdoAs_zxJqq5Ac2nuGhOjg90&usqp=CAU",
        alt: "thirdProduct",
        name: "thirdProduct",
        count: 71,
        situation: countSituatoin.product,
        routerId: "3",
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRybz4gBaL9k67h-EeBbh8U1ZcWJ6ZrAI2BC3Uf9RXbH23UdoAs_zxJqq5Ac2nuGhOjg90&usqp=CAU",
        alt: "brand 1",
        name: "brand 1",
        count: 45,
        situation: countSituatoin.brand,
        routerId: "4",
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRybz4gBaL9k67h-EeBbh8U1ZcWJ6ZrAI2BC3Uf9RXbH23UdoAs_zxJqq5Ac2nuGhOjg90&usqp=CAU",
        alt: "brand 6",
        name: "brand 6",
        count: 11,
        situation: countSituatoin.brand,
        routerId: "5",
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRybz4gBaL9k67h-EeBbh8U1ZcWJ6ZrAI2BC3Uf9RXbH23UdoAs_zxJqq5Ac2nuGhOjg90&usqp=CAU",
        alt: "brand 2",
        name: "brand 2",
        count: 15,
        situation: countSituatoin.brand,
        routerId: "6",
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRybz4gBaL9k67h-EeBbh8U1ZcWJ6ZrAI2BC3Uf9RXbH23UdoAs_zxJqq5Ac2nuGhOjg90&usqp=CAU",
        alt: "brand 3",
        name: "brand 3",
        count: 17,
        situation: countSituatoin.brand,
        routerId: "7",
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRybz4gBaL9k67h-EeBbh8U1ZcWJ6ZrAI2BC3Uf9RXbH23UdoAs_zxJqq5Ac2nuGhOjg90&usqp=CAU",
        alt: "brand 4",
        name: "brand 4",
        count: 9,
        situation: countSituatoin.brand,
        routerId: "8",
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRybz4gBaL9k67h-EeBbh8U1ZcWJ6ZrAI2BC3Uf9RXbH23UdoAs_zxJqq5Ac2nuGhOjg90&usqp=CAU",
        alt: "brand 5",
        name: "brand 5",
        count: 24,
        situation: countSituatoin.brand,
        routerId: "9",
      },
    ]
  }

  news(): New[] {
    return [
      {
        src: "https://www.springboard.com/blog/wp-content/uploads/2022/08/programming-skills.png",
        title: "Programing",
        time: "january-23",
        description: "programing is not great job but you can do many thing",
      },
      {
        src: "https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg",
        title: "Programing",
        time: "january-23",
        description: "programing is not great job but you can do many thing",
      },
      {
        src: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFBgWFhUZGRgYHBwaGBgZGhoYGhoYGRgaGRkaGhgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDszPy40NTEBDAwMEA8QHxISHzQsJSs0MTQ2NjQ2PTQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQxNDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAKgBLAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAAECAwUGBwj/xABDEAABAwIDBQUECQMCBAcAAAABAAIRAyEEEjEFQVFhcRMigZGhBjKx0RRCUmJygsHh8BWSoiPxU5OywiQzQ2Oj0uL/xAAaAQADAQEBAQAAAAAAAAAAAAABAgMEAAUG/8QALREAAgICAgIBAgYABwAAAAAAAAECEQMhEjFBUQQTIjJhcYGRoRRCUrHh8PH/2gAMAwEAAhEDEQA/APKKXvD+blEqdA94KJC0eCHknQZmMcd+4DeTyAkqNptoiKbcrHO+1DR0N3fAD8yGhGqQLuzocDh2GmCQSev6InEYZrQC1pBtvPzXO0nG0FdOzCuIbPL6w4LXCXJGDNFwlbZktLg8kCb7xI8lXi4z6Qt5mFAce7aVk7Wb3zAgWTNaOx5FKVL0CdlYkKNJ0TImQR+qumylQAuDvBAPAmE1bVF+WtmXU08VIFSe2DB4mVHis8jTAQoggnOAfs7zoiKOzMzZzxyj90E5t1JjDOil+xqi4+UWOw0OjN6fuiTgu7Ocaafwqg66Ksv4yjSQftTBSE0Laz02tbmpRI94s1tqCXXVQxND7H+ItzHeQ4L2O8SXbRlQlC1hjKEiaYgfd1695OcXQizATzb/APpDivaO+iv9SMiEoR9bFsnu0mx0I9JVLsQ0/wDptHn80jS9iOKXkHancAk5/IBRQFskGpy1PTainU81wAALIpWGMbBMqfIr+yPBTq4UjeDabFdxZRQfYLlTEK7sXJnUjMQhxYOLKYShW9meCdtEldQvFlMJQrhQKm7COHDwKFDKEn4BiFo4KjMKjE4fKGmZzCenJbOw6OYBJLRbFjfKmG4XCLSZhbaIujhY1RPZqTkevCKSPLW6qVTX+b7qAKtAkt5x8lsjtUfKy7L63uMHHM7zIb/2KjKtbG4ZoYy+4DTiSf1VFbDj6p1gXsrPGyEcqa/kEpUiCJBC6h9QAM1jLHjJWAGxa8k7yPgtOM1Nolxc0l3Vu+PIHzVMa4kc/wB9Nh5ewOMhZO0XAu7vAK6GucQc0zpdVYsNa7K2ZtrMmd3ROyWOKjLzZWW2HkVU5phxE2M24GEW+nA8QfRUsdldPCDx0tEJmWi7M54ueqQZqiMW2TmAgH4hon5+KHa5QlpmuDtEOzOsGON4V1Km3Ug+qt+lEMyTaSYWlstrDTIJEzN/gp6PQxYlJpJ+DMIZNgfVI0mEHunQ7jqrOxGcwRyVriAD0420Q8CSi4vYE5jHBo7R54glsAx9WSrH4Ck0El7tLQWHzuoUaTHA9+DuESES2mwODRUaQdXZNP1Km4sMZRfa/sizZdJwEPdNpl1MDnvT/wBJYYyvMXzS6mD4XU30Mr8rXAttDjTndwV1FzyS0OZG49lqkdplY/Tl2v7BK2yG2DHg8cz2aeBTHZDYJzi332a+aOYDBZLAOPZ3tzVb8S4NN2ZvsdnfzXUw1i7a/sGZsWROdn97ENXwTWEZ3f2lrvgiK2Ke5kOawQbAMDSY4ngsusb39Pkup+SM5Y/8qJOewHul0cwPmpU8URYOIHRDEJIcmiak7tGvQp1Hw1tRrpv7wERxnRaDNmVSIzWO7M1cyx5BkGF0myMWx4yuY3MBfXvc7J4zt0bfjyhJ8ZXf6iqbLqAiXa2F2681XiMDUa4DN71tWrZa1ke4wTuh1lXWdTFixnXvKtM1vBD/AKzAqUy1xDnGeUHoiM7C2DVfB1GQaqVRrANGkz95DuptIsQPNTlFshxrqv5LW1GNnLVdf7oUGMcSXAm++FUylrcW9VqYQDKk6DGLk6ejMr4chs8lv+yrJAQ+0Gf6Ztu80d7HtsJU5PTHjFRn+x1DaMlXigsvbG2W0wWsILgLncFzjPbKs0RAPOFnpmpSSWzkArmm08P2+SqhTbvXoRPl5BuLxTiGyfqg+MkfohnVidTKeqe6w8nN8nF3wcFU1PybYkYpLo0sJXaQGv0Bs4CSJ+IWjQotYWlzp4AW8eixGBG0qogd0O5GdfAq8H7IZIeg0tbmc4OgOkfhMaH5qiu4BxIOYx7x0aCI8T/L7pUXEEhoG4OtM74HIcVXWpFwzNOou08NbHy8kzZOK3sehUbBkmYN9xVbnb5Q4BaYIidOfRUOdBSPJSLxx2y7EOIkblSwW/n83q2o+QOirppG7ZaK4ok9kNBnWVpYd7cgEoE4zuBmUWm8XuZ1QwcUnJJ6N6yRj16NWg1jpnjqh3UhJjnZAtqnijsD3nXXJ3o76sZ0qIHCkADfr+yi3Dnitg0fkm7C+iLj6CsGujOawm0nktBmCaI7lccIEX5KVKjddHi6klnfu0gznqXjdEWTRhyW2Xw/GjTZgnAN1yYi/JZlfBd+MlUTpIMr0JmNYR78fnqfJZu0sWzMwh0kEye0qGBGhtaUXhXsLwp6bX8HI7RwzWNDcxkag6kydT/PVYDxBsfAr0fbWzmuw1PENF35i4yTo9zdTfcuIx+FgLPJWjBKPGVGWnTvbCioM4dW0Kpa4OaSCNCoCmYmDHHgmYEBo2g+ttSq4++RyBI/dFYHHucQx7ieBn0usuW5CI7wdY8WkGR4EDzSw74IPAgnpofim5STuzTDLLlbZuvpk3g+YQ7xbR09QtymKJaCQ33b91+qpOEo97vtuLd19lodezd9JvqjKph1zfzCtwrjxUn4Vjc0VA4AW7rhJQ9EkCVGWxXFxas0MeP9MGZkLLp13Q1rXEXvCNxbv9Nt9R+qzqEb+KSQcn4lXoMx+roJItcrPWjWOYOaLkmbKmjhMwlIwyV9GU1WaKkKyVrR88wynDmOaB3gczeJtBEdL+Cqa4b2+RPwJVQ3H1Gtlf2pOrWu5wQfHKRfqqJ2JVE6YB0+P6EI7DU8zsrZFuvqhKTiTZjZ6E/ElauEokOu4tcZ0AFleCIZZUhsLScxzu7IB4xcWU8HTDnOa5uhMDeB72o5E+SkCZd3rz935KjD1XNryTe3LS26NxKZ6aIq3f6BNbZx+o6eTvn+yysTgyD3mlp46t/niu9w2cPh7cpeIIqNlrgLjcCeRuVTWwoBIcwxxZ3gBza6/wAE08SkieL5Ti6Z5/UoOjSRyv6ahVhdriNkUzdjoP3QWkdWm3kUDiNiu1LQ/wC83uv8t/qsssconoxzxkck9t1IgCbzzWpiNkGe6ZO9ru471sfGFnvoOa6HAtMaEQo0U5MrYRwWpsp4DvdB+CCpUJRWGfkVI2jotcrZtVnAxfUeHRBvrkEhV4jMYjQ3B5FPUZAaTBVGma1nTaUX2QbVJPBbr6feHeaRGgqO+MLEpski29dG9rwG5SR1cwoR6N/xrabkM+hb3m/8w/JA1KHF7TP/ALh8dy0HVXxEnzYsys0k5XZp1EFmm5LKTLSUWro6OhiGHZVVgbmdQqZWsa7NIqPa5rp3NzPfJ3QVx+18GWuaPpFGoTqKZJDSNWkkwSN6NpVH03Pe0kNbSqNfJbcPZka0xqM7meICs9ntnNrUMjzIpkvbAbvgkOdEgAiY0vyU1u4/ueXmg1Ns5rH4Ass7XVZ9OhPgYIWrtWqS88tEDUs4O3O16/z4qMkrYlUSovALpFhM9NCD4EoAaImpUJGXz5qplOYvqpjt2TpUy4GBunyIt6p8IBedC0/zzC1cHg3NbLtwhrRGuYHXmQAsvFNMne0GM24kgkeMJbt0V4cYqR0ewdoOAAzkW0lonjBcNVtUKr3SXPO+IdTHd5gjVcJg8Q5pi0G8GdeIIMgro/pL4sBDhLTDXgnWM0D1CtHNx+2R6Pxc/wBtO9GhjARTf3jYfapn4XXNNacqMr1KpY7MyBv7gHqgrwLp5Ozs+RSktPryXYl5yMERY+N1PZmFa+QTBgx1VOJeCxg4Az5onCNhk71KQq+6X7Ir2fjOyL2loJIInghw48Va/CvzF0W4rTweyQ9gdKk3Q8YyOTapqDVaAt8UfNsk1tv5u/39FKk26dg04fNTETvEbrRbhdUSJthGGADytUOms3Ud3isxnvlH4ZwztMTEiCeIkfqrx6M2Xe/yLA9wJg7zx4rPxNQ9rc749IKObimtBJZPePxWbie84kWSzegYlvaO62PjSWMZMNMTcwTvBBOWJGpaVp4jC8WETvbcW45Q4cfqBc97OYkFgBJ10gOEG4EE/azLeZThoLZBN5Es9Zy+CvF3FM8zN9uRoCbhfsOkRN4nochdH5oROGolzJAEg31n5Kwvc7UB3N7Q6PztunpvbJPebza4m+7UTCEotopjy7HZhGPhr2gjmLjpvC5f2x2U2m9hb7hbLZvF4cJ4XZ/cuwjfM9QhPajCZ8OHDVrh5P7v/VkPgsMlUj2ME+UaPPaNMKmvTRTAeCpfrBFyUyjZRviH7NGdoa4C2/cP90+LDIs0g7pOg+arw9do7jQbXg/aG8nercTDu8N9/EarQ9xJYE/q29IbC0w5zW3uQLXPkttlBoflzOsP+Hu81gsdBF45o41WT77esP8AmoppH0eJx47/ANzVq4Rrh75/5R+a57EYWnnLe0PPuGxSe+XH/Ugbj3oVQw7CSTWHWHX5pJSvwLKn4X8htPZ1MUXjtnAvyXNN8ZWklzSROpyGfuLZ9k9nspVKrS8uFSiC1oBvmaHh4BAmAYIi0ngucFBpB/8AEARMAh91t+z1CnXLKNTE1C9pJohrnR3Wy1kH3YyviNcwHBTrdsz5oqriq/ezldo0Ye7qgnMkFvj5a+hnwW77Q1S6oZEuJvAgk9BvWfQw4gkuhw0ESCZFiZ5+qlNU2Z1tGX2RifDx/gSYNy6Vmxy0CRZ7M4/NJ+AWNjcLkDG/Wqd7owGG+BIJ6AIKF7EckiVDGFrRMOiDfTumWzyshqjmkukwHGSGkxxsL2E2Wh9FAaC63Ab/ANkFWcJvbqHfqFd4UuxPrSlqwfsAfdcOhsfArc2W+Gua9zLCWy4NdMjuidbT08Vhupg6R4XSa8izgVCeKMi+HPKDtHX7Uyhj4DCLQRm9CO6sFzhlHFU4Go3MJPdJAdr7s3Bi8I7FUsstn3SR+IbnDiCIPiiuq9I9D631ldUDVny0W0HmjNlsNRzWaIWq4FjQJkTKP9n3Bjw52gUpjQ/EdPtnZwp4YneuQ+luFg6BwXTe0O3WPpZGtN965HKVGLfk0JyrZktV7D48iqArmugL04nzLDKOHzmG2PA6ef7KrEUXNNxG46ESOYVba17CEhUNwCqtxaJpNM0MGAXEkHQHgLx14q0QXlvEeuov1t4qrBVZmdYAvpqD+iTrv3edvNUT0Qa+5/oTOGF7xBBkkCQboGo79Vo135g4g3jvNB4WkWuLLPEmd/Lf1Up+h8bfbN72Xrbv5xH/AHLr2OIFifNcFsR+R44G/lr6Zl6Hs1rXd1zc3C5HXRXwyuFPweb8+PHIpeyLKpOscrD4wptg7tUW7AttGYTa+gnjZQZhSNTb+cYVOSaMN09FTWXWgKQqU3sNszS2eBIsfO6FLPvDpf5I7CiDdZs0T1PiZTy/HYV7HOcBA1Mbp1B6GR4LNqVO9Y+K6z2xwxp1S9hiT4Fr5eJGh73aeS5eGPcJhjv8D1GrfglhO1SPScJXye0XO7sP+1Yjgd/z8UVhWZ2OaCOPQ7lPD4F2UtePe906jMNCCNx0VDIZoYO8KvJrvoaOG1p7IV8IQfeaehQNR7g7VbheIIgEaieay8ZhgbgXUckV4NK5JbM+tXcd6obWdxVlSmeCpDVmtnNsJZVO8rS2SM1UDSznNixDmtJaQRcGQFkMWrsxhD2u4H9lztxaDB1JN+0WbXrvc+XOkuEuMNBcSTMloE6b0LTZIPKPVwC6AYBriJ3WPg5ylj9nNZTJbqYaAd8mXeTQ4+CHG4lJqpN+C/A7UDnsw775Q1rH78rWklruILQ5zTuzAHlytB78TiC/e6S0bmMF7cAB/LonZ9U9piKx0ZTeW6+/UHYM561Z/KqsC80sO5zR/qYh3Zs4ikyM8ficWt/IU8NNejJK9vyG4mq1gIF4373Hi4/osWvVJc7mT8UZjoZlZq6ATG8nQD5oTFwHlo3W8d/qtOR2hIJIBqUt4UGVXDeUSVTWZvCyyXlFUyyniDMw09Wj4wtIY/tMrXgNIAaxwmLaBwM8YkaWtGmI0o/ZlMOe0Hr/AGgujxiPFSb8l8UpKVIMe8FrG7xM+a0aYygdEC+hBnxW77P0W1XDMNLKM5Jqz1IPi9mTUdmI5KVHDyJuvSKGwqIM5Ajqey6IEZB5LK80UN9eKPBAVOLKpSlesmfPNDgqec/wBVhX02HiE0bYHovo1CLjerG1jMgAnfYfwKFJmokX+O5Qbz0BvIVraRJpMPwwJBOhngBb+BUV6lz3RP2gIPUQYlVsqnLH2gZEDwQxfdLKWgRjts0cPiCCMxJhwIm8T73hC9C2NX90zyMb9x9QvN2tm5K7v2Wh7CC4hwAIgA8jMn7p81TBKnTMPzocsdrwzpjiQNDzFr+aoOLGmvUx8Ewp294KkYIye823NaXwR48OUtMLo4gye5mBIPTxRVIkEGIHmgKdMsuSCDwM8/0RWG72giFnytHpfFi7AfbLCZ6WZuuVw03tGdvo14/OvK3u3r3DGUc1F1pLQHgcSw5o8YjxXi21cE6nVewAlrXENIBuzVhnm0g+KyQd2j3oyaiky6lji1oaCekmFQ7MSpMwronKRHEQr6VXKftH0HzWhK9SHv0w+lTIa0vvaw4oLEVCHEwL8fgr3YmdSqKozGP3VJcWtBhF+WB1uIEeqq7CVoCkJh1t19yg+o0AgLJKNFKXkCFKCtWjS7kg34LNdUl2i19mweiCDBJumaDapJbFy4AkcDJB9RPin2q49m6DJYx19wfUcyi2ONn1PJRq1mtEN36neeXRBY3EkNcNxAcejG1HD/IsTJeDstqDBDWYzDVWx361VrWn7LKDQ9x5y6pHgeCJNNtMsLh/5dACJ93ulzz+J1Wo5nKCs9+Hz1KVG92saeINZ3aOMbsoqAflW5WworA1D3abjne77NMEva0fec6oRH3RwTYkYckl5MDDg96u/Uklo+07eeg+Szi6STxWjj62fM4CGiGMaNGjcB4D1WdlRnqkgx9kajkxNvX5qNQ3Tu93wKi2VRS9sH4dF0OxcHlYajrE91nMES93gMo/MeCn7PYem6hVLmtc5jSWZhMZHMe634Xv8ksc97miNwAAFgANAALALNOTbpG7BBL72W1XN0kLV9kqrGk5nAXWA7ZFQUe2PuzCBpvPFTSUk0maXk5dntWGxtNxhrwTwCOzLzH2RpPGIaTYHeSvRnvAMZm+aw5YcXROUKej58CdME69s8ocFFsiN89UMxFU6ROjfRUgm+icmvJZRdca68QqKlS9kYzCkXIA6wh69IBx7w14H5KslKicWnIgx1ioOHesNdArGFoGp8v3SLrd3UbzrB1jh/uptaHXYVSe1tjc8Nw+ZXVeyWPa18aCIOm8TP8AifNcM3WFsbGxuWsDfd/iZ+APmjB0yObDyi17R6xRxIIs8DlIHG2nXzTvxRG+fFvlcLB/qzBFzre5gjhprz9FF+2NYv1J/UqkskF5R5WP4uVvp/wbVbEZhEDj9X9ArsBYLnWY+TJA8/3Wjhdo7g31/ZZcuaLVJnr/ABviSi9o6zCOXl/tthTSrNIgCDTOurILP/jfT8iu8wm0HjRo9Sub9vaDn0nVoBLCwloBAgS0u1mYcJ/CFDDlUci/M35cLcHo4J9UutIP5lLDUeYHUhDsqj7HW5RmFczLGUBx0106jRemkm7Zhc3GNJFrsK1t3vHRozEqLsW0e43KN5Op6nd4Kh9GNzhOh98ebUP2LybAO6XPiNQg9dIaGRtbYVUeHd6d2++ltfJAMaS6P9loOpBrACIJF53CbTzPBZdV8GG6fHqo5UXxty2bOEc1mgBkQSf04BFvYHDuuE8rLnRVcrGV3BZ3GT6Zpg1HdG9Rwji0uO5CVRncxhMBwLSeGZ9Ns+AcSoUdpvDcu4oU1nS46ZWVL/iaG/GFWKoTLJtGlsVxq4itXDT7tRzGjWXtc1jRzGZoRu1XGlh2YdzhmYO8GmZfvk8GjujoTvRHsmwUqTnvlsscQTYkktDcvG2Y2WNtAl7iQD1NvitcY0jzXLlOvCAsS2GMaBrL3eNh8D5oE7+S0cfiGBkBwLiRYXgARci3gst57vUqWZpOkaMdtWUOTVHaDgPjdSVUyZWZlUdF7MVIcxn23vZ/fSDPi4LLOOefkrNnVsjqTh9WoHerf/qicSGtqvAFg9wHTMY9FJrbNMG2qspdtGs5nZkktmYVVOm86NK024hvBSdtJrBMKW/CNUYRW5MA+mPb9ZwI5wonaNT7bvMoOtWL3Fx3qMqsYKtohPNJvTKm0zwtxNh5lWsYN58h+pVUeKspOhaI1ZglZo0aTQJDZ63U+1dxA8R8AqWvkXSLwtV60Zqt7HqVTvcPI/JC1HAmSTfl+6es8Ic3HRRlJlIxosBbxPkPmpNc0bz5D5odSAHP0SJlGi97gB3RY79T05J8IXBwfuaRJUKTXbgb8pB8N6vyPNnNMDQRlA8BZFKxW6OlpvV7HLmwX6F4bG7NFvNM6hMd9pvfvTZK8FhWQ62nUYNXtHVwCPw2Pot1qDwDnfALkaNFsRJ8Db9ETRaxv1ATxLvkJ9UP8LF9sP8Aipr8KO5p7dpj3WPf0AA/yIWbtz2toljqYp5i9pa7M8Q0EQbtBkrmcdiKrm5GOa0Gzg06jqSSsTse9lDC5x+0Q2/ACdeUpX8eEXpDLPkn+J1+hoUTRGrXO/OAP+mVd9KBjJ3ANzRM9XTPoUE3ZWJFxhnxxDfhxQ9dz2e/TeydM7XNnpIuqvJKqYixwu/+Q/EVazpylpB1yua0nqXQSrsLiMU0AOYHsGjajadUeGaXD8pCxhjUxxziZlSe+yi0qRuYyuH64PIfudq0T+EmFScIBOVlFzuBqOMcvfDT5nks0bRcBqfND9taJTRUX22c5SWkbLMUZbODZlae+0MeMzd4LiS5p5giFV9OY9xy4VrgNGNNSW9crrjqPFBU8e8DKSSNwnT8J3eCIbtaqBGcubrDr38VRRi/InKS/wDQ2rXxDWty0GMBNiyk0vO8Zgczh0ICIwbHtOevlAPusdczmaTmY2wb3PdMTpoVi/TzeLE8Lc1W7FSniox2TlykqZpbR2iariXG/Pf04dFj1Wxp5JPfKgXz1CE58hox49ERdSce6FBhuk4qBUhUdaFAJ38UyVjF9N3d8ZRdeoS8u3GDPgEA02UiM0X3QhQ0XXQUawG/yuhqlQuN/BMaPOOv7XTQ0fWJ6CPUn9FySHc2+xwnjmo528PM/KEs44D1+a4WyACkAUgpAqqRnstpq3LKoFRSFZUUkkI0xnU73lSDGg2J8R+6bt0u35Ifad9wXh6DS6zrakQG6XiZuqajLmZmb93f5qtuIjcPIJ/pR5eTfkmuNAqV2XjLHeknTcDAHKfVX0qxAOWQBpmJJMmLDSfDcghijwH9rfkpDGu/gb8kykkK4thL2B5BcCN0iB6HVDVMA4HiNxmLdCJCm3HkbyOlvgnOPnXMUG4vsMVJFH0J3LzHyTDCvGg9UQMa3gfRWN2g3gfRCo+x7kDtoV92bwcfmrWfSGmQ54I0h7gR0g2WhQ2uxurXeQ+ahiNqsdoHeQ+aZRhXZNzndUDHEYr/AIlT+93zVLqdZxlxe4/ecXfEoj+ot4H0THaDeBXOMPYycvRUaD9ezaSdSZcfUqLsO/fTHgGt+Cv/AKi3gUv6i3gUrhD2OpSBHYR0e4/0I+Cq+iv+wfIrSG028D6KJ2k3gUOEfYXJgH0Z/wBg+RSbQePqlH/1FvApDaTefkF3GPsFszqrHNglpEqouR+MxTXtiDIMi3yWe8QdLKclT0Mh8yYOuncxMGpdjaHKRKZMSuOEUxCQcpRKHZwwTtcmATtYTPALugr8hiZShMUpSsdEgAk/VRlO/VA4btOSftOSSSfkydIbtOSXackkl3JnUhdpyS7Tkkku5M6kLPyS7RJJdyZ1IXack/ackkl3JnUhs/JLtEkl3JnUh+0S7RJJC2dxQu0S7RJJHkzqQu0SzpJI8mCkLOlnSSQ5MNIWdLOkku5M6kLOlKSS62AUp3NNgmSRYS2IsoFqSSZioaUi1JJKEbIlCSSARtUTSIj4jlp8CUkkGNHsHeyDCjlTpIBHDU8pkkAn/9k=",
        title: "Programing",
        time: "january-23",
        description: "programing is not great job but you can do many thing",
      },
      {
        src: "data:image/jpeg;base64,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",
        title: "Programing",
        time: "january-23",
        description: "programing is not great job but you can do many thing",
      },
      {
        src: "https://www.springboard.com/blog/wp-content/uploads/2022/08/programming-skills.png",
        title: "Programing",
        time: "january-23",
        description: "programing is not great job but you can do many thing",
      },
      {
        src: "https://www.springboard.com/blog/wp-content/uploads/2022/08/programming-skills.png",
        title: "Programing",
        time: "january-23",
        description: "programing is not great job but you can do many thing",
      },
    ]
  }

  // product category

  productCategory(type: typeProduct) {
    var product: Product[] = this.product()
    var productCtg: Product[] = []
    product.forEach((value) => {
      if (value.type == type) {
        productCtg.push(value)
      }
    })
    return productCtg
  }

  productSituation(situation: productSituation) {
    var product: Product[] = this.product()
    var productStu: Product[] = []
    product.forEach((value) => {
      if (value.situation == situation) {
        productStu.push(value)
      }
    })
    return productStu
  }

  productCategorySituation(type: typeProduct, situation: productSituation) {
    var product: Product[] = this.product()
    var productStuCta: Product[] = []
    product.forEach((value) => {
      if (value.type == type) {
        if (value.situation == situation) {
          productStuCta.push(value)
        }
      }
    })
    return productStuCta
  }

  // image category

  imageCategory(situation: imgSituation) {
    var image: Img[] = this.image()
    var imageCtg: Img[] = []
    image.forEach((value) => {
      if (value.situation == situation) {
        imageCtg.push(value)
      }
    })
    return imageCtg
  }

  // slider category

  sliderCategory(situation: sliderSituation){
    var slider: Slider[] = this.slider()
    var sliderCtg: Slider[] = []
    slider.forEach((value) => {
      if (value.situation == situation) {
        sliderCtg.push(value)
      }
    })
    return sliderCtg
  }

    // count category

    countCategory(situation: countSituatoin){
      var count: Count[] = this.count()
      var countCtg: Count[] = []
      count.forEach((value) => {
        if (value.situation == situation) {
          countCtg.push(value)
        }
      })
      return countCtg
    }
}
