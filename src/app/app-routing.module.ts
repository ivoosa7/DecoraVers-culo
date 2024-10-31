import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListVersiculesComponent } from './list-versicules/list-versicules.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'Versicules', component: ListVersiculesComponent},
  {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
