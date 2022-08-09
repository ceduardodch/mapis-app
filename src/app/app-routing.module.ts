import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'enfoques',
    loadChildren: () => import('./enfoques/enfoques/enfoques.module').then( m => m.EnfoquesPageModule)
  },
  {
    path: 'derechos',
    loadChildren: () => import('./enfoques/derechos/derechos.module').then( m => m.DerechosPageModule)
  },
  {
    path: 'genero',
    loadChildren: () => import('./enfoques/genero/genero.module').then( m => m.GeneroPageModule)
  },
  {
    path: 'interculturalidad',
    loadChildren: () => import('./enfoques/interculturalidad/interculturalidad.module').then( m => m.InterculturalidadPageModule)
  },
  {
    path: 'intergeneracional',
    loadChildren: () => import('./enfoques/intergeneracional/intergeneracional.module').then( m => m.IntergeneracionalPageModule)
  },
  {
    path: 'integralidad',
    loadChildren: () => import('./enfoques/integralidad/integralidad.module').then( m => m.IntegralidadPageModule)
  },
  {
    path: 'interseccionalidad',
    loadChildren: () => import('./enfoques/interseccionalidad/interseccionalidad.module').then( m => m.InterseccionalidadPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./rolycompetencias/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'rol',
    loadChildren: () => import('./rolycompetencias/rol/rol.module').then( m => m.RolPageModule)
  },
  {
    path: 'lineamientos',
    loadChildren: () => import('./rolycompetencias/lineamientos/lineamientos.module').then( m => m.LineamientosPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./mapis/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'violencia',
    loadChildren: () => import('./mapis/violencia/violencia.module').then( m => m.ViolenciaPageModule)
  },
  {
    path: 'violenciafisica',
    loadChildren: () => import('./mapis/violenciafisica/violenciafisica.module').then( m => m.ViolenciafisicaPageModule)
  },
  {
    path: 'violenciapsicologica',
    loadChildren: () => import('./mapis/violenciapsicologica/violenciapsicologica.module').then( m => m.ViolenciapsicologicaPageModule)
  },
  {
    path: 'violenciasexual',
    loadChildren: () => import('./mapis/violenciasexual/violenciasexual.module').then( m => m.ViolenciasexualPageModule)
  },
  {
    path: 'violenciaeconomica',
    loadChildren: () => import('./mapis/violenciaeconomica/violenciaeconomica.module').then( m => m.ViolenciaeconomicaPageModule)
  },
  {
    path: 'violenciasimbolica',
    loadChildren: () => import('./mapis/violenciasimbolica/violenciasimbolica.module').then( m => m.ViolenciasimbolicaPageModule)
  },
  {
    path: 'violenciapolitica',
    loadChildren: () => import('./mapis/violenciapolitica/violenciapolitica.module').then( m => m.ViolenciapoliticaPageModule)
  },
  {
    path: 'violenciagineco',
    loadChildren: () => import('./mapis/violenciagineco/violenciagineco.module').then( m => m.ViolenciaginecoPageModule)
  },
  {
    path: 'violenciasexdig',
    loadChildren: () => import('./mapis/violenciasexdig/violenciasexdig.module').then( m => m.ViolenciasexdigPageModule)
  },
  {
    path: 'ambito',
    loadChildren: () => import('./mapis/ambito/ambito.module').then( m => m.AmbitoPageModule)
  },
  {
    path: 'intrafamiliar',
    loadChildren: () => import('./mapis/intrafamiliar/intrafamiliar.module').then( m => m.IntrafamiliarPageModule)
  },
  {
    path: 'laboral',
    loadChildren: () => import('./mapis/laboral/laboral.module').then( m => m.LaboralPageModule)
  },
  {
    path: 'educativo',
    loadChildren: () => import('./mapis/educativo/educativo.module').then( m => m.EducativoPageModule)
  },
  {
    path: 'publico',
    loadChildren: () => import('./mapis/publico/publico.module').then( m => m.PublicoPageModule)
  },
  {
    path: 'deportivo',
    loadChildren: () => import('./mapis/deportivo/deportivo.module').then( m => m.DeportivoPageModule)
  },
  {
    path: 'institucional',
    loadChildren: () => import('./mapis/institucional/institucional.module').then( m => m.InstitucionalPageModule)
  },
  {
    path: 'centros',
    loadChildren: () => import('./mapis/centros/centros.module').then( m => m.CentrosPageModule)
  },
  {
    path: 'mediatico',
    loadChildren: () => import('./mapis/mediatico/mediatico.module').then( m => m.MediaticoPageModule)
  },
  {
    path: 'emergencia',
    loadChildren: () => import('./mapis/emergencia/emergencia.module').then( m => m.EmergenciaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
