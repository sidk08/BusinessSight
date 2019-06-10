import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthSectionComponent } from './health-section.component';

describe('HealthSectionComponent', () => {
  let component: HealthSectionComponent;
  let fixture: ComponentFixture<HealthSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
