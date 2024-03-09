import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddShoeComponent } from './add-shoe/add-shoe.component';





const routes: Routes = [
    {
        path: 'add-shoe',
        component: AddShoeComponent,
        // canActivate:[AuthActivate]
    },
    // {
    //     path: 'shoes', children: [
    //         {
    //             path: '',
    //             pathMatch: 'full',
    //             component: MainComponent
    //         }, {
    //             path: ':themeId',
    //             component: CurrentThemeComponent
    //         }
    //     ]
    // }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ShoeRoutingModule {

}
