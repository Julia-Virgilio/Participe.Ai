import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AprendizadoComponent } from './pages/aprendizado/aprendizado.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AguaComponent } from './pages/sub/agua/agua.component';
import { EnergiaComponent } from './pages/sub/energia/energia.component';
import { ReciclagemComponent } from './pages/sub/reciclagem/reciclagem.component';
import { MapaComponent } from './pages/mapa/mapa.component';
import { FaqComponent } from './pages/faq/faq.component';
import { MainLayoutComponent } from './shared/main-layout/main-layout.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './shared/components/login/login.component';
import { CadastroComponent } from './shared/components/cadastro/cadastro.component';

export const routes: Routes = [

  {path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {path: '', 
    component: AppComponent,
    children:[
      {path: 'home', component: HomeComponent},
      {path: 'login', component: LoginComponent},
      {path: 'cadastro', component: CadastroComponent}
    ]
  },
  {path: '', 
    component: MainLayoutComponent,
    children:[
      { path: 'dashboard',  component: DashboardComponent,},
      { path: 'perfil',  component: PerfilComponent,},
      { path: 'aprendizado',  component: AprendizadoComponent,},
      { path: 'map', component: MapaComponent },
      { path: 'faq', component: FaqComponent },
      { path: 'agua', component: AguaComponent },
      { path: 'energia', component: EnergiaComponent },
      { path: 'reciclagem', component: ReciclagemComponent },
    ]
  },

  // { path: 'sobre/gamificacao', component: gamificacao },
  // { path: 'feedback', component: FeedbackComponent },

  { path: '**', component: NotFoundComponent } 
];
