import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router, RouterStateSnapshot } from '@angular/router';
import { PokeApiService } from '../pokeapi.service';

@Component({
  selector: 'app-view-pkn-details',
  templateUrl: './view-pkn-details.component.html',
  styleUrls: ['./view-pkn-details.component.css']
})
export class ViewPknDetailsComponent  {

  detailsOne! : any

  constructor(private readonly route : ActivatedRoute, 
    private readonly pknServe : PokeApiService)
  {
    route.params.subscribe((params : any) => {
      this.pknServe.getDetailsOnePkn(params.namePkn).subscribe((details :any) => {
        console.log(details)
        this.detailsOne = details
      })
    })
  }

}
