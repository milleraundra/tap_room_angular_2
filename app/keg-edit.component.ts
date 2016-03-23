import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';
import { KegDetailsComponent } from './keg-details.component';

@Component ({
  selector: 'keg-edit',
  inputs: ['keg'],
  outputs: ['closeEdit'],
  template: `
    <div>
      <h3>Edit Keg Description</h3>
      <input [(ngModel)]="keg.name" />
      <input [(ngModel)]="keg.percentage"/>
      <input [(ngModel)]="keg.pints"/>
    </div>
    <br>
    <button
      (click) = CloseEditField(false)
      class="btn btn-sm btn-default">
    Done Editing</button>
  `
})

export class KegEditComponent {
  public closeEdit: EventEmitter<Boolean>;

  constructor() {
    this.closeEdit = new EventEmitter();
  }
  CloseEditField(closeField: boolean) {
    console.log(closeField);
    this.closeEdit.emit(closeField);
  }



}
