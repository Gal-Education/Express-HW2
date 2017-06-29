import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetAllFavoritesComponent } from 'app/Favorites/get-all-favorites/get-all-favorites.component';
import { GetFavoritesOfUserComponent } from 'app/Favorites/get-favorites-of-user/get-favorites-of-user.component';
import { GetFavoritesOfMonthByCategoryComponent } from 'app/Favorites/get-favorites-of-month-by-category/get-favorites-of-month-by-category.component';

const appRoutes: Routes = [
	{path: '', component: GetAllFavoritesComponent },
	{path: 'getFavoriteByUser', component: GetFavoritesOfUserComponent },
	{path: 'getFavoriteOfMonthByUser', component: GetFavoritesOfMonthByCategoryComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(appRoutes)],
	exports: [RouterModule]
})

export class AppRoutingModule {}