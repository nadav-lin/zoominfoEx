import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Question} from '../entities/question';

@Component({
  selector: 'app-questions-buttons',
  templateUrl: './questions-buttons.component.html',
  styleUrls: ['./questions-buttons.component.css']
})
export class QuestionsButtonsComponent implements OnInit {

  @Input() question: Question;
  @Input() questionNumber: number;
  @Output() nextQuestion = new EventEmitter<boolean>();

  answers: string [];
  isAnswered: boolean = false;
  private userAnswer: string;

  constructor() {
  }

  ngOnInit() {
    this.initAnswers();
  }

  private initAnswers() {
    this.answers = this.question.incorrect_answers.concat(this.question.correct_answer);
    this.shuffleArray(this.answers);
  }

  shuffleArray(array): void {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  checkAnswer(): void {
    this.toggleHidden();
  }

  emitNextQuestion() {
    this.nextQuestion.emit();
  }

  selectedAnswer(answer: string): void {
    this.userAnswer = answer;
  }

  toggleHidden(): void {
    this.isAnswered = !this.isAnswered;
  }

  getColor(answer: string): string {
    if (this.isAnswered && this.userAnswer === answer) {
      return this.isCorrectAnswer() ? 'green' : 'red';
    }
    return 'lightgrey';
  }

  isCorrectAnswer(): boolean {
    return this.userAnswer === this.question.correct_answer;
  }
}
