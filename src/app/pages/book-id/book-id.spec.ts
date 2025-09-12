import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookId } from './book-id';

describe('BookId', () => {
  let component: BookId;
  let fixture: ComponentFixture<BookId>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookId]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookId);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
