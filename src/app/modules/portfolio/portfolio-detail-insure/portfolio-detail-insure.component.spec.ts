import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioDetailInsureComponent } from './portfolio-detail-insure.component';

describe('PortfolioDetailInsureComponent', () => {
  let component: PortfolioDetailInsureComponent;
  let fixture: ComponentFixture<PortfolioDetailInsureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioDetailInsureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioDetailInsureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
