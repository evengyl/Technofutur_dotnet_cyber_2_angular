import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jhmsConverter'
})
export class JhmsConverterPipe implements PipeTransform {

  transform(value: number): string {

    //si j'ai 86405 -> 1 * 86400 + 5 donc si je math floor sir value / 86405, 1.0000....5 donc 1
    //avec l'exemple 99001 - 1*86400 = 12601
    let jours = Math.floor(value / 86400)
    value = value - (jours * 86400)

    //ici j'ai donc 12601 - 3*3600 = 1801
    let heures = Math.floor(value / 3600)
    value = value - (heures * 3600)

    //ici j'ai donc 1801 - 30*60 = 1
    let minutes = Math.floor(value / 60)
    value = value - (minutes * 60)

    // et donc reste 1
    let secondes = value


    let joursSTR = jours.toString() // 1 -> "1"
    let strForJour = "Jour"
    if(jours > 1) strForJour = "Jours"

    let heuresSTR = heures.toString()// 3 -> "3"
    if(heures < 10) heuresSTR = "0" + heuresSTR
    let strForHeure = "Heure"
    if(heures > 1) strForHeure = "Heures"

    let minutesSTR = minutes.toString()// 30 -> "30"
    if(minutes < 10) minutesSTR = "0" + minutesSTR
    let strForMinutes = "Minute"
    if(minutes > 1) strForMinutes = "Minutes"

    let secondesSTR = secondes.toString()// 1 -> "1"
    if(secondes < 10) secondesSTR = "0" + secondesSTR
    let strForSecondes = "Seconde"
    if(secondes > 1) strForSecondes = "Secondes"

    return `${joursSTR} ${strForJour} - ${heuresSTR} ${strForHeure} - 
    ${minutesSTR} ${strForMinutes} et ${secondesSTR} ${strForSecondes}`
  }

}
