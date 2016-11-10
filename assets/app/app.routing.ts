
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MessagesComponent } from "./messages/messages.component";
import { AuthenticationComponent } from "./auth/authentication.component";


const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/messages', pathMatch: 'full' },
    { path: 'messages', component: MessagesComponent },
    // changes for lazy loading
    //{ path: 'auth', component: AuthenticationComponent, children: AUTH_ROUTES},
    { path: 'auth', component: AuthenticationComponent, loadChildren: './auth/auth.module#AuthModule'},
    
   // { path: 'protected', component: ProtectedComponent, canActivate: [AuthGuard] },
    //{ path: 'recipes', component: RecipesComponent, children: AUTH_ROUTES },
];



export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
