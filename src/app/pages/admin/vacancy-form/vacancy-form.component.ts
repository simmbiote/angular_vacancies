import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { VacanciesService } from 'src/app/services/vacancies.service';

@Component({
  selector: 'app-vacancy-form',
  templateUrl: './vacancy-form.component.html',
  styleUrls: ['./vacancy-form.component.css']
})
export class VacancyFormComponent implements OnInit {

  constructor(private vacanciesService:VacanciesService) { }

  ngOnInit() {
  }

}
