import { Component, OnInit, Injectable } from '@angular/core';
import { VacanciesService } from '../../services/vacancies.service';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {

  items;

  displayedColumns: string[] = ['title', 'department', 'active', 'actions'];


  constructor(private vacanciesService: VacanciesService) { }
  
  ngOnInit() {
    this.getItems();
   }

    getItems(){
     this.vacanciesService.getVacancies()
     .subscribe(res => {
      this.items = res
      console.log('this.items)', this.items);
      return this.items;
     });
   }
}
