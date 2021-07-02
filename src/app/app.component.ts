import { Component } from '@angular/core';
import { Values } from './request';
import { Result } from './response';
import {CalserveService} from './calserve.service'
import { serializeNodes } from '@angular/compiler/src/i18n/digest';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculator';

  values!: Values;
  result!:Result;
  value1!:number;
  value2!:number;
  op!:string
  res!:number;
  public Operator!:string;

  
  public val1!:number;
  public val2!:number;
  

  constructor(private calserve: CalserveService){
    this.values={
      operator:'',
      number1: this.value1,
      number2:  this.value2
    }
  


  }

  ngOnInit(): void {
    this.sendValues()
  }
  sendValues(){
    this.values.operator=this.Operator;
    this.values.number1=this.val1;
    this.values.number2=this.val2;
    this.calserve.sendValues(this.values).subscribe(data=>{
      this.result=data;
      this.res=this.result['result']
      this.op=`${this.values.number1} ${this.values.operator} ${this.values.number2} = `

      
    },error => {
      console.log('Error occurred');
    })
  }
   
  

}



// |number : '.2-2'