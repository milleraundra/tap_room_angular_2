import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';
import { KegDetailsComponent } from './keg-details.component';

@Component ({
  selector: 'keg-edit',
  inputs: ['keg'],
  template: `
    <div>
      <h3>Edit Keg Description</h3>
      <div>
      <label>Name:</label>
      <input [(ngModel)]="keg.name" />
      </div>

      <div>
      <label>Alcohol:</label>
      <input [(ngModel)]="keg.percentage"/>
      </div>

      <div>
      <label>Price:</label>
      <input [(ngModel)]="keg.price"/>
      </div>

      <div>
      <label>Pints:</label>
      <input [(ngModel)]="keg.pints"/>
      </div>
    </div>
  `
})

export class KegEditComponent {

}
