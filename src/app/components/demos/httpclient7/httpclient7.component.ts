import { Component } from '@angular/core';
import { PokeApiService } from './pokeapi.service';

@Component({
  selector: 'app-httpclient7',
  templateUrl: './httpclient7.component.html',
  styleUrls: ['./httpclient7.component.css']
})
export class Httpclient7Component {

  listPkn! : any
  counterTotal! : number
  linkPrevious! : string
  linkNext! : string

  constructor(private readonly pokeServe : PokeApiService) {

    this.changeList()
  }


  changeList(options : string = "")
  {
    
    let linkToUse = ""
    if(options == "") linkToUse = ""
    if(options == "prev") linkToUse = this.linkPrevious
    if(options == "next") linkToUse = this.linkNext

    this.pokeServe.getPokemonBy20(linkToUse).subscribe((allDatas : any) => {
      this.counterTotal = allDatas.count
      this.listPkn = allDatas.results
      this.linkPrevious = allDatas.previous
      this.linkNext = allDatas.next
    })
  }

}
