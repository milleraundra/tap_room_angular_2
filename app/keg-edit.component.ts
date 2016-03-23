import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';
import { KegDetailsComponent } from './keg-details.component';

@Component ({
  selector: 'keg-edit',
  inputs: ['keg'],
  template: `
    <div>
      <h3>Edit Keg Description</h3>
      <input [(ngModel)]="keg.name" />
      <input [(ngModel)]="keg.percentage"/>
      <input [(ngModel)]="keg.pints"/>
    </div>
  `
})

export class KegEditComponent {

}
