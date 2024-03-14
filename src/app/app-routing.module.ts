import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import{InicioComponent} from './inicio/inicio.component';
import {LoginComponent} from './login/login.component';
import { AppComponent } from './app.component';

const appRoutes: Routes = [
    {path: 'inicio', component: InicioComponent},
    {path: 'login', component: LoginComponent},
    {path: '', redirectTo: '/inicio', pathMatch: 'full'}
]

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(appRoutes,{enableTracing: true})
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
    static forRoot(appRoutes: Routes) {
        return RouterModule.forRoot(appRoutes);
    }
}
