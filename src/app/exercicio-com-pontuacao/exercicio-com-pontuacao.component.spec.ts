import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicioComPontuacaoComponent } from './exercicio-com-pontuacao.component';

describe('ExercicioComPontuacaoComponent', () => {
  let component: ExercicioComPontuacaoComponent;
  let fixture: ComponentFixture<ExercicioComPontuacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExercicioComPontuacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercicioComPontuacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
