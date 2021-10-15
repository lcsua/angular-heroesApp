import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { HomeComponent } from './pages/home/home.component';
import { HeroeComponent } from './heroe/heroe/heroe.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,   
    children:[
      {
        path:'agregar',
        component: AgregarComponent
      },
      {
        path:'editar/:id',
        component: AgregarComponent
      },
      {
        path:'buscar',
        component: BuscarComponent
      },
      {
        path:'listado',
        component: ListadoComponent
      },      
      {
        path:':id',
        component: HeroeComponent
      }, 
      {
        path:'**',
        redirectTo: 'listado'
      }
    ]
  }
]


@NgModule({
   imports: [
    RouterModule.forChild( routes)
  ],
  exports:[
    RouterModule
  ]
})
export class HeroesRoutingModule { }
