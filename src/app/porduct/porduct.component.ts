import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-porduct',
  templateUrl: './porduct.component.html',
  styleUrls: ['./porduct.component.css']
})
export class PorductComponent implements OnInit {

  @Input()
  data;
  constructor() { }

  ngOnInit() {
  }

}
