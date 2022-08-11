import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estadisticas-wrapper',
  templateUrl: './estadisticas-wrapper.component.html',
  styleUrls: ['./estadisticas-wrapper.component.scss']
})
export class EstadisticasWrapperComponent implements OnInit {

  constructor() { }

  estadisticas:any = [
    {
      "titulo":"Estadisticas de motartalidad por Cancer",
      "imagen":"assets/estadisticas/mortalidad_tabla.png",
      "subtitulo": "Segun el Gobierno de la Nacion Argintina, esta es la distribución de las muertes por cáncer por sitio topográfico según sexo de Argentina, año 2019. El mayor porcentaje de muertes por cancer, es en HOMBRES. Pero hasta el dia de hoy, no se ha visto campañas de conscientizacion para ellos.",
      "fuente": "Informacion extraida de www.argentina.gob.ar"
    },
    {
      "titulo":"Estadisticas por Suicidio",
      "imagen":"assets/estadisticas/tabla-suicidio.png",
      "subtitulo": "Segun un informe realizado por la Secretaria de Seguridad y Politica Criminal del Miniesterio de Seguridad Argentina, se determino que en un periodo de cuatro años el 79,6% de los suicidas fueron varones. Aun existiendo las estadisticas, no hay contencion para los hombres.",
      "fuente": "Informacion extraida de https://estadisticascriminales.minseg.gob.ar/"
    }
    
  ]

  ngOnInit(): void {
  }

}
