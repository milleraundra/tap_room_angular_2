import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model.ts';
import { KegComponent } from './keg.component';
import { KegDetailsComponent } from './keg-details.component';
import { KegStatusPipe } from './keg-status.pipe';

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  pipes: [KegStatusPipe],
  directives: [KegComponent, KegDetailsComponent],
  template: `
    <h3>Full:</h3>
    <keg-display
      *ngFor="#singleKeg of kegList | status:'full'"
      [class.full]="singleKeg"
      [keg]="singleKeg"
      (click)="kegClicked(singleKeg)"
      >Can I Type Something Here?
    </keg-display>
    <h3>Low:</h3>
    <keg-display
      *ngFor="#singleKeg of kegList | status:'low'"
      [class.low]="singleKeg" 
      [keg]="singleKeg"
      (click)="kegClicked(singleKeg)"
      >
    </keg-display>
    <h3>Restock:</h3>
    <keg-display
      *ngFor="#singleKeg of kegList | status:'restock'"
      [class.empty]="singleKeg"
      [keg]="singleKeg"
      (click)="kegClicked(singleKeg)"
      >
    </keg-display>
    <keg-details
      *ngIf="selectedKeg"
      (closeEditField)="emptySelectedKeg()"
      [keg]="selectedKeg">
    </keg-details>
  `
})

export class KegListComponent {
  public kegList: Keg[];
  public onKegSelect: EventEmitter<Keg>;
  public selectedKeg: Keg;
  constructor() {
    this.onKegSelect = new EventEmitter();
  }

  kegClicked(clickedKeg: Keg): void {
    this.selectedKeg = clickedKeg;
    this.onKegSelect.emit(clickedKeg);
  }
  emptySelectedKeg(): void {
    this.selectedKeg = null;
  }

}
