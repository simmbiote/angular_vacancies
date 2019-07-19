import { Component, OnInit, Injectable } from '@angular/core';
import { VacanciesService } from '../../services/vacancies.service';
import { ActivatedRoute, Router } from "@angular/router";

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
  id;
  displayedColumns: string[] = ['title', 'department', 'active', 'actions'];

  constructor(private vacanciesService: VacanciesService, private route:ActivatedRoute, private router: Router) { }
  
  ngOnInit() {
    this.getItems();
  }
  
  getItems(){
     this.vacanciesService.getVacancies()
     .then(res => this.items = res )
   }

   loadItemToEdit(item){ 
    this.vacanciesService.loadForm(item);
    return false;
   }

   deleteItem = item => {
    if(!confirm(`Are you sure you  want to delete ${item.payload.doc.data().title}`)) return false;
    this.vacanciesService.deleteVacancy(item);
    this.router.navigate(['/admin']);
    return false;
   }

   clearForm(){
     this.vacanciesService.clearForm();
   }
 
}