// Standard Setup Module imports
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Routing Module Import
import { AppRoutingModule } from './app-routing.module';

// Browser Animation Module Import
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Component Imports
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { CarouselComponent } from './carousel/carousel.component';

// Icons, buttons, menu and toolbar module imports
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';

// ImageSliderModule Import
import {ImageSliderModule} from './carousel/imageSlider.module';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FavoritesComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule, 
    MatButtonModule, 
    MatIconModule, 
    MatMenuModule,
    ImageSliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
