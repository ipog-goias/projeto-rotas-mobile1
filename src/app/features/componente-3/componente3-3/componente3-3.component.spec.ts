import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente33Component } from './componente3-3.component';

describe('Componente33Component', () => {
  let component: Componente33Component;
  let fixture: ComponentFixture<Componente33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componente33Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componente33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
