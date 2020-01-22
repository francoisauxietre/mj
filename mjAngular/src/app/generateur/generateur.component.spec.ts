import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateurComponent } from './generateur.component';

describe('GenerateurComponent', () => {
  let component: GenerateurComponent;
  let fixture: ComponentFixture<GenerateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
