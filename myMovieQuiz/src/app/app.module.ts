import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { QuizEditorComponent } from './quiz-editor/quiz-editor.component';
import { PlotQuestionComponent } from './quiz-editor/plot-question/plot-question.component';
import { ActorQuestionComponent } from './quiz-editor/actor-question/actor-question.component';
import { PosterQuestionComponent } from './quiz-editor/poster-question/poster-question.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { QASwitchComponent } from './qaswitch/qaswitch.component';
import { TrailerQuestionComponent } from './quiz-editor/trailer-question/trailer-question.component';
 
 

 

@NgModule({
  declarations: [
    AppComponent,
    MovieSearchComponent,
    QuizEditorComponent,
    PlotQuestionComponent,
    ActorQuestionComponent,
    PosterQuestionComponent,
    QASwitchComponent,
    TrailerQuestionComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatRadioModule,    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
