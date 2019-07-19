import {FormControl, FormGroup} from '@angular/forms';
import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
    providedIn: 'root'
})

export class VacanciesService {


    form = new FormGroup({
        title: new FormControl(''),
        image_url: new FormControl(''),
        slug: new FormControl(''),
        department: new FormControl(''),
        intro: new FormControl(''),
        content: new FormControl(''),
        apply_email: new FormControl(''),
        contact: new FormControl(''),
        active: new FormControl(false),
        accept_terms: new FormControl(false),
    });

    constructor(private firestore: AngularFirestore) {
    }

    // create

    createVacancy(data) {
        return new Promise<any>((resolve, reject) => {
            this.firestore
                .collection('gsdh_vacancies') // "table" in Firebase.
                .add(data)
                .then(res => resolve(data), err => reject(err));
        });
    }

    // read
    // todo filter by department

    getVacancies(department = '') {
        return new Promise<any>((resolve, reject) => {
            this.firestore.collection('/gsdh_vacancies').snapshotChanges()
                .subscribe(snapshots => {
                    resolve(snapshots);
                });
        });
    }

    getVacancy(id) {
        return new Promise<any>((resolve, reject) => {
            this.firestore.collection('gsdh_vacancies').doc(id).ref.get()
                .then(doc => resolve(doc.data())
                ).catch(error => {
                reject(Error(error));
            });
        });
    }

    getVacancyBySlug(slug) {
        return new Promise<any>((resolve, reject) => {
            this.firestore.collection('gsdh_vacancies').ref.where('slug', '==', slug).get()
                .then(docs => {
                        let n = 0;
                        docs.forEach(doc => {
                            if (n === 0) {
                                resolve(doc.data());
                            }
                            n++;
                        });
                    }
                ).catch(error => {
                reject(Error(error));
            });
        });
    }

    // update

    updateVacancy(data, id) {

// TODO Validation

        return new Promise<any>((resolve, reject) => {
            this.firestore
                .collection('gsdh_vacancies')
                .doc(id)
                .set({
                    title: data.title,
                    image_url: data.image_url,
                    department: data.department,
                    slug: data.slug,
                    intro: data.intro,
                    content: data.content,
                    // requirements: data.requirements,
                    // responsibilities: data.responsibilities,
                    contact: data.contact,
                    active: data.active,
                }, {merge: true})
                .then(result => resolve(result))
                .catch(error => reject(Error(error)));
        });


    }

    // delete

    deleteVacancy(data) {
        this.firestore
            .collection('gsdh_vacancies')
            .doc(data.payload.doc.id) // choose the document
            .delete();
    }


    // Load form from item.

    loadForm(item) {

        const itemPayload = item;

        this.form = new FormGroup({
            title: new FormControl(itemPayload.title),
            image_url: new FormControl(itemPayload.image_url),
            slug: new FormControl(itemPayload.slug),
            department: new FormControl(itemPayload.department),
            intro: new FormControl(itemPayload.intro),
            content: new FormControl(itemPayload.content),
            contact: new FormControl(itemPayload.contact),
            active: new FormControl(itemPayload.active),
            accept_terms: new FormControl(itemPayload.accept_terms),
        });

    }

    // clear form content

    clearForm() {
        this.form = new FormGroup({
            title: new FormControl(''),
            image_url: new FormControl(''),
            department: new FormControl(''),
            slug: new FormControl(''),
            intro: new FormControl(''),
            content: new FormControl(''),
            // requirements: new FormControl(''),
            // responsibilities: new FormControl(''),
            contact: new FormControl(''),
            // expires: new FormControl(''),
            active: new FormControl(false),
            accept_terms: new FormControl(false),
        });
    }

}
