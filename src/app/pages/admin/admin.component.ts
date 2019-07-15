import { Component, OnInit, Injectable } from '@angular/core';
import { VacanciesService } from '../../services/vacancies.service';
import { ActivatedRoute } from "@angular/router";

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


  constructor(private vacanciesService: VacanciesService, private route:ActivatedRoute) { }
  
  ngOnInit() {
    this.getItems();
    console.log(  this.route.snapshot.paramMap.get("type"),   this.route.snapshot.paramMap.get("id") );
   }

    getItems(){
     this.vacanciesService.getVacancies()
     .subscribe(res => {
      this.items = res
      console.log('this.items)', this.items);
      return this.items;
     });
   }


   loadItemToEdit(item){ 
    this.vacanciesService.loadForm(item);
    console.log("EDIGT...")
    return false;

   }

   deleteItem = item => {

    if(!confirm(`Are you sure you  want to delete ${item.payload.doc.data().title}`)) return false;

    this.vacanciesService.deleteVacancy(item);
    return false;
   }

   clearForm(){
     this.vacanciesService.clearForm();
   }
 

}
