import { Component } from '@angular/core';
import { LoginComponent } from "./shared/components/login/login.component";
import { CadastroComponent } from "./shared/components/cadastro/cadastro.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";

@Component({
  selector: 'app-root',
  imports: [DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
