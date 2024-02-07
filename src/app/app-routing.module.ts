import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SegundaPaginaComponent } from './segunda-pagina/segunda-pagina.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'segunda-pagina', component: SegundaPaginaComponent }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
