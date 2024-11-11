import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListVersiculesComponent } from './list-versicules/list-versicules.component';
import { HomeComponent } from './home/home.component';
import { RegisterVersiculesComponent } from './register-versicules/register-versicules.component';

const routes: Routes = [
  {path: 'Versicules', component: ListVersiculesComponent},
  {path: 'Home', component: HomeComponent},
  {path: 'Register', component: RegisterVersiculesComponent},
  {path: 'Register/:id', component: RegisterVersiculesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
