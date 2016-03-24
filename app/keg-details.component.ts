import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';
import { KegEditComponent } from './keg-edit.component';

@Component ({
  selector: 'keg-details',
  inputs: ['keg'],
  outputs: ['closeEditField'],
  directives: [KegEditComponent],
  template: `
    <div class="panel panel-primary">
      <div class="panel-heading">
        <button class="btn btn-small btn-default close"
        (click)="closeField()"
        >X</button>
        <h3>Keg: {{ keg.name }}</h3>
      </div>
      <div class="panel-body">
        <h4>Percentage: {{ keg.percentage }}%</h4>
        <h4>Pints Remaining: {{ keg.pints }}</h4>
        <button
          (click)="kegReduced(keg)"
          class="btn btn-md btn-danger">
        Reduce Keg</button>
        <button
          *ngIf="!showEdit"
          (click)="toggleEdit()"
          class="btn btn-md btn-warning">
        Edit Description</button>
        <button
          *ngIf="showEdit"
          (click)="toggleEdit()"
          class="btn btn-md btn-info">
        Done Editing</button>
        <keg-edit
          *ngIf="showEdit"
          [keg]="keg">
        </keg-edit>
      </div>
    </div>
  `
})

export class KegDetailsComponent {
  public closeEditField: EventEmitter<number>;
  public showEdit: boolean;
  constructor() {
    this.closeEditField = new EventEmitter();
    this.showEdit = false;
  }

  kegReduced(chosenKeg: Keg): void {
    chosenKeg.pints = chosenKeg.pints - 1;
  }

  toggleEdit() {
    this.showEdit = !this.showEdit;
  }

  closeField() {
    this.closeEditField.emit(1);
  }

}
