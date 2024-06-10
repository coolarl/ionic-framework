import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category.model';
import { Food } from 'src/app/models/food.model';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.page.html',
  styleUrls: ['./listing.page.scss'],
})
export class ListingPage implements OnInit {
  categories: Category[] = [];
  foods: Food[] = [];

  form = {
    email: localStorage.getItem('email'),
    password: localStorage.getItem('password'),
  };
  constructor(private foodService: FoodService, private router: Router) {}

  ngOnInit() {
    this.getCategories();
    this.foods = this.foodService.getFoods();
  }

  getCategories() {
    this.categories = [
      {
        id: 1,
        label: 'Bag',
        image: '.../../../assets/icon/icons8-bag-80.png',
        active: true,
      },
      {
        id: 2,
        label: 'Shoes',
        image: '.../../../assets/icon/icons8-shoes-64.png',
        active: true,
      },
      {
        id: 3,
        label: 'shirt',
        image: '.../../../assets/icon/icons8-shirt-96.png',
        active: true,
      },
      {
        id: 4,
        label: 'pants',
        image: '.../../../assets/icon/icons8-pants-80.png',
        active: true,
      },
    ];
  }

  goToDetailPage(id: number) {
    this.router.navigate(['detail', id]);
  }
}
