import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl:'./user.component.html',
  styles:[`
  table,th,td{
    border: 1px solid black;
  }`],
})
export class UserComponent  {
    ngOnInit() {
    console.log("User component Init");
  }
  userDetails:any=[{ id: 1, name: 'Rajesh' },
  { id: 2, name: 'Ritesh' },
  { id: 3, name: 'Snephal' }];

  @Input() location:string;

   ngOnChanges(changes: SimpleChanges) {
        console.log('OnChanges');
        console.log(JSON.stringify(changes));
   }
  ngOnDestroy() {
    console.log("User component destroy");
  }
}