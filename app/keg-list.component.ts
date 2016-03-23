import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model.ts';
import { KegComponent } from './keg.component';

@Component({
  selector: 'keg-list',
  directives: [KegComponent],
  inputs: ['kegList'],
  template: `
    <keg-display
      *ngFor="#singleKeg of kegList"
      [keg]="singleKeg"
      (click)="kegClicked(#singleKeg)"
      >
    </keg-display>
  `
})

export class KegListComponent {
  public kegList: Keg[];
  public onKegSelect: EventEmitter<Keg>;
  public selectedKeg: Keg;

}
