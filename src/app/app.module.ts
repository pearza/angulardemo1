import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
 
import { AppRoutingModule } from './app-routing.module';
import { ArticleModule } from './article/article.module';
 
import { AppComponent } from './app.component';
import { PagenofoundComponent } from './pagenofound/pagenofound.component';
import { HomeComponent } from './home/home.component';
 
@NgModule({
  declarations: [
    AppComponent,
    PagenofoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ArticleModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }