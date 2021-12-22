import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { UdemyComponent } from './views/udemy/udemy.component';
import { NoCourseComponent } from './views/no-course/no-course.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'udemy', component: UdemyComponent },
  { path: 'pluralsight', component: NoCourseComponent },
  { path: 'udacity', component: NoCourseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
