import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionPlaceComponent } from './question-place.component';

describe('QuestionPlaceComponent', () => {
  let component: QuestionPlaceComponent;
  let fixture: ComponentFixture<QuestionPlaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionPlaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
