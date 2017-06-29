class Ufavorites {
	Name:string;
	Rating:number;
	Month:string;
	Category:string;
}

export class Favorites {
	_id:string;
	user:string;
	Ufavorites: [Ufavorites]
}