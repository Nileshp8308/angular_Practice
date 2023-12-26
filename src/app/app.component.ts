import { Component } from '@angular/core';
import { Observable, interval, map, take, of, bufferCount, concatMap, timer, mapTo } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularPractice';

  dataArray: number[] = Array.from({ length: 100 }, (_, index) => index + 1);
  entriesObservable: Observable<any[]> | any;
  entriesPerPage: number = 10
  currentIndex: number = 0
  currentEntries: Array<number> = []
  subscription: any;


  ngOnInit() {
    this.subscription = interval(5000).pipe(
      map(() => {
        const endIndex = this.currentIndex + this.entriesPerPage
        this.currentEntries = this.dataArray.slice(this.currentIndex, endIndex)
        console.log(this.currentIndex,"Current index before");
        
        this.currentIndex = endIndex >= this.dataArray.length ? 0 : endIndex
        console.log(this.currentIndex,"Current index after");
        console.log(endIndex,"end Index");
        
        console.log(this.currentEntries, "Current entries");
        if (endIndex >= this.dataArray.length) {
          this.subscription.unsubscribe()
        }
      })
    ).subscribe()
    this.checkOject()
  }

  unSubscribe() {
    this.subscription.unsubscribe()
  }

  increment() {
    console.log("Called");
    
    if (this.entriesPerPage<this.dataArray.length) {
      
      this.entriesPerPage += 10
      console.log(this.entriesPerPage,"entered in it");

    }
  }

  checkOject(){
    const object:any={
      a:"nilesh",
      b:1,
      c:23
    }

    Object.keys(object).forEach((i)=>console.log(object[i]))

    Object.values(object).forEach((v)=>console.log(v))

    Object.entries(object).forEach((e)=>console.log(e)
    )
  }

}
