import { Component, } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import app componentA 
import { AComponent } from './a/a.component';

//import app CompnentB
import { BComponent } from './b/b.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AComponent, BComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-first-app';
  name:string = "roan";
  age:number = 19;
}



