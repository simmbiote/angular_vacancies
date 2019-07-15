import { FormControl, FormGroup } from "@angular/forms";
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})

export class VacanciesService {

  /*
  Title
  Department
  Intro
  Requirements
  Responsibilities
  Contact info
  Active
  Expires
  */

  form = new FormGroup({
    title: new FormControl(''),
    image_url: new FormControl(''),
    department: new FormControl(''),
    intro: new FormControl(''),
    requirements: new FormControl(''),
    responsibilities: new FormControl(''),
    contact: new FormControl(''),
    // expires: new FormControl(''),
    active: new FormControl(false),
    accept_terms: new FormControl(false),
  })

  // formFields = [
  //  { name: "title", type: "text", placeholder: "Title" },
  //  { name: "department", type: "text", placeholder: "Dept" },
  //  { name: "intro", type: "textarea", placeholder: "Intro text" },
  //  { name: "requirements", type: "textarea", placeholder: "Candidate requirements" },
  //  { name: "responsibilities", type: "textarea", placeholder: "Role Responsibilities" },
  //  { name: "contact", type: "textarea", placeholder: "Contact details" },
  // //  { name: "expires", type: "text", placeholder: "expires" },
  //  { name: "active", type: "select", placeholder: "active" },
  // ]

  constructor(private firestore: AngularFirestore) { }

  // create

  createVacancy(data) {
    return new Promise < any > ((resolve, reject) => {
      this.firestore
        .collection("gsdh_vacancies") // "table" in Firebase.
        .add(data)
        .then(res => {}, err => reject(err));
    });
  }

  // read

  getVacancies() { 
    return this.firestore.collection("gsdh_vacancies").snapshotChanges(); // snapshot() keeps track of any changes that happens
    // return new Promise<any>((resolve, reject) => {
    //   this.firestore.collection('/gsdh_vacancies').snapshotChanges()
    //   .subscribe(snapshots => {
    //     resolve(snapshots)
    //   })
    // })
  }

  // TODO finish.... 
  getVacancy(id) { 
    // return this.firestore.collection("gsdh_vacancies").doc(id);
    return new Promise<any>((resolve, reject) => {
      this.firestore.collection('/gsdh_vacancies').snapshotChanges()
      .subscribe(snapshots => {
        resolve(snapshots)
      })
    })
  }

  // update

  updateVacancies(data){
    this.firestore
    .collection("gsdh_vacancies")
    .doc(data.payload.doc.id) // choose the document
    .set({ completed: true }, { merge: true });
  }

  // delete

  deleteVacancy(data) {
    this.firestore
    .collection("gsdh_vacancies")
    .doc(data.payload.doc.id) // choose the document
    .delete();
  }

}
