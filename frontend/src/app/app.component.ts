import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { LoginComponent } from "./shared/components/login/login.component";
import { CadastroComponent } from "./shared/components/cadastro/cadastro.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { SidebarComponent } from './shared/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidebarComponent, DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
