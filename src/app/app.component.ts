import { Component } from '@angular/core';

declare var $: any; // Declare jQuery

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'portfolio';
  
}

