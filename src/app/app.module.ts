import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { HomeComponent } from './views/home/home.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { UdemyComponent } from './views/udemy/udemy.component';

@NgModule({
  declarations: [AppComponent, AppHeaderComponent, HomeComponent, AppFooterComponent, UdemyComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
