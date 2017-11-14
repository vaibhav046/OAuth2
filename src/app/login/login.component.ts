import {Component,Input,OnInit} from '@angular/core';

@Component({
  selector:'app-login',
  templateUrl:'app/login/login.component.html'
})

export class LoginComponent implements OnInit{
  @Input() User:{id:number,name:string};
  constructor(){}
  ngOnInit(){}
}
