import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'home2',
    loadChildren: () => import('./home2/home.module').then( m => m.HomePageModule)
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
  {
    path: 'menu1',
    loadChildren: () => import('./mapis/menu1/menu1.module').then( m => m.Menu1PageModule)
  },
  {
    path: 'menu2',
    loadChildren: () => import('./mapis/menu2/menu2.module').then( m => m.Menu2PageModule)
  },
  {
    path: 'menu3',
    loadChildren: () => import('./mapis/menu3/menu3.module').then( m => m.Menu3PageModule)
  },
  {
    path: 'menu4',
    loadChildren: () => import('./mapis/menu4/menu4.module').then( m => m.Menu4PageModule)
  },
  {
    path: 'menu5',
    loadChildren: () => import('./mapis/menu5/menu5.module').then( m => m.Menu5PageModule)
  },
  {
    path: 'violenciagenero',
    loadChildren: () => import('./mapis/violenciagenero/violenciagenero.module').then( m => m.ViolenciageneroPageModule)
  },
  {
    path: 'menu6',
    loadChildren: () => import('./mapis/menu6/menu6.module').then( m => m.Menu6PageModule)
  },
  {
    path: 'menu7',
    loadChildren: () => import('./mapis/menu7/menu7.module').then( m => m.Menu7PageModule)
  },
  



  {
    path: 'violencia2',
    loadChildren: () => import('./mapis2/violencia/violencia.module').then( m => m.ViolenciaPageModule)
  },
  {
    path: 'violenciafisica2',
    loadChildren: () => import('./mapis2/violenciafisica/violenciafisica.module').then( m => m.ViolenciafisicaPageModule)
  },
  {
    path: 'violenciapsicologica2',
    loadChildren: () => import('./mapis2/violenciapsicologica/violenciapsicologica.module').then( m => m.ViolenciapsicologicaPageModule)
  },
  {
    path: 'violenciasexual2',
    loadChildren: () => import('./mapis2/violenciasexual/violenciasexual.module').then( m => m.ViolenciasexualPageModule)
  },
  {
    path: 'violenciaeconomica2',
    loadChildren: () => import('./mapis2/violenciaeconomica/violenciaeconomica.module').then( m => m.ViolenciaeconomicaPageModule)
  },
  {
    path: 'violenciasimbolica2',
    loadChildren: () => import('./mapis2/violenciasimbolica/violenciasimbolica.module').then( m => m.ViolenciasimbolicaPageModule)
  },
  {
    path: 'violenciapolitica2',
    loadChildren: () => import('./mapis2/violenciapolitica/violenciapolitica.module').then( m => m.ViolenciapoliticaPageModule)
  },
  {
    path: 'violenciagineco2',
    loadChildren: () => import('./mapis2/violenciagineco/violenciagineco.module').then( m => m.ViolenciaginecoPageModule)
  },
  {
    path: 'violenciasexdig2',
    loadChildren: () => import('./mapis2/violenciasexdig/violenciasexdig.module').then( m => m.ViolenciasexdigPageModule)
  },
  {
    path: 'ambito2',
    loadChildren: () => import('./mapis2/ambito/ambito.module').then( m => m.AmbitoPageModule)
  },
  {
    path: 'intrafamiliar2',
    loadChildren: () => import('./mapis2/intrafamiliar/intrafamiliar.module').then( m => m.IntrafamiliarPageModule)
  },
  {
    path: 'laboral2',
    loadChildren: () => import('./mapis2/laboral/laboral.module').then( m => m.LaboralPageModule)
  },
  {
    path: 'educativo2',
    loadChildren: () => import('./mapis2/educativo/educativo.module').then( m => m.EducativoPageModule)
  },
  {
    path: 'publico2',
    loadChildren: () => import('./mapis2/publico/publico.module').then( m => m.PublicoPageModule)
  },
  {
    path: 'deportivo2',
    loadChildren: () => import('./mapis2/deportivo/deportivo.module').then( m => m.DeportivoPageModule)
  },
  {
    path: 'institucional2',
    loadChildren: () => import('./mapis2/institucional/institucional.module').then( m => m.InstitucionalPageModule)
  },
  {
    path: 'centros2',
    loadChildren: () => import('./mapis2/centros/centros.module').then( m => m.CentrosPageModule)
  },
  {
    path: 'mediatico2',
    loadChildren: () => import('./mapis2/mediatico/mediatico.module').then( m => m.MediaticoPageModule)
  },
  {
    path: 'emergencia2',
    loadChildren: () => import('./mapis2/emergencia/emergencia.module').then( m => m.EmergenciaPageModule)
  },
  {
    path: 'menu12',
    loadChildren: () => import('./mapis2/menu1/menu1.module').then( m => m.Menu1PageModule)
  },
  {
    path: 'menu22',
    loadChildren: () => import('./mapis2/menu2/menu2.module').then( m => m.Menu2PageModule)
  },
  {
    path: 'menu32',
    loadChildren: () => import('./mapis2/menu3/menu3.module').then( m => m.Menu3PageModule)
  },
  {
    path: 'menu42',
    loadChildren: () => import('./mapis2/menu4/menu4.module').then( m => m.Menu4PageModule)
  },
  {
    path: 'menu52',
    loadChildren: () => import('./mapis2/menu5/menu5.module').then( m => m.Menu5PageModule)
  },
  {
    path: 'violenciagenero2',
    loadChildren: () => import('./mapis2/violenciagenero/violenciagenero.module').then( m => m.ViolenciageneroPageModule)
  },
  {
    path: 'menu62',
    loadChildren: () => import('./mapis2/menu6/menu6.module').then( m => m.Menu6PageModule)
  },
  {
    path: 'menu72',
    loadChildren: () => import('./mapis2/menu7/menu7.module').then( m => m.Menu7PageModule)
  },
  


  {
    path: 'pregmenu',
    loadChildren: () => import('./pregunta/pregmenu/pregmenu.module').then( m => m.PregmenuPageModule)
  },
  {
    path: 'pregunta1',
    loadChildren: () => import('./pregunta/pregunta1/pregunta1.module').then( m => m.Pregunta1PageModule)
  },
  {
    path: 'pregunta2',
    loadChildren: () => import('./pregunta/pregunta2/pregunta2.module').then( m => m.Pregunta2PageModule)
  },
  {
    path: 'pregunta3',
    loadChildren: () => import('./pregunta/pregunta3/pregunta3.module').then( m => m.Pregunta3PageModule)
  },
  {
    path: 'pregunta4',
    loadChildren: () => import('./pregunta/pregunta4/pregunta4.module').then( m => m.Pregunta4PageModule)
  },
  {
    path: 'pregunta5',
    loadChildren: () => import('./pregunta/pregunta5/pregunta5.module').then( m => m.Pregunta5PageModule)
  },
  {
    path: 'descripciones',
    loadChildren: () => import('./acciones/descripciones/descripciones.module').then( m => m.DescripcionesPageModule)
  },
  {
    path: 'procedimientos',
    loadChildren: () => import('./acciones/procedimientos/procedimientos.module').then( m => m.ProcedimientosPageModule)
  },
  {
    path: 'casos',
    loadChildren: () => import('./mapis/casos/casos.module').then( m => m.CasosPageModule)
  },
  {
    path: 'casos2',
    loadChildren: () => import('./mapis2/casos2/casos2.module').then( m => m.Casos2PageModule)
  },
  {
    path: 'lineamientosespec',
    loadChildren: () => import('./rolycompetencias/lineamientosespec/lineamientosespec.module').then( m => m.LineamientosespecPageModule)
  },
  {
    path: 'acciones',
    loadChildren: () => import('./mapis/acciones/acciones.module').then( m => m.AccionesPageModule)
  },
  {
    path: 'descripcion',
    loadChildren: () => import('./mapis/descripcion/descripcion.module').then( m => m.DescripcionPageModule)
  },
  {
    path: 'procedimineto',
    loadChildren: () => import('./mapis/procedimineto/procedimineto.module').then( m => m.ProcediminetoPageModule)
  },
  {
    path: 'acciones2',
    loadChildren: () => import('./mapis2/acciones2/acciones2.module').then( m => m.Acciones2PageModule)
  },
  {
    path: 'descripcion2',
    loadChildren: () => import('./mapis2/descripcion2/descripcion2.module').then( m => m.Descripcion2PageModule)
  },
  {
    path: 'procedimineto2',
    loadChildren: () => import('./mapis2/procedimineto2/procedimineto2.module').then( m => m.Procedimineto2PageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
