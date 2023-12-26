import { Component } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.scss']
})
export class CircleComponent {
  circle:any=[]
  giveColor:boolean=false
  grayCount=0
  whiteCount=0

  addCircle(){
    this.circle.push({givecolor:false})
    this.whiteCount=this.circle.length
  }

  removeCircle(){
    this.circle.pop()
    // this.whiteCount=this.circle.length
  }

  AddColor(index:any){
    // console.log(index,"Index of");
    // this.giveColor=!this.giveColor
    let item=this.circle.at(index)
    item.givecolor=!item.givecolor

    console.log(item.givecolor,index,"check");
    console.log(item,"Check item");
    if(item.givecolor){
      this.grayCount++
      if(this.whiteCount>0){
      this.whiteCount--
      }
    }
    else if(!item.givecolor){
      this.grayCount--
      this.whiteCount++
    }
    
  }

}
