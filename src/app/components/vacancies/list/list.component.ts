import { Component, OnInit } from '@angular/core';

import { data } from '../../../../data/vacancies'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  listings = data;

  constructor() { }

  ngOnInit() {
  }

}
