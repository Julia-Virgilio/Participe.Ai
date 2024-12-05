import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AprendizadoComponent } from './pages/aprendizado/aprendizado.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [

  { path: '',  component: DashboardComponent,},
  { path: 'perfil',  component: PerfilComponent,},
  { path: 'aprendizado',  component: AprendizadoComponent,},


  // { path: 'dashboard/agua', component: servicoAgua },
  // { path: 'dashboard/energia', component: servicoEnergia },
  // { path: 'dashboard/Reciclagem', component: servicoReciclagem },
  // { path: 'sobre/gamificacao', component: gamificacao },
  // { path: 'map', component: MapComponent },
  // { path: 'feedback', component: FeedbackComponent },
  // { path: 'faq', component: FaqComponent },

  { path: '**', component: NotFoundComponent } 
];
