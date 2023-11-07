import { Component } from '@angular/core';

@Component({
  selector: 'app-bindings1',
  templateUrl: './bindings1.component.html',
  styleUrls: ['./bindings1.component.css']
})
export class Bindings1Component {

  //binding one way
  public str : string = "Bonjour"
  public numb : number = 42
  public bool : boolean = false
  public dateDJ : Date = new Date

  //two way binding
  public str2! : string
  public date2! : Date
  public color! : string


  //event binding 
  public counter : number = 0
  public chrono : number = 0
  public inter : any = null

  addToCount()
  {
    this.counter++
  }

  remToCount()
  {
    this.counter--
  }

  startChrono()
  {
    if(this.inter == null || this.inter >= 1)
    {
      clearInterval(this.inter)
      this.inter = setInterval(() => {
        this.chrono++
      },1000)
    }
  }

  stopChrono()
  {
    clearInterval(this.inter)
  }

  resetChrono()
  {
    this.chrono = 0
  }

}
