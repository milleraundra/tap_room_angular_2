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
      <h3>Keg List:</h3>
        <!-- <div class="row"> -->
          <!-- <div class="col-sm-6"> -->
            <keg-list
              [kegList]="kegs"
              (onKegSelect)="kegWasSelected($event)">
            </keg-list>
          <!-- </div> -->
        <!-- </div> -->

        <new-keg (onClickNewKeg)=createNewKeg($event)></new-keg>
    </div>
  `
})

//make Keg class
export class AppComponent {
  public kegs: Keg[];
  constructor() {
    this.kegs = [
      new Keg("Guinness", 4.3, 0),
      new Keg("Amstel Light", 3.5, 1),
      new Keg("Coors", 5.0, 2)
    ];
  }
  kegWasSelected(clickedKeg: Keg): void {
    console.log("Parent" + clickedKeg.name);
  }
  createNewKeg(newKeg: String[]): void {
    console.log("Hi!");
    console.log(newKeg);
  }
}
