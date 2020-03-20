import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetPersonComponent } from './set-person.component';

describe('SetPersonComponent', () => {
  let component: SetPersonComponent;
  let fixture: ComponentFixture<SetPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetPersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
