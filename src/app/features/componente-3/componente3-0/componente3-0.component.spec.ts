import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente30Component } from './componente3-0.component';

describe('Componente30Component', () => {
  let component: Componente30Component;
  let fixture: ComponentFixture<Componente30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componente30Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componente30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
