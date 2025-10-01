import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome', 
    pathMatch: 'full',
  },
  {
    path: 'welcome',
    loadComponent: () =>
      import('./welcome/welcome.page').then((m) => m.WelcomePage),
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'sumadora',
    loadComponent: () =>
      import('./sumadora/sumadora.page').then((m) => m.SumadoraPage),
  },
  {
    path: 'traductor',
    loadComponent: () => 
      import('./traductor/traductor.page').then( m => m.TraductorPage)
  },
  {
    path: 'tablamultiplicar',
    loadComponent: () => 
      import('./tablamultiplicar/tablamultiplicar.page').then( m => m.TablamultiplicarPage)
  },
  {
    path: 'experiencia',
    loadComponent: () => import('./experiencia/experiencia.page').then( m => m.ExperienciaPage)
  },
];
