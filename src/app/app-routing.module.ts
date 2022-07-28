import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: 'search', 
    loadChildren: () => import('./components/search/modules/search.module').then(m => m.SearchModule) 
  },
  { path: 'detail', loadChildren: () => import('./components/detail/modules/detail.module').then(m => m.DetailModule) },
  { 
    path: '', 
    pathMatch: 'full',
    redirectTo: 'search'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
