import { Component } from 'angular2/core';
import { Keg } from './keg.model';
import { KegListComponent } from './keg-list.component';

@Component({
  selector: 'my-app',
  directives: [KegListComponent],
  template: `
    <div class="container">
      <keg-list [kegList]="kegs"></keg-list>
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
    ]
  }
}
