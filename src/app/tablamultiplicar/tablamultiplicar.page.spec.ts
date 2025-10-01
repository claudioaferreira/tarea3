import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TablamultiplicarPage } from './tablamultiplicar.page';

describe('TablamultiplicarPage', () => {
  let component: TablamultiplicarPage;
  let fixture: ComponentFixture<TablamultiplicarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TablamultiplicarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
