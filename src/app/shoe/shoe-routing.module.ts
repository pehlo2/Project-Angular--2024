import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddShoeComponent } from './add-shoe/add-shoe.component';
import { ShoeDetailsPageComponent } from './shoe-details-page/shoe-details-page.component';
import { UpdateShoeComponent } from './update-shoe/update-shoe.component';





const routes: Routes = [
    {
        path: 'add-shoe',
        component: AddShoeComponent,
        // canActivate:[AuthActivate]
    },
    {
        path: 'shoes', children: [
            {
                path: ':shoeId',
                component: ShoeDetailsPageComponent
            }
        ]
    }, {
        path: 'shoes', children: [
            {
                path: ':shoeId', children: [
                    {
                        path: 'edit',
                        component: UpdateShoeComponent
                    }
                ]
                
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ShoeRoutingModule {

}
