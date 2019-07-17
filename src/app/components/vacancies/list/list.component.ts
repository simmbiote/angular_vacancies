import { Component, OnInit } from '@angular/core';

import { data } from '../../../../data/vacancies'
import { VacanciesService } from 'src/app/services/vacancies.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  listings;

  constructor(private vacanciesService: VacanciesService) { }

  ngOnInit() {
    this.vacanciesService.getVacancies()
    .then( results =>  this.listings = results )
    .catch(e => console.error(Error(e)));
  }

}
