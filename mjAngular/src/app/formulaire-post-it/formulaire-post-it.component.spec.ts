import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulairePostItComponent } from './formulaire-post-it.component';

describe('FormulairePostItComponent', () => {
  let component: FormulairePostItComponent;
  let fixture: ComponentFixture<FormulairePostItComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulairePostItComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulairePostItComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
