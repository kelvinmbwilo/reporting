import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {FormCategory, Forms} from '../../store/reducers/forms.reducer';
import * as dataelectors from '../../store/selectors/ui.selectors';
import * as formSelectors from '../../store/selectors/forms.selectors';
import {Store} from '@ngrx/store';
import {ApplicationState} from '../../store/reducers';
import {ResetState} from '../../store/actions/forms.actions';

@Component({
  selector: 'app-basic-reports',
  templateUrl: './basic-reports.component.html',
  styleUrls: ['./basic-reports.component.css']
})
export class BasicReportsComponent implements OnInit, OnDestroy {

  forms$: Observable<Forms[]>;
  loading$: Observable<boolean>;
  loaded$: Observable<boolean>;
  dataElements$: Observable<any>;
  categories$: Observable<FormCategory[]>;
  selectedForm$: Observable<Forms>;
  selectedFormId$: Observable<string>;
  period$: Observable<any>;
  orgunit$: Observable<any>;
  periodType$: Observable<string>;
  form_ready$: Observable<boolean>;
  form_data$: Observable<any>;
  data_loaded$: Observable<boolean>;
  data_loading: Observable<boolean>;
  data_object$: Observable<any>;
  constructor(private store: Store<ApplicationState>) {
    this.forms$ = store.select( formSelectors.getFormsList );
    this.loading$ = store.select( formSelectors.getFormsLoading );
    this.loaded$ = store.select( formSelectors.getFormsLoaded );
    this.dataElements$ = store.select( formSelectors.getDataelements);
    this.categories$ = store.select( formSelectors.getCategoriesList );
    this.selectedForm$ = store.select( formSelectors.getSelectedForm );
    this.selectedFormId$ = store.select( formSelectors.getSelectedFormID );
    this.orgunit$ = store.select( formSelectors.getOrgunit );
    this.period$ = store.select( formSelectors.getPeriod );
    this.periodType$ = store.select( formSelectors.getPeriodType );
    this.form_data$ = store.select( dataelectors.getFormData );
    this.form_ready$ = store.select( formSelectors.getFormReady );
    this.data_loaded$ = store.select( dataelectors.getDataLoaded );
    this.data_loading = store.select( dataelectors.getDataLoading );
    this.data_object$ = store.select( dataelectors.getDataObect );
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.store.dispatch(new ResetState());
  }

}
