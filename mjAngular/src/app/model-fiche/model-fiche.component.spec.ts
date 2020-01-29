import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelFicheComponent } from './model-fiche.component';

describe('ModelFicheComponent', () => {
  let component: ModelFicheComponent;
  let fixture: ComponentFixture<ModelFicheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelFicheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelFicheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
