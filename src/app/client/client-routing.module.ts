import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BurgerComponent } from './burger/burger.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { MenuComponent } from './menu/menu.component';
import { DetailComponent } from './page/detail/detail.component';
import { HomeComponent } from './page/home/home.component';

import { SecuriteComponent } from './securite/securite.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'catalogue', component: CatalogueComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'burger', component: BurgerComponent},



  { path: 'detail/:id', component: DetailComponent },
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
