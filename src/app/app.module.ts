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
import { AboutComponent } from './views/about/about.component';
import { ImgViewComponent } from './common/img-view/img-view.component';
import { ContactComponent } from './views/contact/contact.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    HomeComponent,
    AppFooterComponent,
    UdemyComponent,
    NoCourseComponent,
    BrandLogoComponent,
    AboutComponent,
    ImgViewComponent,
    ContactComponent,
    ContactFormComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
