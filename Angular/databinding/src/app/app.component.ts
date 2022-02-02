import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Data Binding Techanics';
  sno:number=238;
  name:string="Saikumar"
  fullname:string="Saikumar Manikonda"

  isDisabled:boolean=false;

  display()
  {
    alert("This is the alert")
  }

  constructor()
  {
    setTimeout(()=>{
      this.isDisabled=true;
    },5000);
  }
}
