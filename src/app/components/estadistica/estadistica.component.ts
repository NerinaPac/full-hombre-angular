import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-estadistica',
  templateUrl: './estadistica.component.html',
  styleUrls: ['./estadistica.component.scss']
})
export class EstadisticaComponent implements OnInit {

  constructor() { }
  @Input() titulo: string | undefined;
  @Input() imagen? = "";
  @Input() subtitulo: string | undefined;

  ngOnInit(): void {
  }

}
