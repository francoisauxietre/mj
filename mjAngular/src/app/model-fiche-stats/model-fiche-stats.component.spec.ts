import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelFicheStatsComponent } from './model-fiche-stats.component';

describe('ModelFicheStatsComponent', () => {
  let component: ModelFicheStatsComponent;
  let fixture: ComponentFixture<ModelFicheStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelFicheStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelFicheStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
