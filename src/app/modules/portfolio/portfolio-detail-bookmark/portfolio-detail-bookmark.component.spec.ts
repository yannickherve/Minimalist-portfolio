import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioDetailBookmarkComponent } from './portfolio-detail-bookmark.component';

describe('PortfolioDetailBookmarkComponent', () => {
  let component: PortfolioDetailBookmarkComponent;
  let fixture: ComponentFixture<PortfolioDetailBookmarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioDetailBookmarkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioDetailBookmarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
