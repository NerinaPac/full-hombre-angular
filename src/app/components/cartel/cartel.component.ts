import { Component, OnInit, Input } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-cartel',
  templateUrl: './cartel.component.html',
  styleUrls: ['./cartel.component.scss']
})
export class CartelComponent implements OnInit {

  constructor() { }

  @Input() imagen? = "";
  @Input() contenido: string | undefined;
  @Input() alternativo: string | undefined;


  cartelAnima () {
  }

  ngOnInit(): void {
    AOS.init({
    duration: 1500, 
  });
  }

}
