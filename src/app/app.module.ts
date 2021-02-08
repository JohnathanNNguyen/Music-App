import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ArtistComponent } from './home/artist/artist.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { WebPlaybackComponent } from './web-playback/web-playback.component';
import { CategoriesComponent } from './home/categories/categories.component';
import { BrowseCategoryComponent } from './home/categories/browse-category/browse-category.component';
import { TrackComponent } from './home/track/track.component';
import { SafePipe } from './home/track/safe.pipe';
import { XLengthPipe } from './xLength.pipe';

//angular material
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    WebPlaybackComponent,
    ArtistComponent,
    SearchComponent,
    CategoriesComponent,
    BrowseCategoryComponent,
    TrackComponent,
    SafePipe,
    XLengthPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,

    MatSidenavModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatTabsModule,
    MatTabsModule,
    MatSelectModule,
    MatRadioModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
