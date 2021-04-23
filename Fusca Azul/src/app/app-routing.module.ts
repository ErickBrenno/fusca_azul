import { EditarComponent } from './components/template/editar/editar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './components/template/header/header.component';


const routes: Routes = [
  {path:'', component:HeaderComponent},
  {path:'editar/:id', component:EditarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
