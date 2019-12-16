import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
import { ArticleComponent } from './article.component';
import { ArticleListComponent } from './article-list.component';
import { ArticleDetailComponent } from './article-detail.component';
 
const articleRoutes: Routes = [
  {
    path:'article',
    component:ArticleComponent,
    children:[
      {
        path:'',
        component:ArticleListComponent
      },
      {
        path:':id',
        component:ArticleDetailComponent
      }
    ]
  }
];
 
@NgModule({
  imports: [RouterModule.forChild(articleRoutes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }