import { Component } from '@angular/core';
import { LoginComponent } from "./shared/components/login/login.component";
import { CadastroComponent } from "./shared/components/cadastro/cadastro.component";

@Component({
  selector: 'app-root',
  imports: [CadastroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
