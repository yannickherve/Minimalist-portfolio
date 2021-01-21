import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioDetailFyloComponent } from './portfolio-detail-fylo.component';

describe('PortfolioDetailFyloComponent', () => {
  let component: PortfolioDetailFyloComponent;
  let fixture: ComponentFixture<PortfolioDetailFyloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioDetailFyloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioDetailFyloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
