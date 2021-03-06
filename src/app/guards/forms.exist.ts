import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { tap, filter, take, switchMap, catchError } from 'rxjs/operators';

import {ApplicationState} from '../store/reducers';
import {getFormsLoaded} from '../store/selectors/forms.selectors';
import {LoadForms} from '../store/actions/forms.actions';
import * as formSelector from '../store/forms/form.selector';
import {FormActionTypes, GetForms} from '../store/forms/form.actions';

@Injectable()
export class FormsGuard implements CanActivate {
  constructor(private store: Store<ApplicationState>) {}

  canActivate(): Observable<boolean> {
    return this.checkStore().pipe(
      switchMap(() => of(true)),
      catchError(() => of(false))
    );
  }

  checkStore(): Observable<boolean> {
    return this.store.select(formSelector.selectLoaded).pipe(
      tap(loaded => {
        if (!loaded) {
          this.store.dispatch(new GetForms());
        }
      }),
      filter(loaded => loaded),
      take(1)
    );
  }
}
