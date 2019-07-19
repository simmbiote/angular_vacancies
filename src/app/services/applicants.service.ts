import {FormControl, FormGroup} from '@angular/forms';
import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Query, QueryFn} from '@angular/fire/firestore';

@Injectable({
    providedIn: 'root'
})

/***
 * APPLICANT SERVICE
 * This service is not used currently.
 * Might not be practical to let applicants attach files, etc, which need to be stored...?
 * */

export class ApplicantsService {

    collection = 'job_applicants';

    constructor(private firestore: AngularFirestore) {
    }

    createItem(data) {
        return new Promise<any>((resolve, reject) => {
            this.firestore
                .collection(this.collection) // "table" in Firebase.
                .add(data)
                .then(res => resolve(data), err => reject(err));
        });
    }

    getItems(where?: []) {
        return new Promise<any>((resolve, reject) => {
            this.firestore.collection(this.collection).snapshotChanges()
                .subscribe(snapshots => {
                    resolve(snapshots);
                });
        });
    }

    getItem(id?: string, where?: []) {
        if (id) {
            return new Promise<any>((resolve, reject) => {
                this.firestore.collection(this.collection).doc(id).ref.get()
                    .then(doc => resolve(doc.data())).catch(error => reject(Error(error)));
            });
        }
    }

    updateItem(data, id) {

        return new Promise<any>((resolve, reject) => {
            this.firestore
                .collection(this.collection)
                .doc(id)
                .set(data, {
                    merge: true
                })
                .then(result => resolve(result))
                .catch(error => reject(Error(error)));
        });
    }

    deleteItem(data) {
        this.firestore
            .collection(this.collection)
            .doc(data.payload.doc.id) // choose the document
            .delete();
    }

}
