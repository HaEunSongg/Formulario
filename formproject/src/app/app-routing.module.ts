import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

import { AuthComponent } from './auth/auth.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {
    path: "",
    component: LoginComponent,
    pathMatch: "full",
    title:"Login"
  },
  {
    path: "Login",
    redirectTo: "register",
    pathMatch: "full",
  },
  { path: 'auth', component: AuthComponent },
  { path: 'admin', component: AdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
