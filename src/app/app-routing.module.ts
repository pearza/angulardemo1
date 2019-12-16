import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
  
import { PagenofoundComponent } from './pagenofound/pagenofound.component';
import { HomeComponent } from './home/home.component';
  
const appRoutes: Routes = [
    {
        path:'home',
        component:HomeComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    { path: '**', component: PagenofoundComponent }
];
  
@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only set true
    )
  ], 
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }