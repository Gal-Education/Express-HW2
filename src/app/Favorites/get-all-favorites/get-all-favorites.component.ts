import { Component, OnInit } from '@angular/core';
import { FavoriteService } from 'app/Services/favorites.service';
import { Favorites } from 'app/Services/favorites';

@Component({
  selector: 'app-get-all-favorites',
  templateUrl: './get-all-favorites.component.html',
  styleUrls: ['./get-all-favorites.component.css']
})
export class GetAllFavoritesComponent implements OnInit {

	favorites:Favorites[];

	constructor(private favoriteService:FavoriteService) { }

	ngOnInit() {
		this.favoriteService.getAllFavorites()
		.then((favorites:Favorites[]) => {
			this.favorites = favorites.map((favorites) => {
				return favorites;
			});
		});
	}
};
