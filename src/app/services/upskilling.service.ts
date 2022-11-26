import { Injectable } from '@angular/core';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore/'; 
import { collectionData, Timestamp, where } from '@angular/fire/firestore/';
import { Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { collection } from '@firebase/firestore';
import {query} from 'firebase/firestore';


@Injectable({
  providedIn: 'root'
})
export class UpskillingService {

  topics = ['Microsoft Office', 'Writing']

  constructor(private afs: Firestore) { }

  getCourses(topic: string){
    let coursesRef = collection(this.afs, 'courses');
    const q = query(coursesRef, where('topics', '==', topic));
    return collectionData(q, {idField: 'id'}) as Observable<Course[]>
  }

  getCompletedCourses(completed: string[]){
    let searchJobs = collection(this.afs, 'courses');
    const q = query(searchJobs, where('id', 'in', completed));
    return collectionData(q, {idField: 'id'}) as Observable<Course[]>
  }
}

export interface Course {
  badgeSupplier: string;
  badgeTitle: string;
  courseDesc: string;
  courseText: string;
  courseTitle: string;
  id: string;
  quizeText: string;
  topics: string;
}
