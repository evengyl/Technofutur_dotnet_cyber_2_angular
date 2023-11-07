import { Component } from '@angular/core';

@Component({
  selector: 'app-exos01',
  templateUrl: './exos01.component.html',
  styleUrls: ['./exos01.component.css']
})
export class Exos01Component {

  public timer1: number = 0
  public chrono1: any = null


  public timer2: number = 0
  public timer2Minutes: number = 0
  public chrono2: any = null


  public timer3Milli: number = 0
  public timer3Secondes: number = 0
  public timer3Minutes: number = 0
  public chrono3: any = null

  startChrono1() {
    if (this.chrono1 == null || this.chrono1 >= 1) {
      clearInterval(this.chrono1)
      this.chrono1 = setInterval(() => {
        this.timer1++
      }, 1000)
    }
  }

  stopChrono(chrono : any) {
    clearInterval(chrono)
  }

  resetChrono1() {
    this.stopChrono(this.chrono1)
    this.timer1 = 0
  }



  startChrono2() {
    if (this.chrono2 == null || this.chrono2 >= 1) 
    {
      clearInterval(this.chrono2)
    
      this.chrono2 = setInterval(() => {
        this.timer2++
        if (this.timer2 == 60) {
          this.timer2Minutes++
          this.timer2 = 0
        }
      }, 100)
    }
  }



  resetChrono2() {
    this.stopChrono(this.chrono2)
    this.timer2 = 0
    this.timer2Minutes = 0
  }


  startChrono3() {
    if (this.chrono3 == null || this.chrono3 >= 1) 
    {
      clearInterval(this.chrono3)
    
      this.chrono3 = setInterval(() => {

        this.timer3Milli += 70

        if(this.timer3Milli >= 1000){
          this.timer3Secondes++
          this.timer3Milli=0
        }

        if(this.timer3Secondes == 60){
          this.timer3Minutes++
          this.timer3Secondes=0
        }

      }, 70)
    }
  }


  resetChrono3() {
    this.stopChrono(this.chrono3)
    this.timer3Milli=0
    this.timer3Secondes=0
    this.timer3Minutes=0
  }
}
