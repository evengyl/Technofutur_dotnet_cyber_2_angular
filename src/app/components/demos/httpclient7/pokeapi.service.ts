import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn : 'root',
})
export class PokeApiService{

    private baseUrl : string = "https://pokeapi.co/api/v2"

    //import dans le appModule : 
    //import { HttpClientModule } from '@angular/common/http'

    constructor(private readonly http: HttpClient) {
        
    }

    getPokemonBy20(url : string = "") : Observable<any>
    {
        if(url != "")
            return this.http.get(url)
        else
            return this.http.get(this.baseUrl + '/pokemon')
    }

    getDetailsOnePkn(namePkn : string) : Observable<any>
    {
        return this.http.get(this.baseUrl + '/pokemon/' + namePkn)
    }

}