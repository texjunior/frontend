import { Component, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { InicioComponent } from './inicio/inicio.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { RodapeComponent } from './rodape/rodape.component';
import { AppComponent } from './app.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
        BrowserModule, 
        BrowserAnimationsModule, 
        MatButtonModule, 
        MatIconModule, 
        MenuComponent, 
        InicioComponent,
        RodapeComponent,
        LoginComponent,
        AppRoutingModule,
        RouterModule
    ],
    providers: []
})
export class AppModule {}
