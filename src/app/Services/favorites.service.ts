import { Injectable } from '@angular/core';
import { Favorites } from 'app/Services/favorites';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class FavoriteService {
	constructor( private http:Http ) {}

	getAllFavorites():Promise<Favorites[]> {
		return this.http.get('https://favorites1.herokuapp.com/getAllFavorites')
		.toPromise()
		.then(response => response.json() as Favorites[])
		.catch(this.eventError);
	}

	getFavoritesByUser(user:any):Promise<Favorites> {
		return this.http.post('https://favorites1.herokuapp.com/getFavoritesOfUser', user)
		.toPromise()
		.then(response => response.json() as Favorites)
		.catch(this.eventError);
	}

	getFavoritesOfMonthByUser(month:any):Promise<Favorites> {
		return this.http.post('https://favorites1.herokuapp.com/getFavoritesOfMonthByCategory', month)
		.toPromise()
		.then(response => response.json() as Favorites)
		.catch(this.eventError);
	}

	private eventError(error: any) {
		console.log(error.message);
	}
}