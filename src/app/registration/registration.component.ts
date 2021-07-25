import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators} from '@angular/forms';
import { RegistrationService } from '../services/registration.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  angForm: FormGroup;
  constructor(private fb: FormBuilder, private SubmitReg: RegistrationService) {
    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      email: ['', Validators.required ],
      password:['',Validators.required]
   });
   }
  ngOnInit(): void {
   
  }
  submit(data : any) {
    console.log(data);
    this.SubmitReg.add_user(data).subscribe(res => {
      console.log(res);
      
    });
  }
}
