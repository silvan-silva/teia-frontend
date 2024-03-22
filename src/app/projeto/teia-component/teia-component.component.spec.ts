import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeiaComponentComponent } from './teia-component.component';

describe('TeiaComponentComponent', () => {
  let component: TeiaComponentComponent;
  let fixture: ComponentFixture<TeiaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeiaComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeiaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
