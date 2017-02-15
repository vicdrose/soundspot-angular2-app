import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class SpotifyService{
    private searchUrl: string;
    private artistUrl: string;
    private client_id = '4d79b629d00345fbb67179676a110fb8';
    private client_secret = '9fea1db02cd8461eb7ab62ffe43d8859';

    constructor(private _http:Http){

    }

    searchMusic(str:string, type="artist"){
        this.searchUrl = 'https://api.spotify.com/v1/search?query='+str+'&offset=0&limit=20&type='+type+'&market=US';
        return this._http.get(this.searchUrl)
            .map(res => res.json());
    }

    getArtist(id:string){
        this.artistUrl = 'https://api.spotify.com/artists/'+id;
        return this._http.get(this.artistUrl)
            .map(res => res.json());
    }
}