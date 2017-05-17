import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiformComponent } from './apiform.component';

describe('ApiformComponent', () => {
  let component: ApiformComponent;
  let fixture: ComponentFixture<ApiformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
