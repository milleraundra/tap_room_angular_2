import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component ({
  selector: 'keg-display',
  inputs: ['keg'],
  template: `
    <div>
      <h4 class="kegItem"
      [class.expensive]="keg.price > 4.99">
      {{ keg.name }}</h4>
    </div>
  `

})

export class KegComponent {

}
