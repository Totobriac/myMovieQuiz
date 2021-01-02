import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-plot-question',
  templateUrl: './plot-question.component.html',
  styleUrls: ['./plot-question.component.css']
})
export class PlotQuestionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() quizedMovie;

  editPlot = "false"

  enableEdition () {
    console.log(this.editPlot)
    this.editPlot = "true"
  }

}
