import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialBodyComponent } from './initial-body.component';

describe('InitialBodyComponent', () => {
  let component: InitialBodyComponent;
  let fixture: ComponentFixture<InitialBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitialBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitialBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
