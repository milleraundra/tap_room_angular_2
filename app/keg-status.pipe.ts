import { Pipe, PipeTransform } from 'angular2/core';
import { Keg } from './keg.model';

@Pipe ({
  name: "status",
  pure: false
})

export class KegStatusPipe implements PipeTransform {
  transform(input: Keg[], args) {
    var kegStatus = args[0];
    if (kegStatus === "full") {
      return input.filter(function(keg) {
        return (keg.pints >= 62);
      })
    } else if (kegStatus === "low") {
      return input.filter(function(keg) {
        return (keg.pints <= 61 && keg.pints >= 11);
      })
    } else if (kegStatus === "restock") {
      return input.filter(function(keg) {
        return (keg.pints <= 10);
      })
    }
  }
}
