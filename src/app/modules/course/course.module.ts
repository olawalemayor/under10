import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoCourseComponent } from 'src/app/views/no-course/no-course.component';
import { UdemyComponent } from 'src/app/views/udemy/udemy.component';

@NgModule({
  declarations: [UdemyComponent, NoCourseComponent],
  imports: [CommonModule],
})
export class CourseModule {}
