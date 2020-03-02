import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationsStatsComponent } from './applications-stats.component';

describe('ApplicationsStatsComponent', () => {
  let component: ApplicationsStatsComponent;
  let fixture: ComponentFixture<ApplicationsStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationsStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationsStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
