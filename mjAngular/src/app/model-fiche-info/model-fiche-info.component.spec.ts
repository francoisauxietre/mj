import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelFicheInfoComponent } from './model-fiche-info.component';

describe('ModelFicheInfoComponent', () => {
  let component: ModelFicheInfoComponent;
  let fixture: ComponentFixture<ModelFicheInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelFicheInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelFicheInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
