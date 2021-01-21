import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioDetailManageComponent } from './portfolio-detail-manage.component';

describe('PortfolioDetailManageComponent', () => {
  let component: PortfolioDetailManageComponent;
  let fixture: ComponentFixture<PortfolioDetailManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioDetailManageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioDetailManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
