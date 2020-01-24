import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementTimeLineComponent } from './element-time-line.component';

describe('ElementTimeLineComponent', () => {
  let component: ElementTimeLineComponent;
  let fixture: ComponentFixture<ElementTimeLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementTimeLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementTimeLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
