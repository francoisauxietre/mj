import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelFicheInventaireComponent } from './model-fiche-inventaire.component';

describe('ModelFicheInventaireComponent', () => {
  let component: ModelFicheInventaireComponent;
  let fixture: ComponentFixture<ModelFicheInventaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelFicheInventaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelFicheInventaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
