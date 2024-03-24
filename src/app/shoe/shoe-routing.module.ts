import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddShoeComponent } from './add-shoe/add-shoe.component';
import { ShoeDetailsPageComponent } from './shoe-details-page/shoe-details-page.component';
import { UpdateShoeComponent } from './update-shoe/update-shoe.component';
import { AuthGuard } from '../guards/auth-guard.activate';





const routes: Routes = [
    {
        path: 'add-shoe',
        component: AddShoeComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'shoes', children: [
            {
                path: ':shoeId',
                component: ShoeDetailsPageComponent,
            }
        ]
    },
    {
        path: 'shoes', children: [
            {
                path: ':shoeId', children: [
                    {
                        path: 'edit',
                        component: UpdateShoeComponent,
                        canActivate :[AuthGuard]

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
