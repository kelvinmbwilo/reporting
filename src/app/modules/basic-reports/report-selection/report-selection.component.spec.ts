import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportSelectionComponent } from './report-selection.component';

describe('ReportSelectionComponent', () => {
  let component: ReportSelectionComponent;
  let fixture: ComponentFixture<ReportSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
