import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../views/home/home.component';
import { UdemyComponent } from '../views/udemy/udemy.component';
import { NoCourseComponent } from '../views/no-course/no-course.component';
import { AboutComponent } from '../views/about/about.component';
import { ContactComponent } from '../views/contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'udemy', component: UdemyComponent },
  { path: 'pluralsight', component: NoCourseComponent },
  { path: 'udacity', component: NoCourseComponent },
  { path: 'about-us', component: AboutComponent },
  { path: 'contact-us', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
