import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from 'src/app/views/login/login.component';
import { RegisterComponent } from 'src/app/views/register/register.component';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from '../../views/profile/profile.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, ProfileComponent],
  imports: [CommonModule, FormsModule, UserRoutingModule],
})
export class UserModule {}
