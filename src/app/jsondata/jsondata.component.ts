import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-jsondata',
  templateUrl: './jsondata.component.html',
  styleUrls: ['./jsondata.component.css']
})
export class JsondataComponent implements OnInit {
  heading:String;
  jsonData:any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.heading = "Test Angular App"
    
  }

}
