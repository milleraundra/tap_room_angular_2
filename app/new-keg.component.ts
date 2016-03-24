import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model.ts';
import { KegListComponent } from './keg-list.component.ts';

@Component ({
  selector: 'new-keg',
  outputs: ['onClickNewKeg'],
  template: `
    <h3>Add a New Keg:</h3>
    <div class="form-group">
      <label>Name:</label>
      <input type="text" #newName>
    </div>
    <div class="form-group">
      <label>Percentage:</label>
      <input type="number" #newPercentage>
    </div>
    <button class="btn btn-primary"(click)="addKeg(newName, newPercentage)">Add Keg</button>
  `
})

export class NewKegComponent {
  public onClickNewKeg: EventEmitter<any[]>;
  constructor() {
    this.onClickNewKeg = new EventEmitter();
  }

  addKeg(kegName: HTMLInputElement, kegPercentage: HTMLInputElement) {
    this.onClickNewKeg.emit([kegName.value, kegPercentage.value]);
    kegName.value = "";
    kegPercentage.value = "";
  }
}
