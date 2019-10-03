import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicioSemPontuacaoComponent } from './exercicio-sem-pontuacao.component';

describe('ExercicioSemPontuacaoComponent', () => {
  let component: ExercicioSemPontuacaoComponent;
  let fixture: ComponentFixture<ExercicioSemPontuacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExercicioSemPontuacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercicioSemPontuacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
