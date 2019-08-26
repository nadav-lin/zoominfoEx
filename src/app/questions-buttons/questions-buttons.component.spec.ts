import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsButtonsComponent } from './questions-buttons.component';

describe('QuestionsButtonsComponent', () => {
  let component: QuestionsButtonsComponent;
  let fixture: ComponentFixture<QuestionsButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionsButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
