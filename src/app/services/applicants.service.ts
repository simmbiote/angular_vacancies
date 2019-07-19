import {FormControl, FormGroup} from '@angular/forms';
import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Query, QueryFn} from '@angular/fire/firestore';

@Injectable({
    providedIn: 'root'
})

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
        /*   if (where.length > 0) {
               return new Promise<any>((resolve, reject) => {
                   this.firestore.collection(this.collection, ref => {
                       let query: Query = ref;
                       where.forEach(whereItem => {
                           // const parts = ['', '', ''];
                           // query = query.where(parts[0], parts[1], parts[2]);
                       });
                       return query;
                   }).get()
                       .subscribe(docs => {
                           let n = 0;
                           docs.forEach(doc => {
                               if (n === 0) resolve(doc.data());
                               n++;
                           });
                       });
               });
           }*/
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
