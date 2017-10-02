import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas:any[] =[];
  urlBusqueda:string  = "https://api.spotify.com/v1/search";
  urlArtista:string = "https://api.spotify.com/v1/artists";
  permiso = 'BQDtkpsRh6D3rC1gKMKjsZeZos-zaR8pA_QqPo7hafMmH76DtFCQIgSjB7UfV_l0SlbVHdtpe2KyMcsudVuHvA';

  constructor(private http:Http) {

   }

  getArtistas(termino:string){

    let headers = new Headers();
    headers.append('authorization', 'Bearer ' + this.permiso);

    let query = `?q=${ termino }&type=artist`
    let url = this.urlBusqueda+query;

    return this.http.get( url, { headers } ).map( res => {
      return this.artistas = res.json().artists.items;
    })

  }

  getArtista( id:string ){
    let headers = new Headers();
    headers.append('authorization', 'Bearer '+ this.permiso);

    let query = `/${ id }`
    let url = this.urlArtista+query;

    return this.http.get( url, {headers} ).map( res => {
      console.log(res.json());
      return res.json()
    })


  }

  getTop( id:string ){
    let headers = new Headers();
    headers.append('authorization', 'Bearer '+this.permiso);

    let query = `/${ id }/top-tracks?country=US`
    let url = this.urlArtista+query;

    return this.http.get( url, {headers} ).map( res => {
      console.log(res.json().tracks);
      return res.json().tracks;
    })


  }

}
