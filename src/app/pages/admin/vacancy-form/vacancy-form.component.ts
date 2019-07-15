import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { VacanciesService } from 'src/app/services/vacancies.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-vacancy-form',
  templateUrl: './vacancy-form.component.html',
  styleUrls: ['./vacancy-form.component.css']
})
export class VacancyFormComponent implements OnInit {

  vacancy: Observable<any>;

  vacancyForm;

  id;
  
  constructor(private vacanciesService:VacanciesService) { }

  ngOnInit() {
  //   this.vacanciesService.getVacancy(this.id).subscribe(vacancy => {
  //     this.vacancy = vacancy
  // });

  this.vacancyForm = this.vacanciesService.form
  
  }

  onSubmit(){
    let data = this.vacanciesService.form.value;
    this.vacanciesService.createVacancy(data)  
    .then(() =>  {
      console.log("Added?");
      this.vacanciesService.clearForm();
  }   );

    return false;

   }



   


}
