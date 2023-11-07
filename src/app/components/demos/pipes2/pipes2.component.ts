import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes2',
  templateUrl: './pipes2.component.html',
  styleUrls: ['./pipes2.component.css']
})
export class Pipes2Component {

  public allDatasInObject : any = {
    titlePromos : "profitez de -50% sur tous les pignoufs",
    dateDebut : new Date(),
    remiseNet : 1999.99
  }

}
