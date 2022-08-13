import { Component, OnInit } from '@angular/core';
import { ICarrucelItem } from 'src/app/components/carrucel/Icarrucel-item.metadata';
import { CARRUCEL_DATA_ITEMS } from 'src/assets/info/carousel.const';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public carrucelData: ICarrucelItem[] = CARRUCEL_DATA_ITEMS;

  constructor() { }
  
  

  title = 'Bienvenides a mi proyecto';

  carteleria:any = [
    {
      "imagen":"assets/carteles/empresario.png",
    "contenido": "Sabias que hay muchas noticias, tanto por actos destacados como por hechos tragicos, en donde el hombre es el protagonista, pero los medios de comunicacion no las publican?",
    "alternativo":"hombre animado levantando el dedo indice haciendo enfasis en lo que dice"
    },
    {
      "imagen":"assets/carteles/hombre-llora.png",
    "contenido": "Sabias que existe una enorme brecha de genero en cuanto a mortalidad y esperanza de vida, siendo los hombres los principales damnificados de esto, siendo complices la sociedad y los paises en general, ya que dichas cifras se encuentran oficialmente documentadas?",
    "alternativo":"hombre animado llorando"
    }
    
  ]

  ngOnInit(): void {
  }

}
