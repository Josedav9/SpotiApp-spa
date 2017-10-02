import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NavbarComponent } from './components/compartidos/navbar/navbar.component';

//Rutas
import { APP_ROUTING } from './app.routes';

//Servicios
import { SpotifyService } from './services/spotify.service';
import { SinfotoPipe } from './sinfoto.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { ArtistaComponent } from './components/artista/artista.component';


@NgModule({
  declarations: [
    AppComponent,
    BuscarComponent,
    InicioComponent,
    NavbarComponent,
    SinfotoPipe,
    DomseguroPipe,
    ArtistaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [
    SpotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
