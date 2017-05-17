import { Routes } from '@angular/router';
import { LoginButtonComponent } from '../components/login-button/login-button.component';
import { ApiformComponent } from '../components/apiform/apiform.component';

const appRoutes: Routes = [
    {path:'login',component: LoginButtonComponent},
    {path:'api-form',component:ApiformComponent}
]

export const allRoutes = appRoutes;