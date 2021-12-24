import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { HomeComponent } from './views/home/home.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { UdemyComponent } from './views/udemy/udemy.component';
import { RouterModule } from '@angular/router';
import { NoCourseComponent } from './views/no-course/no-course.component';
import { BrandLogoComponent } from './common/brand-logo/brand-logo.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    HomeComponent,
    AppFooterComponent,
    UdemyComponent,
    NoCourseComponent,
    BrandLogoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
