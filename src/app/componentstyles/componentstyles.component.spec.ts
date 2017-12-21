import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentstylesComponent } from './componentstyles.component';

describe('ComponentstylesComponent', () => {
  let component: ComponentstylesComponent;
  let fixture: ComponentFixture<ComponentstylesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentstylesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentstylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
