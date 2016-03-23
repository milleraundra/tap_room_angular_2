import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';

@Component ({
  selector: 'keg-details',
  inputs: ['keg'],
  template: `
    <h3>Keg Name: {{ keg.name }}</h3>
    <h4>Percentage: {{ keg.percentage }}</h4>
    <h4>Pints Remaining: {{ keg.pints }}</h4>
    <button (click)="kegReduced(keg)">Reduce Keg</button>
  `
})

export class KegDetailsComponent {
  public reducePintCount: EventEmitter<Keg>;
  constructor() {
    this.reducePintCount = new EventEmitter();
  }

  kegReduced(chosenKeg: Keg): void {
    chosenKeg.pints = chosenKeg.pints - 1;
    console.log('trying to reduce keg' + chosenKeg.pints);
  }
}
