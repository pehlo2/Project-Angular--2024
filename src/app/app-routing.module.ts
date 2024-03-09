import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponentComponent } from './pagenotfound-component/pagenotfound-component.component';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';


const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: '/home'
},
{
  path: 'home',
  component: HomeComponent
},{
  path: 'catalog',
  component: CatalogComponent
},
{ path: '**',  pathMatch: 'full', component: PagenotfoundComponentComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
