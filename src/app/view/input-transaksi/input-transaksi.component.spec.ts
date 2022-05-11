import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTransaksiComponent } from './input-transaksi.component';

describe('InputTransaksiComponent', () => {
  let component: InputTransaksiComponent;
  let fixture: ComponentFixture<InputTransaksiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputTransaksiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputTransaksiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
