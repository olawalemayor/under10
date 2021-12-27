import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { UdemyComponent } from './views/udemy/udemy.component';
import { NoCourseComponent } from './views/no-course/no-course.component';
import { AboutComponent } from './views/about/about.component';
import { ContactComponent } from './views/contact/contact.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', redirectTo: '' },
  { path: 'udemy', component: UdemyComponent },
  { path: 'pluralsight', component: NoCourseComponent },
  { path: 'udacity', component: NoCourseComponent },
  { path: 'about-us', component: AboutComponent },
  { path: 'contact-us', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
