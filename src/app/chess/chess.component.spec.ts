import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChessComponent } from './chess.component';

describe('ChessComponent', () => {
  let component: ChessComponent;
  let fixture: ComponentFixture<ChessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChessComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
