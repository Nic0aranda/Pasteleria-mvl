import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ValidacionCompraPage } from './validacion-compra.page';

describe('ValidacionCompraPage', () => {
  let component: ValidacionCompraPage;
  let fixture: ComponentFixture<ValidacionCompraPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidacionCompraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
