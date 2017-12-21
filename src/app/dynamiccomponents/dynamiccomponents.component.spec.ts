import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamiccomponentsComponent } from './dynamiccomponents.component';

describe('DynamiccomponentsComponent', () => {
  let component: DynamiccomponentsComponent;
  let fixture: ComponentFixture<DynamiccomponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamiccomponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamiccomponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
