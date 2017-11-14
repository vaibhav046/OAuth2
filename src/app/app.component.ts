import { Component } from '@angular/core';
import  {LoginComponent} from './login/login.component'

@Component({
  selector: 'my-app',
  templateUrl:'app/app.component.html',
  entryComponents:[LoginComponent]
})
export class AppComponent  {
///[] means property binding
//()means event binding
  name = 'Angular';
  title='Vaibhav';
  vaibhavscolor='blue';
  user=[
    {id:1,name:"spacy"},
    {id:2,name:"kevin"},
    {id:3,name:"dictator"}
  ];
  email='vaibhav.kumar1@powerschool.com';

  changeVaibhavsColor(){
    this.vaibhavscolor=this.vaibhavscolor==='blue'?'red':'blue';
  }
 }
