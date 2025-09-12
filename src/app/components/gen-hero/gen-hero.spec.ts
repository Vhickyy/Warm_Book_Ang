import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenHero } from './gen-hero';

describe('GenHero', () => {
  let component: GenHero;
  let fixture: ComponentFixture<GenHero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenHero]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenHero);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
