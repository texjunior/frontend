import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from "./menu/menu.component";
import { InicioComponent } from "./inicio/inicio.component";
import { LoginComponent } from "./login/login.component";
import { RodapeComponent } from "./rodape/rodape.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [MenuComponent, InicioComponent, LoginComponent, RodapeComponent, RouterOutlet]
})
export class AppComponent {
  title = 'GZ Games';
}

