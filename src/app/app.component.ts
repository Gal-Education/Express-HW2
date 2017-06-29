import { Component } from '@angular/core';
import { FavoriteService } from 'app/Services/favorites.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FavoriteService]
})
export class AppComponent {
  title = 'app works!';

  constructor(private favoriteService:FavoriteService) { }
}
