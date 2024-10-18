import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InicioVPage } from './inicio-v.page';

describe('InicioVPage', () => {
  let component: InicioVPage;
  let fixture: ComponentFixture<InicioVPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioVPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
