import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  ngOnInit() {
    console.log("App component Init");
  }

  location:string;
  setLocation(data:string) {
    this.location =data;
  }
  ngOnDestroy() {
    console.log("App component destroy");
  }
}