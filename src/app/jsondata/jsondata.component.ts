import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-jsondata',
  templateUrl: './jsondata.component.html',
  styleUrls: ['./jsondata.component.css']
})
export class JsondataComponent implements OnInit {
  user: any;
 
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.showUserData();
  }


  getUserData(){
    return this.http.get('/api/json');
  }

  showUserData(){
    this.getUserData()
      .subscribe((data: any) => this.user = data.user);
  }  

}
