import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakeAuthService {


  
  listTopPlayers : any[] = [
    { id: 1, name : "Pierre Cailloux", ranked : 1, win : 15669, loose : 145, avatar : "toto.jpg", money : 1200 },
    { id: 2, name : "Paul Pogba", ranked : 2, win : 15650, loose : 245, avatar : "toto.jpg", money : 10 },
    { id: 3, name : "Liridon le maçon", ranked : 3, win : 15640, loose : 4, avatar : "toto.jpg", money : 110 },
    { id: 4, name : "Dylan le mexicanos", ranked : 4, win : 15620, loose : 1256, avatar : "toto.jpg", money : 120 },
    { id: 5, name : "Jonathan qui attend", ranked : 5, win : 15610, loose : 3, avatar : "toto.jpg", money : 1420 },
    { id: 6, name : "JC Midle class", ranked : 6, win : 15610, loose : 3, avatar : "toto.jpg", money : 1420 },
    { id: 7, name : "Marvin vide ses morvinne", ranked : 7, win : 15610, loose : 3, avatar : "toto.jpg", money : 1420 },
    { id: 8, name : "Cyril Lignac", ranked : 8, win : 15610, loose : 3, avatar : "toto.jpg", money : 1420 },
    { id: 9, name : "Brandon & Kvein", ranked : 9, win : 15610, loose : 3, avatar : "toto.jpg", money : 1420 },
  ]


  public isConnect : boolean = false

  constructor() {

    let tmpListTopPlayers = localStorage.getItem("listTopPlayers")
    if(tmpListTopPlayers){
      this.listTopPlayers = JSON.parse(tmpListTopPlayers)
    }


    let tmpConnectState = localStorage.getItem('isConnect')
    if(tmpConnectState)
      this.isConnect = Boolean(tmpConnectState)

  }

  
  login(){
    this.isConnect = true
    localStorage.setItem('isConnect', JSON.stringify(this.isConnect))

    localStorage.setItem("listTopPlayers", JSON.stringify(this.listTopPlayers))
  }

  logout(){
    localStorage.removeItem('isConnect')
    return this.isConnect = false
  }
}
