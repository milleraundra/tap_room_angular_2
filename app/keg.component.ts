import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component ({
  selector: 'keg-display',
  inputs: ['keg'],
  template: `
    <div>
      <h4>{{ keg.name }}</h4>
    </div>
  `

})

export class KegComponent {

}
