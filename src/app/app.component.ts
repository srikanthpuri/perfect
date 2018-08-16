import { Component } from '@angular/core';
import { DataService } from './data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  products = [];


  constructor(private dataS:DataService)
  {

    this.products = this.dataS.fetchData();
  }


  addProducts(){
    this.dataS.addData({name: 'Product' + this.dataS.dataSource.length + 1, price: this.dataS.dataSource.length*10})
  }

  
}
