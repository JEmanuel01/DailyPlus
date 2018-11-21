import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'

import { LoginComponent } from '../inicio/iniciocomp/login/login.component';
import { GeneralComponent } from '../general/general.component';
import { AboutComponent } from '../inicio/iniciocomp/about/about.component';
import { ContactComponent } from '../inicio/iniciocomp/contact/contact.component';
import { NoticiasComponent } from '../general/generalcomp/noticias/noticias.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'general', component: GeneralComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'noticias', component: NoticiasComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {useHash: true} )
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule {}
