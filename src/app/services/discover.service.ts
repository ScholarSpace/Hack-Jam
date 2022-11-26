import { Injectable } from '@angular/core';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore/'; 
import { collectionData, Timestamp, where } from '@angular/fire/firestore/';
import { Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { collection } from '@firebase/firestore';
import {query} from 'firebase/firestore'

@Injectable({
  providedIn: 'root'
})
export class DiscoverService {
  jobsCollection: AngularFirestoreCollection<Job>;
  jobs: any;

  constructor(private afs: Firestore) {

  }

  getJobs(): Observable<Job[]>{
    let jobsRef = collection(this.afs, 'jobDetails');
    const q = query(jobsRef, where('active?', '==', 'active'));
    return collectionData(q, {idField: 'id'}) as Observable<Job[]>
  }

  searchJobs(searchTerm: string){
    let searchJobs = collection(this.afs, 'jobDetails');
    const q = query(searchJobs, where('jobTitle', '==', searchTerm));
    return collectionData(q, {idField: 'id'}) as Observable<Job[]>
  }
}

export interface Job {
  id: string,
  status : string;
  hiredStaff : string[];
  industry : string;
  jobDesc : string;
  jobDuration : string;
  jobLocation : string;
  jobPayRate : number;
  jobPostDate : Date;
  jobProposals : string[];
  jobTitle : string;
  jobType : string;
  recID : string;
  shortlist : string[];
}