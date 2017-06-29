import { Component, OnInit } from '@angular/core';
import { FavoriteService } from 'app/Services/favorites.service';
import { Favorites } from 'app/Services/favorites';

@Component({
  selector: 'app-get-favorites-of-user',
  templateUrl: './get-favorites-of-user.component.html',
  styleUrls: ['./get-favorites-of-user.component.css']
})
export class GetFavoritesOfUserComponent implements OnInit {

  	favoritesOfUser:Favorites;
  	user:object = {user:"kerennn"};

	constructor(private favoriteService:FavoriteService) { }

	ngOnInit() {
		this.favoriteService.getFavoritesByUser(this.user)
		.then((favoritesOfUser:Favorites) => {
				this.favoritesOfUser = favoritesOfUser;
				return favoritesOfUser;
			});
		};

}
