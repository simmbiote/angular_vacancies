import {Component, Inject, OnInit} from '@angular/core';
import {VacanciesService} from 'src/app/services/vacancies.service';
import {ActivatedRoute} from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
    applicationRequirements: string;
    applyEmail: string;
    role: string;
    team: string;
}

@Component({
    selector: 'app-vacancy',
    templateUrl: './vacancy.component.html',
    styleUrls: ['./vacancy.component.css']
})

export class VacancyComponent implements OnInit {

    item;
    slug;

    constructor(private vacanciesService: VacanciesService, private route: ActivatedRoute, public dialog: MatDialog) {
    }

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.slug = this.route.snapshot.paramMap.get('id');
            this.getItem();
        });
    }

    getItem() {
        this.vacanciesService.getVacancyBySlug(this.slug)
            .then(res => this.item = res)
            .catch(e => console.error(Error(e)));
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(DialogDataComponent, {
            width: '100%',
            maxWidth: '600px',
            panelClass: 'panel-container',
            data: {
                applyEmail: this.item.apply_email,
                role: this.item.title,
                applicationRequirements: this.item.applicationRequirements,
                team: this.item.department,
            }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
}

@Component({
    selector: 'app-dialog',
    templateUrl: 'apply-dialog.html',
})
export class DialogDataComponent {

    applicationRequirements = '';
    applyEmail = 'impressus@gsdh.org';
    role = 'Job';
    team = 'GSDH';

    constructor(public dialogRef: MatDialogRef<VacancyComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    }

    ngOnInit() {
        this.applicationRequirements = this.data.applicationRequirements || this.applicationRequirements;
        this.applyEmail = this.data.applyEmail || this.applyEmail;
        this.role = this.data.role || this.role;
        this.team = this.data.team || this.team;
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

}
