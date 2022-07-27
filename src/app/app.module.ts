import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './client/layout/layout.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
     BrowserModule,
     RouterModule, 
     AppRoutingModule, 
     LayoutModule,
     HttpClientModule
    ],
     
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
