import { DerslisteleComponent } from './components/derslistele/derslistele.component';
import { OdevComponent } from './components/odev/odev.component';
import { DersComponent } from './components/ders/ders.component';
import { OgrenciComponent } from './components/ogrenci/ogrenci.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },

  {
    path:'ogrenci',
    component:OgrenciComponent
  },

  {
    path:'ders',
    component:DersComponent
  },

  {
    path:'odev',
    component:OdevComponent
  },
  {
    path:'derslistele/:ogrId',
    component:DerslisteleComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
