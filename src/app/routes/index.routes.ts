import { RouterModule } from '@angular/router';
import { allRoutes } from './tabs.routes';

const allAppRoutes = [...allRoutes];
export const allAppRoutings = RouterModule.forRoot(allAppRoutes);