import { Routes } from '@angular/router';
import { MainPageComponent } from './app/main-page/main-page.component';
import { UserPageComponent } from './app/user-page/user-page.component';
;

const routes: Routes = [
    {
        path: '',
        component: MainPageComponent,
    },
    {
        path: 'user/:id',
        component: UserPageComponent
    }
];

export default routes;
