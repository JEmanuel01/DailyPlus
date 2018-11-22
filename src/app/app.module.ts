import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//Rutas
import { AppComponent } from './app.component';
import { LoginComponent } from './inicio/iniciocomp/login/login.component';
import { GeneralComponent } from './general/general.component';
import { AppRoutingModule } from './routing/app-routing.module';
import { AboutComponent } from './inicio/iniciocomp/about/about.component';
import { ContactComponent } from './inicio/iniciocomp/contact/contact.component';
import { InicioComponent } from './inicio/inicio.component';
import { NoticiasComponent } from './general/generalcomp/noticias/noticias.component';
import { ServiceNoticiaService } from './services/service-noticia.service';
import { environment } from '../environments/environment';

//Angular
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

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
    AppRoutingModule,
    FormsModule, 
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [ServiceNoticiaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
