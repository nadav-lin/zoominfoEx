import { Component, OnInit } from '@angular/core';
import {QuestionsService} from '../questions.service';
import {Question} from '../entities/question';
import {of} from 'rxjs';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  // question = {"category":"Entertainment: Music","type":"multiple","difficulty":"medium","question":"Which popular rock band has a one-armed drummer?","correct_answer":"Def Leppard","incorrect_answers":["The Beatles","Lynyrd Skynyrd","Foreigner"]};
  question: Question[] =[{"category":"Entertainment: Music","type":"multiple","difficulty":"medium","question":"Which popular rock band has a one-armed drummer?","correct_answer":"Def Leppard","incorrect_answers":["The Beatles","Lynyrd Skynyrd","Foreigner"]},{"category":"Entertainment: Video Games","type":"multiple","difficulty":"hard","question":"When was the first &quot;Half-Life&quot; released?","correct_answer":"1998","incorrect_answers":["2004","1999","1997"]},{"category":"Entertainment: Video Games","type":"multiple","difficulty":"medium","question":"What type of genre is the controversial 2015 game &quot;Hatred&quot;?","correct_answer":"Shoot &#039;Em Up","incorrect_answers":["Point &amp; Click","MMORPG","Simulation"]},{"category":"Entertainment: Music","type":"multiple","difficulty":"medium","question":"The song &quot;Feel Good Inc.&quot; by British band Gorillaz features which hip hop group?","correct_answer":"De La Soul","incorrect_answers":["Public Enemy","OutKast","Cypress Hill"]},{"category":"Science & Nature","type":"multiple","difficulty":"easy","question":"The biggest distinction between a eukaryotic cell and a prokaryotic cell is:","correct_answer":"The presence or absence of a nucleus","incorrect_answers":["The overall size","The presence or absence of certain organelles","The mode of reproduction"]},{"category":"Science: Computers","type":"multiple","difficulty":"easy","question":"What does LTS stand for in the software market?","correct_answer":"Long Term Support","incorrect_answers":["Long Taco Service","Ludicrous Transfer Speed","Ludicrous Turbo Speed"]},{"category":"History","type":"multiple","difficulty":"medium","question":"Who is attributed credit for recording the epic poem The Odyssey?","correct_answer":"Homer","incorrect_answers":["Aristotle","Odysseus","Socrates"]},{"category":"Entertainment: Film","type":"multiple","difficulty":"medium","question":"Which famous singer was portrayed by actor Kevin Spacey in the 2004 biographical film &quot;Beyond the Sea&quot;?","correct_answer":"Bobby Darin","incorrect_answers":["Louis Armstrong","Frank Sinatra","Dean Martin"]},{"category":"Science: Computers","type":"multiple","difficulty":"hard","question":"Released in 2001, the first edition of Apple&#039;s Mac OS X operating system (version 10.0) was given what animal code name?","correct_answer":"Cheetah","incorrect_answers":["Puma","Tiger","Leopard"]},{"category":"Entertainment: Video Games","type":"multiple","difficulty":"hard","question":"What is the name of the main island in PLAYERUNKNOWN&#039;S BATTLEGROUNDS?","correct_answer":"Erangel","incorrect_answers":["Marmara","Severny","Lastovo"]}];
  currentQuestionIndex: number = 0;

  constructor(private questionsService: QuestionsService) { }

  ngOnInit() {
    // this.questionsService.getQuestions().subscribe(question => this.question = question.results);
  }

  incrementIndex(): void {
    this.currentQuestionIndex++;
  }

  getCurrentQuestion(): Question {
    return this.question[this.currentQuestionIndex];
  }

  getQuestions() {
    return this.question;
  }

}
