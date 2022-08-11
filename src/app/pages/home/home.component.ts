import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  
  

  title = 'Bienvenides a mi proyecto';

  carteleria:any = [
    {
      "imagen":"assets/carteles/empresario.png",
    "contenido": "Sabias que hay muchas noticias, tanto por actos destacados como por hechos tragicos, en donde el hombre es el protagonista, pero los medios de comunicacion no las publican?"
    },
    {
      "imagen":"assets/carteles/hombre-llora.png",
    "contenido": "Sabias que existe una enorme brecha de genero en cuanto a mortalidad y esperanza de vida, siendo los hombres los principales damnificados de esto, siendo complices la sociedad y los paises en general, ya que dichas cifras se encuentran oficialmente documentadas?"
    }
    
  ]

  ngOnInit(): void {
  }

}
