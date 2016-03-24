import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model.ts';
import { KegComponent } from './keg.component';
import { KegDetailsComponent } from './keg-details.component';

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  directives: [KegComponent, KegDetailsComponent],
  template: `
    <keg-display
      *ngFor="#singleKeg of kegList"
      [keg]="singleKeg"
      (click)="kegClicked(singleKeg)"
      >
    </keg-display>
    <keg-details *ngIf="selectedKeg" [keg]="selectedKeg"></keg-details>
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

}
