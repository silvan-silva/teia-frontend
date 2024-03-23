import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgrupamentoComponentComponent } from './agrupamento-componente.component';

describe('AgrupamentoComponentComponent', () => {
  let component: AgrupamentoComponentComponent;
  let fixture: ComponentFixture<AgrupamentoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgrupamentoComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgrupamentoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
