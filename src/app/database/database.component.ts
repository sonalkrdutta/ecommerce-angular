import { Component, OnInit } from '@angular/core';
import { UloginService } from '../user login/login/ulogin.service';

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.css']
})
export class DatabaseComponent implements OnInit {
  respData: any

  constructor(private logservice:UloginService) { 
    this.DBdata()
  }
  DBdata(): void {
    this.logservice.DBdata().subscribe((resp: any) => {
      this.respData = resp;
      this.respData = this.respData.user_login_list;
      //if (this.respData != null)
      // {
        //this.found = 1;
       // this.router.navigateByUrl('about');
      //}
      console.log(this.respData);
    })
  }

  ngOnInit(): void {
  }

}
