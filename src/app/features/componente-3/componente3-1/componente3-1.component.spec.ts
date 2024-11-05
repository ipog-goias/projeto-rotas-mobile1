import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente31Component } from './componente3-1.component';

describe('Componente31Component', () => {
  let component: Componente31Component;
  let fixture: ComponentFixture<Componente31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componente31Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componente31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
