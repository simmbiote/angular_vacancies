import {Component, OnInit} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

import {data} from '../../../../data/vacancies';
import {VacanciesService} from 'src/app/services/vacancies.service';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

    listings;

    constructor(private vacanciesService: VacanciesService, private meta: Meta, private title: Title) {
    }

    ngOnInit() {
        this.vacanciesService.getVacancies()
            .then(results => {
                this.listings = results;
                this.meta.addTag({name: 'description', content: 'Test Description'});
                this.meta.addTag({name: 'title', content: 'Test Title'});
                this.title.setTitle('Test title');

            })
            .catch(e => console.error(Error(e)));
    }

}
