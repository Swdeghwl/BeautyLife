import { Injectable } from '@angular/core';
import { Slider } from 'src/app/interface/interface';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  slider:Slider[] = [
    {src: 'https://cdn-img1.imgworlds.com/assets/51699d91-5240-4f58-bcbc-bf2b50d220e6.jpeg?key=promo-image', alt: '1'},
    {src: 'https://cdn-img1.imgworlds.com/assets/929c2a00-a8dc-4924-849e-4ef085cc8011.jpg?key=promo-image', alt: '3'},
  ]

  category:Slider[] = [
    {src: 'https://cdn-img1.imgworlds.com/assets/51699d91-5240-4f58-bcbc-bf2b50d220e6.jpeg?key=promo-image', alt: '1'},
    {src: 'https://cdn-img1.imgworlds.com/assets/929c2a00-a8dc-4924-849e-4ef085cc8011.jpg?key=promo-image', alt: '3'},
    {src: 'https://cdn-img1.imgworlds.com/assets/929c2a00-a8dc-4924-849e-4ef085cc8011.jpg?key=promo-image', alt: '3'}
  ]

  constructor() { }
}
