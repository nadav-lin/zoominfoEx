import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-question-place',
  templateUrl: './question-place.component.html',
  styleUrls: ['./question-place.component.css']
})
export class QuestionPlaceComponent implements OnInit {

  @Input() numberOfQuestions: number;
  @Input() currentQuestionIndex: number;

  numbers: number[];

  constructor() {
  }

  ngOnInit() {
    this.numbers = Array(this.numberOfQuestions).fill(0).map((x, i) => i);

    console.log(this.numberOfQuestions, this.currentQuestionIndex);
  }

  isCurrentQuestion(index: number): boolean {
    return index === this.currentQuestionIndex;
  }
}
