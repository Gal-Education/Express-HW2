import { Component, OnInit } from '@angular/core';
import { FavoriteService } from 'app/Services/favorites.service';
import { Favorites } from 'app/Services/favorites';

@Component({
  selector: 'app-get-favorites-of-month-by-category',
  templateUrl: './get-favorites-of-month-by-category.component.html',
  styleUrls: ['./get-favorites-of-month-by-category.component.css']
})
export class GetFavoritesOfMonthByCategoryComponent implements OnInit {

  	favoritesOfMonthByUser:Favorites;
  	data:object = {month:"March", category: "Romance"};

	constructor(private favoriteService:FavoriteService) { }

	ngOnInit() {
		this.favoriteService.getFavoritesOfMonthByUser(this.data)
		.then((favoritesOfMonthByUser:Favorites) => {
				this.favoritesOfMonthByUser = favoritesOfMonthByUser;
				return favoritesOfMonthByUser;
			});
		};

}
