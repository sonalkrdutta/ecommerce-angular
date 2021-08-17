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
      firstname: ['', Validators.required ],
      lastname: ['', Validators.required ],
      phone: ['', [Validators.required,Validators.maxLength(10)]],
      email: ['', Validators.required,Validators.email ],
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
