import { Routes, RouterModule } from '@angular/router';

import { ShipsListComponent } from './ships';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_guards';

const appRoutes: Routes = [
  { path: '', component: ShipsListComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  // otherwise redirect to ships
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
