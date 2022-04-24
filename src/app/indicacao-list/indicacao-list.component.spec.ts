import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicacaoListComponent } from './indicacao-list.component';

describe('IndicacaoListComponent', () => {
  let component: IndicacaoListComponent;
  let fixture: ComponentFixture<IndicacaoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndicacaoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicacaoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
