import { Injectable } from '@angular/core';
import {Question} from './entities/question';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ServerResponse} from './entities/serverResponse';


@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  questions: Question[];
  serverResponse: Observable<ServerResponse[]>;
  private dataUrl = 'https://opentdb.com/api.php?amount=10&type=multiple';

  constructor(private http: HttpClient) {
    this.initQuestions();
  }

  initQuestions(): void {
    this.fetchQuestionsFromServer();
    // this.fetchCoursesFromServer().subscribe(questions => {this.questions = questions; console.log(questions)});
  }

  fetchQuestionsFromServer(): void {
    // this.serverResponse = this.http.get<Question[]>(this.dataUrl);
  }

  getQuestions(): Observable<ServerResponse> {
       return null;
  }

  getNextQuestion(): Question {
    return this.questions.pop();
  }
}
