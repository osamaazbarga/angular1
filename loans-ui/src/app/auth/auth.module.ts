import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewUserComponent } from './new-user/new-user.component';
import { LoaginComponent } from './loagin/loagin.component';
import { LoginComponent } from './login/login.component';
import { ForgetComponent } from './forget/forget.component';
import { LogoutComponent } from './logout/logout.component';



@NgModule({
  declarations: [
    NewUserComponent,
    LoaginComponent,
    LoginComponent,
    ForgetComponent,
    LogoutComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
