import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { VacanciesService } from 'src/app/services/vacancies.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from "@angular/router";
import scrollToElement from  'scroll-to-element' ;

@Component({
  selector: 'app-vacancy-form',
  templateUrl: './vacancy-form.component.html',
  styleUrls: ['./vacancy-form.component.css']
})
export class VacancyFormComponent implements OnInit {

  vacancy: Observable<any>;
  vacancyForm;
  id: string;
  type: string;
  
  constructor(private vacanciesService:VacanciesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      this.type = this.route.snapshot.paramMap.get("type");
    });

    this.route.paramMap.subscribe(params => {
      this.id = this.route.snapshot.paramMap.get("id");
      this.updateForm();
    });

  this.vacancyForm = this .vacanciesService.form
  
  }

  updateForm(){
    if(this.type == "vacancy"){
      this.vacanciesService.getVacancy(this.id)
      .then(loadedVacancy =>   {
        this.vacancy = loadedVacancy;
        this.vacanciesService.loadForm(loadedVacancy);
        this.vacancyForm = this.vacanciesService.form
      }) 
    }
  }

  onSubmit(){
    let data = this.vacanciesService.form.value;
    // Update
      if(this.id){
        console.log(this.vacancy, this.id)
        this.vacanciesService.updateVacancy(data, this.id)
        .then(response => {
          this.router.navigate(['/admin'])
          scrollToElement('#top');
          this.vacanciesService.clearForm();

        });
        // Create
      } else {
        console.log('data to add', this.vacancy, data)

        this.vacanciesService.createVacancy(data)  
        .then(data =>  {
          console.log("Added data", data)
          this.router.navigate(['/admin']);
          this.vacanciesService.clearForm();

        } 
      );
    }
    return false;

   }
}
