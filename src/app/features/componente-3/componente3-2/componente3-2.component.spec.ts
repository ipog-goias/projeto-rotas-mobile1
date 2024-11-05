import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente32Component } from './componente3-2.component';

describe('Componente32Component', () => {
  let component: Componente32Component;
  let fixture: ComponentFixture<Componente32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componente32Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componente32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
