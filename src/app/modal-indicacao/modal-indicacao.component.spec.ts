import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalIndicacaoComponent } from './modal-indicacao.component';

describe('ModalIndicacaoComponent', () => {
  let component: ModalIndicacaoComponent;
  let fixture: ComponentFixture<ModalIndicacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalIndicacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalIndicacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
