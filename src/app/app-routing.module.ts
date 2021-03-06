import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { DatabaseComponent } from './database/database.component';
import { LoginComponent } from './user login/login/login.component';
const routes: Routes = [{path:"register", component:RegistrationComponent},{path:'userlogin',component:LoginComponent},
                         {path:'database', component:DatabaseComponent} ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
