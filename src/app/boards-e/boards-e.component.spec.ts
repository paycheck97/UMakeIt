import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardsEComponent } from './boards-e.component';

describe('BoardsEComponent', () => {
  let component: BoardsEComponent;
  let fixture: ComponentFixture<BoardsEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardsEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardsEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
