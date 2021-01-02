import { Component, Input, OnInit } from '@angular/core';
import { SearchActor } from './actor-question.service';

@Component({
  selector: 'app-actor-question',
  templateUrl: './actor-question.component.html',
  styleUrls: ['./actor-question.component.css']
})

export class ActorQuestionComponent implements OnInit {
  @Input() quizedMovie;
  constructor(private searchActor: SearchActor) {}

  castPictures: any = []
  actors: any = []
  actorPics:any = [[],[],[],[]]
  actorName:any = ["","","",""]

  actorPicUrl = ["","","",""]
  actorIndex = [0, 0, 0, 0]
  selectedActor: number

  ngOnInit(){
    this.getPicturesList()
  }  

  getPicturesList () {
    this.actors = this.quizedMovie.cast.slice(0,4)
    console.log(this.actors)
    for (let i = 0; i < this.actors.length; i++) {     
      this.getActor(this.actors[i].actor)
      this.actorName[i] = this.actors[i].actor             
    }    
  }

  private async getActor(actor:string) {
    const response = await this.searchActor.getActorImage(actor).toPromise()
    let actPics = []
    for (var val of response.value) {                                                       
      actPics.push(val.thumbnailUrl)
      console.log(actPics)}                                                      
    this.castPictures.push({ actor: actor, url: actPics})
    this.getActorUrl()                                                                                                    
  }  

  getActorUrl() { for (let i = 0; i < this.actors.length; i++)  {                                 
                  this.actorPics[i] = this.castPictures.find( ({ actor }) => actor === this.actors[i].actor );
                  this.actorPicUrl[i] = this.actorPics[i].url[0]}               
                }

  selectActor(index) {
    this.selectedActor = index
  }
                
  previousPicture(selectedActor) {
    this.actorIndex[selectedActor] --
    this.actorPicUrl[selectedActor] = this.actorPics[selectedActor].url[this.actorIndex[selectedActor]]
  }

  nextPicture(selectedActor) {
    this.actorIndex[selectedActor] ++
    this.actorPicUrl[selectedActor] = this.actorPics[selectedActor].url[this.actorIndex[selectedActor]]
  }
  
}
