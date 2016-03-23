import { Component } from 'angular2/core';
import { Keg } from './keg.model';
import { KegDetailsComponent } from './keg-details.component';

@Component ({
  selector: 'keg-edit',
  inputs: ['keg'],
  template: `
    <h3>Hello! I am functional!</h3>
  `
})

export class KegEditComponent {
  

}
