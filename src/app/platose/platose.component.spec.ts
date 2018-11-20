import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatoseComponent } from './platose.component';

describe('PlatoseComponent', () => {
  let component: PlatoseComponent;
  let fixture: ComponentFixture<PlatoseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatoseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
