import { Component } from 'angular2/core';
import { Keg } from './keg.model';
import { KegListComponent } from './keg-list.component';
import { NewKegComponent } from './new-keg.component';

@Component({
  selector: 'my-app',
  directives: [KegListComponent, NewKegComponent],
  template: `
    <div class="container">
      <h1 class="page-header">Your Bar Name</h1>
      <div class="row">
        <div class="col-sm-6">
          <h2>All Kegs:</h2>
          <keg-list
            [kegList]="kegs"
            (onKegSelect)="kegWasSelected($event)">
          </keg-list>
        </div>

        <div class="col-sm-6">
          <new-keg (onClickNewKeg)=createNewKeg($event)></new-keg>
        </div>
      </div>
    </div>
  `
})

//make Keg class
export class AppComponent {
  public kegs: Keg[];
  constructor() {
    this.kegs = [
      new Keg("Guinness", 4.3, 5.00, 0),
      new Keg("Amstel Light", 3.5, 4.18, 1),
      new Keg("Coors", 5.0, 3.59, 2)
    ];
  }
  kegWasSelected(clickedKeg: Keg): void {}
  createNewKeg(newKeg: any[]): void {
    this.kegs.push(new Keg(newKeg[0], newKeg[1], newKeg[2], this.kegs.length));
  }
}
