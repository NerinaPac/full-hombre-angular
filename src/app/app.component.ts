// tree shaking
import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AosEx';
  public page: boolean = false




  ngOnInit():void{
    AOS.init();
  }
}
