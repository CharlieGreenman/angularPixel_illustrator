import { Component, OnInit } from '@angular/core';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';

import { Subject } from 'rxjs/Subject';
import { Store } from '@ngrx/store';

import { gridSettings } from '../../actions/grid-settings';

@Component({
  selector: 'app-choose-size',
  templateUrl: './choose-size.component.html',
  styleUrls: ['./choose-size.component.scss']
})
export class ChooseSizeComponent {
  gridSettings;
  changeGridSettings$ = new Subject();

  constructor(store: Store<any>) {
    this.gridSettings = store.select('gridSettings');

    Observable.merge(
      this.changeGridSettings$.map((value: any) => (
        new gridSettings({
          columnCount: value.columnCount,
          rowCount: value.rowCount,
          pixelSize: value.pixelSize
        })
      ))
    )
    .subscribe((action)=>{
      store.dispatch(action)
    })
  }

}
