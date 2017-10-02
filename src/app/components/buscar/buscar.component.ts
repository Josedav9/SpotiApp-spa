import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
})
export class BuscarComponent implements OnInit {

  termino:string ="";

  constructor( private _spotifyService:SpotifyService ) { }

  ngOnInit() { }

  buscarArtista(){
    //console.log(this.termino);
   this._spotifyService.getArtistas( this.termino ).subscribe();
  }

}
