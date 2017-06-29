import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { GetAllFavoritesComponent } from './Favorites/get-all-favorites/get-all-favorites.component';
import { GetFavoritesOfUserComponent } from './Favorites/get-favorites-of-user/get-favorites-of-user.component';
import { GetFavoritesOfMonthByCategoryComponent } from './Favorites/get-favorites-of-month-by-category/get-favorites-of-month-by-category.component';
import { AppRoutingModule } from 'app/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    GetAllFavoritesComponent,
    GetFavoritesOfUserComponent,
    GetFavoritesOfMonthByCategoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
