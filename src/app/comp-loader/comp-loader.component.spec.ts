import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompLoaderComponent } from './comp-loader.component';

describe('CompLoaderComponent', () => {
  let component: CompLoaderComponent;
  let fixture: ComponentFixture<CompLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
