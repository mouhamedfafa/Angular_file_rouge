import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { ClientComponent } from '/client/client.component';
import { NotFoundComponent } from './client/not-found/not-found.component';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./client/client.module').then(m => m.ClientModule) }, 
  
  { path: 'login', loadChildren: () => import('./client/securite/securite.module').then(m => m.SecuriteModule) },
  {path:"**", component: NotFoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
