import { Component, Input, OnInit } from '@angular/core';
import { SearchActor } from './actor-question.service';
import { PixelActor } from './actor-pixel.service'


@Component({
  selector: 'app-actor-question',
  templateUrl: './actor-question.component.html',
  styleUrls: ['./actor-question.component.css']
})

export class ActorQuestionComponent implements OnInit {
  @Input() quizedMovie;
  constructor(private searchActor: SearchActor,
              private pixelActor: PixelActor) {}

  castPictures: any = []
  actors: any = []
  actorPics:any = [[],[],[],[]]
  actorName:any = ["","","",""]
  imgClass = [false, false, false, false]

  actorPicUrl = ["","","",""]
  actorIndex = [0, 0, 0, 0]
  selectedActor: number
  showQuestion = true
  response: any[]
  pixHeight: any
  pixWidth: any

  displays = [{value:"Name", checked: true},
              {value: "Character", checked: false},
              {value: "None", checked: false}];
  nameDisplay: ""  

  ngOnInit(){
    this.getPicturesList()    
  }

  getPicturesList () {
    this.actors = this.quizedMovie.cast.slice(0,4)
    for (let i = 0; i < this.actors.length; i++) {     
      this.getActor(this.actors[i].actor)
      this.actorName[i] = this.actors[i].actor             
    }        
  }

  private async getActor(actor:string) {
    const response= await this.searchActor.getActorImage(actor).toPromise()
    let actPics = []      
    for (var val of response.value) {
    actPics.push(val.thumbnailUrl)}
    this.castPictures.push({ actor: actor, url: actPics})
    this.getActorUrl()    
    this.getActorPics()
  }

  getActorUrl() { for (let i = 0; i < this.actors.length; i++)  {                                 
                    this.actorPics[i] = this.castPictures.find( ({ actor }) => actor === this.actors[i].actor );}
  }

  getActorPics() { for (let i = 0; i < this.actors.length; i++)  {
                    if (this.actorPics[i] !== undefined) {
                      this.actorPicUrl[i] = this.actorPics[i].url[0]}                                
                  }                           
  }

  selectActor(index) {
    this.selectedActor = index
    console.log(this.selectedActor)
  }
                
  previousPicture(selectedActor) {
    this.actorIndex[selectedActor] --
    this.actorPicUrl[selectedActor] = this.actorPics[selectedActor].url[this.actorIndex[selectedActor]]
    this.imgClass[selectedActor] = false
  }

  nextPicture(selectedActor) {
    this.actorIndex[selectedActor] ++
    this.actorPicUrl[selectedActor] = this.actorPics[selectedActor].url[this.actorIndex[selectedActor]]
    this.imgClass[selectedActor] = false
  }

  submitForm(form: any) {
    this.searchActor.getActorImage(this.actorName[this.selectedActor] + form.actorSearch)       
    .subscribe((r:any) => {let actNewPics = []
                          for (var val of r.value) {
                            actNewPics.push(val.thumbnailUrl)}
                            this.actorPics[this.selectedActor].url = actNewPics
                            this.actorIndex[this.selectedActor] = 0
                            this.actorPicUrl[this.selectedActor] = this.actorPics[this.selectedActor].url[0]
    })    
  }

  selectDisplay (display) {    
    if (display.value === "Name") {
      this.actorName[this.selectedActor] = this.actors[this.selectedActor].actor
    } else if (display.value === "Character") {
      this.actorName[this.selectedActor] = this.actors[this.selectedActor].character
    } else {this.actorName[this.selectedActor] = ""}
  }

  onSelectedSection(value) {
    this.showQuestion = value
  }

  pixelize(value) {
    var src = this.pixelActor.pixelate(this.selectedActor, value.value)
    this.actorPicUrl[this.selectedActor]= src    
    this.imgClass[this.selectedActor] = true
  }
}
