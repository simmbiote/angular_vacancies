import { Component, OnInit } from '@angular/core';
import { VacanciesService } from 'src/app/services/vacancies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.css']
})
export class VacanciesComponent implements OnInit {

  items;
  department :string;
  item;
  id;
  slug :string;

  constructor(private vacanciesService: VacanciesService, private route:ActivatedRoute) { }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      this.department = this.route.snapshot.paramMap.get("department");
      this.getItems()
    });
  }

   getItems(){
     this.vacanciesService.getVacancies(this.department)
     .then(res => this.items = res )  
     .catch(e => console.error(Error(e)));
   }

}
