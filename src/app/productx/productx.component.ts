import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-productx',
  templateUrl: './productx.component.html',
  styleUrls: ['./productx.component.css']
})
export class ProductxComponent implements OnInit {

  list = [];
  constructor(private dataservice: DataService) { 

    this.list = this.dataservice.fetchData();
  }

  ngOnInit() {
  }

}
