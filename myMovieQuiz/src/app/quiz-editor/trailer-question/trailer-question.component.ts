import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trailer-question',
  templateUrl: './trailer-question.component.html',
  styleUrls: ['./trailer-question.component.css']
})
export class TrailerQuestionComponent implements OnInit {

  @Input() quizedMovie;

  constructor() { }

  ngOnInit(): void {
    console.log(this.quizedMovie)
  }

}
