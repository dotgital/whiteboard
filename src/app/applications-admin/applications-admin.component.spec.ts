import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationsAdminComponent } from './applications-admin.component';

describe('ApplicationsAdminComponent', () => {
  let component: ApplicationsAdminComponent;
  let fixture: ComponentFixture<ApplicationsAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationsAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
