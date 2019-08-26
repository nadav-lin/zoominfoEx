import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionsComponent } from './questions/questions.component';
import { QuestionsButtonsComponent } from './questions-buttons/questions-buttons.component';
import { QuestionPlaceComponent } from './question-place/question-place.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    QuestionsButtonsComponent,
    QuestionPlaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
