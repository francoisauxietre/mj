import { Injectable, NgZone } from '@angular/core';


import 'rxjs/add/operator/map';
import {BehaviorSubject, Observable} from 'rxjs';
function _window(): any {
  // return the global native browser window object
  return window;
}
@Injectable()
export class CordovaService {

  private resume: BehaviorSubject<boolean>;
  constructor(private zone: NgZone) {
    this.resume = new BehaviorSubject<boolean>(null);
    // avant on avait .formEvent de la librairie reactivex mais non installable
    Observable.arguments(document, 'resume').subscribe(event => {
      this.zone.run(() => {
        this.onResume();
      });
    });
  }

  get cordova(): any {
    return _window().cordova;
  }
  get onCordova(): boolean {
    return !!_window().cordova;
  }
  public onResume(): void {
    this.resume.next(true);
  }
}
