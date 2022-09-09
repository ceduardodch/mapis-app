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
    redirectTo: 'homep',
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
    path: 'enfoques2',
    loadChildren: () => import('./enfoques2/enfoques/enfoques.module').then( m => m.EnfoquesPageModule)
  },
  {
    path: 'derechos2',
    loadChildren: () => import('./enfoques2/derechos/derechos.module').then( m => m.DerechosPageModule)
  },
  {
    path: 'genero2',
    loadChildren: () => import('./enfoques2/genero/genero.module').then( m => m.GeneroPageModule)
  },
  {
    path: 'interculturalidad2',
    loadChildren: () => import('./enfoques2/interculturalidad/interculturalidad.module').then( m => m.InterculturalidadPageModule)
  },
  {
    path: 'intergeneracional2',
    loadChildren: () => import('./enfoques2/intergeneracional/intergeneracional.module').then( m => m.IntergeneracionalPageModule)
  },
  {
    path: 'integralidad2',
    loadChildren: () => import('./enfoques2/integralidad/integralidad.module').then( m => m.IntegralidadPageModule)
  },
  {
    path: 'interseccionalidad',
    loadChildren: () => import('./enfoques2/interseccionalidad/interseccionalidad.module').then( m => m.InterseccionalidadPageModule)
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
  {
    path: 'procedimientopol',
    loadChildren: () => import('./mapis2/procedimientopol/procedimientopol.module').then( m => m.ProcedimientopolPageModule)
  },
  {
    path: 'edidasadministrativas',
    loadChildren: () => import('./mapis/edidasadministrativas/edidasadministrativas.module').then( m => m.EdidasadministrativasPageModule)
  },
  {
    path: 'otorgamientomap',
    loadChildren: () => import('./mapis/otorgamientomap/otorgamientomap.module').then( m => m.OtorgamientomapPageModule)
  },
  {
    path: 'parametrosyval',
    loadChildren: () => import('./mapis/parametrosyval/parametrosyval.module').then( m => m.ParametrosyvalPageModule)
  },
  {
    path: 'caracteristicasmap',
    loadChildren: () => import('./mapis/caracteristicasmap/caracteristicasmap.module').then( m => m.CaracteristicasmapPageModule)
  },
  {
    path: 'casossex',
    loadChildren: () => import('./mapis/casossex/casossex.module').then( m => m.CasossexPageModule)
  },
  {
    path: 'pautas1',
    loadChildren: () => import('./mapis/pautas1/pautas1.module').then( m => m.Pautas1PageModule)
  },
  {
    path: 'normativaap1',
    loadChildren: () => import('./mapis/normativaap1/normativaap1.module').then( m => m.Normativaap1PageModule)
  },
  {
    path: 'casospsi',
    loadChildren: () => import('./mapis/casospsi/casospsi.module').then( m => m.CasospsiPageModule)
  },
  {
    path: 'pautas2',
    loadChildren: () => import('./mapis/pautas2/pautas2.module').then( m => m.Pautas2PageModule)
  },
  {
    path: 'normativaap2',
    loadChildren: () => import('./mapis/normativaap2/normativaap2.module').then( m => m.Normativaap2PageModule)
  },
  {
    path: 'casoseco',
    loadChildren: () => import('./mapis/casoseco/casoseco.module').then( m => m.CasosecoPageModule)
  },
  {
    path: 'normativaap3',
    loadChildren: () => import('./mapis/normativaap3/normativaap3.module').then( m => m.Normativaap3PageModule)
  },
  {
    path: 'pautas3',
    loadChildren: () => import('./mapis/pautas3/pautas3.module').then( m => m.Pautas3PageModule)
  },
  {
    path: 'casospoli',
    loadChildren: () => import('./mapis/casospoli/casospoli.module').then( m => m.CasospoliPageModule)
  },
  {
    path: 'normativaap4',
    loadChildren: () => import('./mapis/normativaap4/normativaap4.module').then( m => m.Normativaap4PageModule)
  },
  {
    path: 'pautas4',
    loadChildren: () => import('./mapis/pautas4/pautas4.module').then( m => m.Pautas4PageModule)
  },
  {
    path: 'casosgineco',
    loadChildren: () => import('./mapis/casosgineco/casosgineco.module').then( m => m.CasosginecoPageModule)
  },
  {
    path: 'pautas5',
    loadChildren: () => import('./mapis/pautas5/pautas5.module').then( m => m.Pautas5PageModule)
  },
  {
    path: 'normativaap5',
    loadChildren: () => import('./mapis/normativaap5/normativaap5.module').then( m => m.Normativaap5PageModule)
  },
  {
    path: 'pautas6',
    loadChildren: () => import('./mapis/pautas6/pautas6.module').then( m => m.Pautas6PageModule)
  },
  {
    path: 'normativaap6',
    loadChildren: () => import('./mapis/normativaap6/normativaap6.module').then( m => m.Normativaap6PageModule)
  },
  {
    path: 'casossim',
    loadChildren: () => import('./mapis/casossim/casossim.module').then( m => m.CasossimPageModule)
  },
  {
    path: 'pautas7',
    loadChildren: () => import('./mapis/pautas7/pautas7.module').then( m => m.Pautas7PageModule)
  },
  {
    path: 'normativaap7',
    loadChildren: () => import('./mapis/normativaap7/normativaap7.module').then( m => m.Normativaap7PageModule)
  },
  {
    path: 'casossexdig',
    loadChildren: () => import('./mapis/casossexdig/casossexdig.module').then( m => m.CasossexdigPageModule)
  },
  {
    path: 'pautas8',
    loadChildren: () => import('./mapis/pautas8/pautas8.module').then( m => m.Pautas8PageModule)
  },
  {
    path: 'normativaap8',
    loadChildren: () => import('./mapis/normativaap8/normativaap8.module').then( m => m.Normativaap8PageModule)
  },
  {
    path: 'casossex2',
    loadChildren: () => import('./mapis/casossex2/casossex2.module').then( m => m.Casossex2PageModule)
  },
  {
    path: 'pautas9',
    loadChildren: () => import('./mapis/pautas9/pautas9.module').then( m => m.Pautas9PageModule)
  },
  {
    path: 'normativaap9',
    loadChildren: () => import('./mapis/normativaap9/normativaap9.module').then( m => m.Normativaap9PageModule)
  },
  {
    path: 'casospsi2',
    loadChildren: () => import('./mapis/casospsi2/casospsi2.module').then( m => m.Casospsi2PageModule)
  },
  {
    path: 'pautas10',
    loadChildren: () => import('./mapis/pautas10/pautas10.module').then( m => m.Pautas10PageModule)
  },
  {
    path: 'normativaap10',
    loadChildren: () => import('./mapis/normativaap10/normativaap10.module').then( m => m.Normativaap10PageModule)
  },
  {
    path: 'preg1',
    loadChildren: () => import('./pregunta2/preg1/preg1.module').then( m => m.Preg1PageModule)
  },
  {
    path: 'preg2',
    loadChildren: () => import('./pregunta2/preg2/preg2.module').then( m => m.Preg2PageModule)
  },
  {
    path: 'preg3',
    loadChildren: () => import('./pregunta2/preg3/preg3.module').then( m => m.Preg3PageModule)
  },
  {
    path: 'preg4',
    loadChildren: () => import('./pregunta2/preg4/preg4.module').then( m => m.Preg4PageModule)
  },
  {
    path: 'preg5',
    loadChildren: () => import('./pregunta2/preg5/preg5.module').then( m => m.Preg5PageModule)
  },
  {
    path: 'pregmenu2',
    loadChildren: () => import('./pregunta2/pregmenu2/pregmenu2.module').then( m => m.Pregmenu2PageModule)
  },
  {
    path: 'pregmenu222',
    loadChildren: () => import('./pregunta2/pregmenu222/pregmenu222.module').then( m => m.Pregmenu222PageModule)
  },
  {
    path: 'pregunta6',
    loadChildren: () => import('./pregunta/pregunta6/pregunta6.module').then( m => m.Pregunta6PageModule)
  },
  {
    path: 'pregunta7',
    loadChildren: () => import('./pregunta/pregunta7/pregunta7.module').then( m => m.Pregunta7PageModule)
  },
  {
    path: 'pregunta8',
    loadChildren: () => import('./pregunta/pregunta8/pregunta8.module').then( m => m.Pregunta8PageModule)
  },
  {
    path: 'pregunta9',
    loadChildren: () => import('./pregunta/pregunta9/pregunta9.module').then( m => m.Pregunta9PageModule)
  },
  {
    path: 'pregunta10',
    loadChildren: () => import('./pregunta/pregunta10/pregunta10.module').then( m => m.Pregunta10PageModule)
  },
  {
    path: 'pregunta11',
    loadChildren: () => import('./pregunta/pregunta11/pregunta11.module').then( m => m.Pregunta11PageModule)
  },
  {
    path: 'pregunta12',
    loadChildren: () => import('./pregunta/pregunta12/pregunta12.module').then( m => m.Pregunta12PageModule)
  },
  {
    path: 'submenu1',
    loadChildren: () => import('./pregunta/submenu1/submenu1.module').then( m => m.Submenu1PageModule)
  },
  {
    path: 'homep',
    loadChildren: () => import('./homeprincipal/homep/homep.module').then( m => m.HomepPageModule)
  },
  {
    path: 'roll',
    loadChildren: () => import('./rolycompetencias1/roll/roll.module').then( m => m.RollPageModule)
  },
  {
    path: 'menuroll',
    loadChildren: () => import('./rolycompetencias1/menuroll/menuroll.module').then( m => m.MenurollPageModule)
  },
  {
    path: 'lineamientodeac',
    loadChildren: () => import('./rolycompetencias1/lineamientodeac/lineamientodeac.module').then( m => m.LineamientodeacPageModule)
  },  {
    path: 'casoseco2',
    loadChildren: () => import('./mapis2/casoseco2/casoseco2.module').then( m => m.Casoseco2PageModule)
  },
  {
    path: 'casosgineco2',
    loadChildren: () => import('./mapis2/casosgineco2/casosgineco2.module').then( m => m.Casosgineco2PageModule)
  },
  {
    path: 'casospoli2',
    loadChildren: () => import('./mapis2/casospoli2/casospoli2.module').then( m => m.Casospoli2PageModule)
  },
  {
    path: 'casospsi2a',
    loadChildren: () => import('./mapis2/casospsi2a/casospsi2a.module').then( m => m.Casospsi2aPageModule)
  },
  {
    path: 'casospsi2b',
    loadChildren: () => import('./mapis2/casospsi2b/casospsi2b.module').then( m => m.Casospsi2bPageModule)
  },
  {
    path: 'casossexa',
    loadChildren: () => import('./mapis2/casossexa/casossexa.module').then( m => m.CasossexaPageModule)
  },
  {
    path: 'casossexb',
    loadChildren: () => import('./mapis2/casossexb/casossexb.module').then( m => m.CasossexbPageModule)
  },
  {
    path: 'casossexdig2',
    loadChildren: () => import('./mapis2/casossexdig2/casossexdig2.module').then( m => m.Casossexdig2PageModule)
  },
  {
    path: 'casossim2',
    loadChildren: () => import('./mapis2/casossim2/casossim2.module').then( m => m.Casossim2PageModule)
  },
  {
    path: 'normativaap12',
    loadChildren: () => import('./mapis2/normativaap12/normativaap12.module').then( m => m.Normativaap12PageModule)
  },
  {
    path: 'normativaap22',
    loadChildren: () => import('./mapis2/normativaap22/normativaap22.module').then( m => m.Normativaap22PageModule)
  },
  {
    path: 'normativaap32',
    loadChildren: () => import('./mapis2/normativaap32/normativaap32.module').then( m => m.Normativaap32PageModule)
  },
  {
    path: 'normativaap42',
    loadChildren: () => import('./mapis2/normativaap42/normativaap42.module').then( m => m.Normativaap42PageModule)
  },
  {
    path: 'normativaap52',
    loadChildren: () => import('./mapis2/normativaap52/normativaap52.module').then( m => m.Normativaap52PageModule)
  },
  {
    path: 'normativaap62',
    loadChildren: () => import('./mapis2/normativaap62/normativaap62.module').then( m => m.Normativaap62PageModule)
  },
  {
    path: 'normativaap72',
    loadChildren: () => import('./mapis2/normativaap72/normativaap72.module').then( m => m.Normativaap72PageModule)
  },
  {
    path: 'normativaap82',
    loadChildren: () => import('./mapis2/normativaap82/normativaap82.module').then( m => m.Normativaap82PageModule)
  },
  {
    path: 'normativaap92',
    loadChildren: () => import('./mapis2/normativaap92/normativaap92.module').then( m => m.Normativaap92PageModule)
  },
  {
    path: 'normativaap102',
    loadChildren: () => import('./mapis2/normativaap102/normativaap102.module').then( m => m.Normativaap102PageModule)
  },
  {
    path: 'pautas12',
    loadChildren: () => import('./mapis2/pautas12/pautas12.module').then( m => m.Pautas12PageModule)
  },
  {
    path: 'pautas22',
    loadChildren: () => import('./mapis2/pautas22/pautas22.module').then( m => m.Pautas22PageModule)
  },
  {
    path: 'pautas32',
    loadChildren: () => import('./mapis2/pautas32/pautas32.module').then( m => m.Pautas32PageModule)
  },
  {
    path: 'pautas42',
    loadChildren: () => import('./mapis2/pautas42/pautas42.module').then( m => m.Pautas42PageModule)
  },
  {
    path: 'pautas52',
    loadChildren: () => import('./mapis2/pautas52/pautas52.module').then( m => m.Pautas52PageModule)
  },
  {
    path: 'pautas62',
    loadChildren: () => import('./mapis2/pautas62/pautas62.module').then( m => m.Pautas62PageModule)
  },
  {
    path: 'pautas72',
    loadChildren: () => import('./mapis2/pautas72/pautas72.module').then( m => m.Pautas72PageModule)
  },
  {
    path: 'pautas82',
    loadChildren: () => import('./mapis2/pautas82/pautas82.module').then( m => m.Pautas82PageModule)
  },
  {
    path: 'pautas92',
    loadChildren: () => import('./mapis2/pautas92/pautas92.module').then( m => m.Pautas92PageModule)
  },
  {
    path: 'pautas102',
    loadChildren: () => import('./mapis2/pautas102/pautas102.module').then( m => m.Pautas102PageModule)
  },
  {
    path: 'ayuda1',
    loadChildren: () => import('./ayuda/ayuda1/ayuda1.module').then( m => m.Ayuda1PageModule)
  },
  {
    path: 'link1',
    loadChildren: () => import('./rolycompetencias/link1/link1.module').then( m => m.Link1PageModule)
  },
  {
    path: 'link2',
    loadChildren: () => import('./rolycompetencias/link2/link2.module').then( m => m.Link2PageModule)
  },
  {
    path: 'link3',
    loadChildren: () => import('./rolycompetencias/link3/link3.module').then( m => m.Link3PageModule)
  },
  {
    path: 'link4',
    loadChildren: () => import('./rolycompetencias/link4/link4.module').then( m => m.Link4PageModule)
  },
  {
    path: 'link5',
    loadChildren: () => import('./rolycompetencias/link5/link5.module').then( m => m.Link5PageModule)
  },
  {
    path: 'link6',
    loadChildren: () => import('./rolycompetencias/link6/link6.module').then( m => m.Link6PageModule)
  },
  {
    path: 'link7',
    loadChildren: () => import('./rolycompetencias/link7/link7.module').then( m => m.Link7PageModule)
  },
  {
    path: 'link8',
    loadChildren: () => import('./rolycompetencias/link8/link8.module').then( m => m.Link8PageModule)
  },
  {
    path: 'link9',
    loadChildren: () => import('./rolycompetencias/link9/link9.module').then( m => m.Link9PageModule)
  },
  {
    path: 'link10',
    loadChildren: () => import('./rolycompetencias/link10/link10.module').then( m => m.Link10PageModule)
  },
  {
    path: 'link11',
    loadChildren: () => import('./rolycompetencias/link11/link11.module').then( m => m.Link11PageModule)
  },
  {
    path: 'link12',
    loadChildren: () => import('./rolycompetencias/link12/link12.module').then( m => m.Link12PageModule)
  },
  {
    path: 'link13',
    loadChildren: () => import('./rolycompetencias/link13/link13.module').then( m => m.Link13PageModule)
  },
  {
    path: 'link14',
    loadChildren: () => import('./rolycompetencias/link14/link14.module').then( m => m.Link14PageModule)
  },
  {
    path: 'link15',
    loadChildren: () => import('./rolycompetencias/link15/link15.module').then( m => m.Link15PageModule)
  },
  {
    path: 'link16',
    loadChildren: () => import('./rolycompetencias/link16/link16.module').then( m => m.Link16PageModule)
  },
  {
    path: 'link17',
    loadChildren: () => import('./rolycompetencias/link17/link17.module').then( m => m.Link17PageModule)
  },
  {
    path: 'link18',
    loadChildren: () => import('./rolycompetencias/link18/link18.module').then( m => m.Link18PageModule)
  },
  {
    path: 'link19',
    loadChildren: () => import('./rolycompetencias/link19/link19.module').then( m => m.Link19PageModule)
  },
  {
    path: 'link20',
    loadChildren: () => import('./rolycompetencias/link20/link20.module').then( m => m.Link20PageModule)
  },
  {
    path: 'link21',
    loadChildren: () => import('./rolycompetencias/link21/link21.module').then( m => m.Link21PageModule)
  },
  {
    path: 'link22',
    loadChildren: () => import('./rolycompetencias/link22/link22.module').then( m => m.Link22PageModule)
  },
  {
    path: 'link23',
    loadChildren: () => import('./rolycompetencias/link23/link23.module').then( m => m.Link23PageModule)
  },
  {
    path: 'link24',
    loadChildren: () => import('./rolycompetencias/link24/link24.module').then( m => m.Link24PageModule)
  },
  {
    path: 'link25',
    loadChildren: () => import('./rolycompetencias/link25/link25.module').then( m => m.Link25PageModule)
  },
  {
    path: 'link26',
    loadChildren: () => import('./rolycompetencias/link26/link26.module').then( m => m.Link26PageModule)
  },
  {
    path: 'link27',
    loadChildren: () => import('./rolycompetencias/link27/link27.module').then( m => m.Link27PageModule)
  },
  {
    path: 'link28',
    loadChildren: () => import('./rolycompetencias/link28/link28.module').then( m => m.Link28PageModule)
  },
  {
    path: 'link29',
    loadChildren: () => import('./rolycompetencias/link29/link29.module').then( m => m.Link29PageModule)
  },
  {
    path: 'link30',
    loadChildren: () => import('./rolycompetencias/link30/link30.module').then( m => m.Link30PageModule)
  },
  {
    path: 'link31',
    loadChildren: () => import('./rolycompetencias/link31/link31.module').then( m => m.Link31PageModule)
  },
  {
    path: 'link32',
    loadChildren: () => import('./rolycompetencias/link32/link32.module').then( m => m.Link32PageModule)
  },
  {
    path: 'link33',
    loadChildren: () => import('./rolycompetencias/link33/link33.module').then( m => m.Link33PageModule)
  },
  {
    path: 'link34',
    loadChildren: () => import('./rolycompetencias/link34/link34.module').then( m => m.Link34PageModule)
  },
  {
    path: 'link35',
    loadChildren: () => import('./rolycompetencias/link35/link35.module').then( m => m.Link35PageModule)
  },
  {
    path: 'link36',
    loadChildren: () => import('./rolycompetencias/link36/link36.module').then( m => m.Link36PageModule)
  },
  {
    path: 'link37',
    loadChildren: () => import('./rolycompetencias/link37/link37.module').then( m => m.Link37PageModule)
  },
  {
    path: 'link38',
    loadChildren: () => import('./rolycompetencias/link38/link38.module').then( m => m.Link38PageModule)
  },
  {
    path: 'link39',
    loadChildren: () => import('./rolycompetencias/link39/link39.module').then( m => m.Link39PageModule)
  },
  {
    path: 'link40',
    loadChildren: () => import('./rolycompetencias/link40/link40.module').then( m => m.Link40PageModule)
  },
  {
    path: 'link41',
    loadChildren: () => import('./rolycompetencias/link41/link41.module').then( m => m.Link41PageModule)
  },
  {
    path: 'link42',
    loadChildren: () => import('./rolycompetencias/link42/link42.module').then( m => m.Link42PageModule)
  },
  {
    path: 'link43',
    loadChildren: () => import('./rolycompetencias/link43/link43.module').then( m => m.Link43PageModule)
  },
  {
    path: 'link44',
    loadChildren: () => import('./rolycompetencias/link44/link44.module').then( m => m.Link44PageModule)
  },
  {
    path: 'link45',
    loadChildren: () => import('./rolycompetencias/link45/link45.module').then( m => m.Link45PageModule)
  },
  {
    path: 'link42',
    loadChildren: () => import('./mapis/link42/link42.module').then( m => m.Link42PageModule)
  },
  {
    path: 'link43',
    loadChildren: () => import('./mapis/link43/link43.module').then( m => m.Link43PageModule)
  },
  {
    path: 'link44',
    loadChildren: () => import('./mapis/link44/link44.module').then( m => m.Link44PageModule)
  },
  {
    path: 'link45',
    loadChildren: () => import('./mapis/link45/link45.module').then( m => m.Link45PageModule)
  },
  {
    path: 'link46',
    loadChildren: () => import('./mapis/link46/link46.module').then( m => m.Link46PageModule)
  },
  {
    path: 'link47',
    loadChildren: () => import('./mapis/link47/link47.module').then( m => m.Link47PageModule)
  },
  {
    path: 'link48',
    loadChildren: () => import('./mapis/link48/link48.module').then( m => m.Link48PageModule)
  },
  {
    path: 'link49',
    loadChildren: () => import('./mapis/link49/link49.module').then( m => m.Link49PageModule)
  },
  {
    path: 'link50',
    loadChildren: () => import('./mapis/link50/link50.module').then( m => m.Link50PageModule)
  },
  {
    path: 'link51',
    loadChildren: () => import('./mapis/link51/link51.module').then( m => m.Link51PageModule)
  },
  {
    path: 'link52',
    loadChildren: () => import('./mapis/link52/link52.module').then( m => m.Link52PageModule)
  },
  {
    path: 'link53',
    loadChildren: () => import('./mapis/link53/link53.module').then( m => m.Link53PageModule)
  },
  {
    path: 'link54',
    loadChildren: () => import('./mapis/link54/link54.module').then( m => m.Link54PageModule)
  },
  {
    path: 'link55',
    loadChildren: () => import('./mapis/link55/link55.module').then( m => m.Link55PageModule)
  },
  {
    path: 'link56',
    loadChildren: () => import('./mapis/link56/link56.module').then( m => m.Link56PageModule)
  },
  {
    path: 'link57',
    loadChildren: () => import('./mapis/link57/link57.module').then( m => m.Link57PageModule)
  },
  {
    path: 'link58',
    loadChildren: () => import('./mapis/link58/link58.module').then( m => m.Link58PageModule)
  },
  {
    path: 'link59',
    loadChildren: () => import('./mapis/link59/link59.module').then( m => m.Link59PageModule)
  },
  {
    path: 'link60',
    loadChildren: () => import('./mapis/link60/link60.module').then( m => m.Link60PageModule)
  },
  {
    path: 'otrolink1',
    loadChildren: () => import('./mapis/otrolink1/otrolink1.module').then( m => m.Otrolink1PageModule)
  },
  {
    path: 'otrolink2',
    loadChildren: () => import('./mapis/otrolink2/otrolink2.module').then( m => m.Otrolink2PageModule)
  },
  {
    path: 'otrolink3',
    loadChildren: () => import('./mapis/otrolink3/otrolink3.module').then( m => m.Otrolink3PageModule)
  },
  {
    path: 'otrolink4',
    loadChildren: () => import('./mapis/otrolink4/otrolink4.module').then( m => m.Otrolink4PageModule)
  },
  {
    path: 'otrolink5',
    loadChildren: () => import('./mapis/otrolink5/otrolink5.module').then( m => m.Otrolink5PageModule)
  },
  {
    path: 'otrolink6',
    loadChildren: () => import('./mapis/otrolink6/otrolink6.module').then( m => m.Otrolink6PageModule)
  },
  {
    path: 'otrolink7',
    loadChildren: () => import('./mapis/otrolink7/otrolink7.module').then( m => m.Otrolink7PageModule)
  },
  {
    path: 'otrolink8',
    loadChildren: () => import('./mapis/otrolink8/otrolink8.module').then( m => m.Otrolink8PageModule)
  },
  {
    path: 'otrolink9',
    loadChildren: () => import('./mapis/otrolink9/otrolink9.module').then( m => m.Otrolink9PageModule)
  },
  {
    path: 'otrolink10',
    loadChildren: () => import('./mapis/otrolink10/otrolink10.module').then( m => m.Otrolink10PageModule)
  },
  {
    path: 'otrolink11',
    loadChildren: () => import('./mapis/otrolink11/otrolink11.module').then( m => m.Otrolink11PageModule)
  },
  {
    path: 'otrolink12',
    loadChildren: () => import('./mapis/otrolink12/otrolink12.module').then( m => m.Otrolink12PageModule)
  },
  {
    path: 'otrolink13',
    loadChildren: () => import('./mapis/otrolink13/otrolink13.module').then( m => m.Otrolink13PageModule)
  },
  {
    path: 'otrolink14',
    loadChildren: () => import('./mapis/otrolink14/otrolink14.module').then( m => m.Otrolink14PageModule)
  },
  {
    path: 'otrolink15',
    loadChildren: () => import('./mapis/otrolink15/otrolink15.module').then( m => m.Otrolink15PageModule)
  },
  {
    path: 'otrolink16',
    loadChildren: () => import('./mapis/otrolink16/otrolink16.module').then( m => m.Otrolink16PageModule)
  },
  {
    path: 'otrolink17',
    loadChildren: () => import('./mapis/otrolink17/otrolink17.module').then( m => m.Otrolink17PageModule)
  },
  {
    path: 'otrolink18',
    loadChildren: () => import('./mapis/otrolink18/otrolink18.module').then( m => m.Otrolink18PageModule)
  },
  {
    path: 'otrolink19',
    loadChildren: () => import('./mapis/otrolink19/otrolink19.module').then( m => m.Otrolink19PageModule)
  },
  {
    path: 'otrolink20',
    loadChildren: () => import('./mapis/otrolink20/otrolink20.module').then( m => m.Otrolink20PageModule)
  },
  {
    path: 'otrolink21',
    loadChildren: () => import('./mapis/otrolink21/otrolink21.module').then( m => m.Otrolink21PageModule)
  },
  {
    path: 'otrolink22',
    loadChildren: () => import('./mapis/otrolink22/otrolink22.module').then( m => m.Otrolink22PageModule)
  },
  {
    path: 'otrolink23',
    loadChildren: () => import('./mapis/otrolink23/otrolink23.module').then( m => m.Otrolink23PageModule)
  },
  {
    path: 'otrolink24',
    loadChildren: () => import('./mapis/otrolink24/otrolink24.module').then( m => m.Otrolink24PageModule)
  },
  {
    path: 'otrolink25',
    loadChildren: () => import('./mapis/otrolink25/otrolink25.module').then( m => m.Otrolink25PageModule)
  },
  {
    path: 'otrolink26',
    loadChildren: () => import('./mapis/otrolink26/otrolink26.module').then( m => m.Otrolink26PageModule)
  },
  {
    path: 'otrolink27',
    loadChildren: () => import('./mapis/otrolink27/otrolink27.module').then( m => m.Otrolink27PageModule)
  },
  {
    path: 'otrolink28',
    loadChildren: () => import('./mapis/otrolink28/otrolink28.module').then( m => m.Otrolink28PageModule)
  },
  {
    path: 'otrolink29',
    loadChildren: () => import('./mapis/otrolink29/otrolink29.module').then( m => m.Otrolink29PageModule)
  },
  {
    path: 'otrolink30',
    loadChildren: () => import('./mapis/otrolink30/otrolink30.module').then( m => m.Otrolink30PageModule)
  },
  {
    path: 'otrolink31',
    loadChildren: () => import('./mapis/otrolink31/otrolink31.module').then( m => m.Otrolink31PageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
