import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import {
  AppFooterComponent,
  AppHeaderComponent,
  BrandLogoComponent,
  ImgViewComponent,
  ContactFormComponent,
} from './ui';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent, ContactComponent, HomeComponent } from './views';
import { CourseModule, UserModule } from './modules';
import { environment } from '../environments/environment';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import {
  provideAnalytics,
  getAnalytics,
  ScreenTrackingService,
  UserTrackingService,
} from '@angular/fire/analytics';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import {
  provideRemoteConfig,
  getRemoteConfig,
} from '@angular/fire/remote-config';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    HomeComponent,
    AppFooterComponent,
    BrandLogoComponent,
    AboutComponent,
    ImgViewComponent,
    ContactComponent,
    ContactFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    UserModule,
    CourseModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideRemoteConfig(() => getRemoteConfig()),
  ],
  providers: [ScreenTrackingService, UserTrackingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
