import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPerusahaanComponent } from './input-perusahaan.component';

describe('InputPerusahaanComponent', () => {
  let component: InputPerusahaanComponent;
  let fixture: ComponentFixture<InputPerusahaanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputPerusahaanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputPerusahaanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
