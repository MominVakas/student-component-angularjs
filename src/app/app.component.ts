import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({ selector: 'app-root', 
templateUrl: 'app.component.html',
styleUrls: ['app.component.css']

})
export class AppComponent {
  title = 'Template driven forms';
  onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
  }
 
  countryList:country[] = [
    new country("1", "India"),
    new country('2', 'USA'),
    new country('3', 'England')
  ];
}
 
export class country {
  id:string;
  name:string;
 
  constructor(id:string, name:string) {
    this.id=id;
    this.name=name;
  }
}
