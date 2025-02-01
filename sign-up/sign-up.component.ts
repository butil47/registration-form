import { Component, OnInit } from '@angular/core';
import{ User } from '../shared/user.model';
import { FormsModule } from '@angular/forms';
import{ FormGroup, FormControl, Validators} from '@angular/forms';
import{UserService} from '../shared/user.service';
import{NgForm} from '@angular/forms';
@Component({
  selector: 'app-sign-up',
  standalone:true,
  imports:[FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent implements OnInit {
  registrationForm: FormGroup;
  user?: User ;
  User: any={};
  username:string='';
  FirstName:string='';
  MiddleName:string='';
  LastName:string='';
  BirthDay:string='';
  Email:string='';
  gender:string='';
  State:string='';
  states =[
   { code:'et' , name: 'ethiopia'},
   {code:'uk', name:'unitedkingdom'},
  ];
  emailPattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  onSubmit()
  {
    console.log('state code:',this.State);
  }

  constructor(){
    this.registrationForm=new FormGroup({
      FirstName: new FormControl('',Validators.required),
      MiddleName: new FormControl(''),
      LastName: new FormControl('',Validators.required),
      Email: new FormControl('',Validators.required)
    });
   }
   submitForm(){
    console.log(this.registrationForm.value);
   }
ngOnInit()
{this.User={FirstName: '',MiddleName:'' ,LastName:'',Email:'',BirthDay:'',Gender:'',State:''};
  this.resetForm();
  }
  resetForm(form?:NgForm){
    if(form != null)
form?.reset();
this.User={
  FirstName:'',
  MiddleName:'',
  LastName:'',
  BirthDay:'',
  Email:'',
  Gender:'',
  State:''
}
  }
}
  




