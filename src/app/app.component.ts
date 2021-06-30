import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculator';
  public add?:string;
  public sub?:string;
  public mul?:string;
  public div?:string;
  public val1?:Number;
  public val2?:Number;
  

} 
