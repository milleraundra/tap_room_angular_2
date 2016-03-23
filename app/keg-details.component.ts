import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';
import { KegEditComponent } from './keg-edit.component';

@Component ({
  selector: 'keg-details',
  inputs: ['keg'],
  directives: [KegEditComponent],
  template: `
    <h3>Keg Name: {{ keg.name }}</h3>
    <h4>Percentage: {{ keg.percentage }}</h4>
    <h4>Pints Remaining: {{ keg.pints }}</h4>
    <button
      (click)="kegReduced(keg)"
      class="btn btn-md btn-danger">
    Reduce Keg</button>
    <button
      *ngIf="!showEdit" (click)="toggleEdit(true)"
      class="btn btn-md btn-warning">
    Edit Description</button>
    <keg-edit
      *ngIf="showEdit"
      [keg]="keg">
    </keg-edit>
  `
})

export class KegDetailsComponent {
  public reducePintCount: EventEmitter<Keg>;
  public showEdit: boolean;
  constructor() {
    this.reducePintCount = new EventEmitter();
    this.showEdit = false;
  }

  kegReduced(chosenKeg: Keg): void {
    chosenKeg.pints = chosenKeg.pints - 1;
    console.log('trying to reduce keg' + chosenKeg.pints);
  }

  toggleEdit(editDisplayStatus: boolean) {
    this.showEdit = editDisplayStatus;
    console.log("here we go!");
    console.log(this.showEdit);
  }
}
