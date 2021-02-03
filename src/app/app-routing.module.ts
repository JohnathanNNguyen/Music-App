import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtistComponent } from './home/artist/artist.component';
import { BrowseCategoryComponent } from './home/categories/browse-category/browse-category.component';
import { CategoriesComponent } from './home/categories/categories.component';
import { HomeComponent } from './home/home.component';
import { TrackComponent } from './home/track/track.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      { path: 'categories', component: CategoriesComponent, data: { state: 1 } },
      { path: 'categories/browse/:id', component: BrowseCategoryComponent, data: { state: 1 } },
      { path: 'artist', component: ArtistComponent, data: { state: 2 } },
      { path: 'tracks', component: TrackComponent, data: { state: 3 } },
    ]
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
