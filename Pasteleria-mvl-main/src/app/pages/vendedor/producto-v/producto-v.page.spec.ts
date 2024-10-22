import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductoVPage } from './producto-v.page';

describe('ProductoVPage', () => {
  let component: ProductoVPage;
  let fixture: ComponentFixture<ProductoVPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoVPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
