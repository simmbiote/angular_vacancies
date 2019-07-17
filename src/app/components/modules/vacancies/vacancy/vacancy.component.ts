import { Component, OnInit } from '@angular/core';
import { VacanciesService } from 'src/app/services/vacancies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vacancy',
  templateUrl: './vacancy.component.html',
  styleUrls: ['./vacancy.component.css']
})

export class VacancyComponent implements OnInit {

  item;
  slug;

  constructor(private vacanciesService:VacanciesService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.slug = this.route.snapshot.paramMap.get("id");
      this.getItem();
    });
  }

  getItem(){
    this.vacanciesService.getVacancyBySlug(this.slug)
    .then(res => this.item = res)
    .catch(e => console.error(Error(e)))
  }

}
