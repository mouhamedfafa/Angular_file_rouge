import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HomeComponent } from './page/home/home.component';
import { DetailComponent } from './page/detail/detail.component';
import { LayoutModule } from './layout/layout.module';

import { RouterModule } from '@angular/router';
import { AsideComponent } from './composant/aside/aside.component';
import { CardComponent } from './composant/card/card.component';
import { ClientComponent } from './client.component';
import { ClientRoutingModule } from './client-routing.module';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { MenuComponent } from './menu/menu.component';
import { BurgerComponent } from './burger/burger.component';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    HomeComponent,
    DetailComponent,
    AsideComponent,
    CardComponent,
    ClientComponent,
    CatalogueComponent,
    MenuComponent,
    BurgerComponent
  ],
  imports: [
    ClientRoutingModule,
    CommonModule,
    LayoutModule,
    RouterModule,
    HttpClientModule



  ]
})

export class ClientModule { }
