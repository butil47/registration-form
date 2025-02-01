import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from "./sign-up/sign-up.component";
import{ FormBuilder,FormGroup,Validators} from '@angular/forms';
import{FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [ SignUpComponent,RouterOutlet],
  template:'<app-signup></app-signup>',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
    state: string[]=['ethiopia,unitedkingdom,kenya'];
  title = 'user-registration';
}
