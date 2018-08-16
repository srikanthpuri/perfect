import { Injectable } from "@angular/core";




@Injectable()
export class DataService{
    dataSource = [
        {
          name: 'Product One',
          price: 100
        },
        {
          name: 'Product Two',
          price: 300
        },
        {
          name: 'Product Three',
          price: 200
        },
        {
          name: 'Product 4',
          price: 100
        },
        {
          name: 'Product 5',
          price: 3300
        },
        {
          name: 'Product 6',
          price: 200
        },
        {
          name: 'Product 7',
          price: 100
        },
        {
          name: 'Product 8',
          price: 300
        },
        {
          name: 'Product 9',
          price: 900
        },
        {
          name: 'Product 10',
          price: 1000
        },
        {
          name: 'Product 11',
          price: 1300
        },
        {
          name: 'Product 12',
          price: 1200
        }
      ]


      fetchData(){
          return this.dataSource;
      }

      addData(x){
          this.dataSource.push(x);
      }

      
}