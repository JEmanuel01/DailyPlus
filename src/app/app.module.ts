import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Rutas
import { AppComponent } from './app.component';
import { LoginComponent } from './inicio/iniciocomp/login/login.component';
import { GeneralComponent } from './general/general.component';
import { AppRoutingModule } from './routing/app-routing.module';
import { AboutComponent } from './inicio/iniciocomp/about/about.component';
import { ContactComponent } from './inicio/iniciocomp/contact/contact.component';
import { InicioComponent } from './inicio/inicio.component';
import { NoticiasComponent } from './general/generalcomp/noticias/noticias.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GeneralComponent,
    AboutComponent,
    ContactComponent,
    InicioComponent,
    NoticiasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
