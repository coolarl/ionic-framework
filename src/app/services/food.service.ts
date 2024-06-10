import { Injectable } from '@angular/core';
import { Food } from '../models/food.model';
@Injectable({
  providedIn: 'root',
})
export class FoodService {
  getFoods(): Food[] {
    return [
      {
        id: 1,
        title: 'Strawberry',
        price: 59.0,
        image: '.../../../assets/images/starberry-removebg-preview.png',
        description: 'Celana Yang di Desain Oleh Desainer Ternama Dari US',
      },
      {
        id: 2,
        title: 'Salad',
        price: 49.0,
        image: '.../../../assets/images/salad.png',
        description: 'Celana Yang di Desain Oleh Desainer Ternama Dari US',
      },
      {
        id: 3,
        title: 'Wortel',
        price: 20.0,
        image: '.../../../assets/images/wortel.png',
        description: 'Celana Yang di Desain Oleh Desainer Ternama Dari US',
      },
      {
        id: 4,
        title: 'Jagung',
        price: 70.0,
        image: '.../../../assets/images/jagung-removebg-preview.png',
        description: 'Celana Yang di Desain Oleh Desainer Ternama Dari US',
      },
      {
        id: 5,
        title: 'Tomato',
        price: 50.0,
        image: '.../../../assets/images/tomat.png',
        description: 'Celana Yang di Desain Oleh Desainer Ternama Dari US',
      },
      {
        id: 6,
        title: 'Orange | Chinese',
        price: 80.0,
        image: '.../../../assets/images/orangeeee-removebg-preview.png',
        description: 'Celana Yang di Desain Oleh Desainer Ternama Dari US',
      },
    ];
  }

  getFood(id: number): Food {
    return this.getFoods().find((food) => food.id === id);
  }
}
