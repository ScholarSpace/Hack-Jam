import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { collection, collectionData, Firestore, query, where } from '@angular/fire/firestore';
import { map, Observable } from 'rxjs';
import { Job } from './discover.service';

@Injectable({
  providedIn: 'root'
})
export class MainAppService {
  recruiter: Recruiter;

  constructor(private afs: AngularFirestore, private db: Firestore) {
  }

  getStudent(id: string) {
    const collection = this.afs.collection<Student>('studentDetails', ref => ref.where('id', '==', id));
    const user = collection.valueChanges()
    .pipe(
      map(users => {
        const singleUser = users[0];
        return singleUser
      })
    )
    return user
  } 

  getProfiles(id: string){
    let profilesRef = collection(this.db, 'profiles');
    const q = query(profilesRef, where('studentID', '==', id));
    return collectionData(q, {idField: 'id'}) as Observable<Profile[]>
  }

  getReviews(id: string){
    let reviewsRef = collection(this.db, 'reviews');
    const q = query(reviewsRef, where('studentID', '==', id));
    return collectionData(q, {idField: 'id'}) as Observable<Review[]>
  }

  getSavedJobs(jobs: string[]){
    let savedJobsRef = collection(this.db, 'jobDetails');
    const q = query(savedJobsRef, where('id', 'in', jobs));
    return collectionData(q, {idField: 'id'}) as Observable<Job[]>;
  }

  getRecruiter(){
    const collection = this.afs.collection<Recruiter>('recruiters', ref => ref.where('id', '==', 'wVqOmcfOOBgnW1YQyUNC'));
    const user = collection.valueChanges()
    .pipe(
      map(users => {
        const singleUser = users[0];
        return singleUser
      })
    )
    return user
  }

  getRecruiterReviews(){
    let reviewIDs = collection(this.db, 'reviews');
    const q = query(reviewIDs, where('for', '==', 'wVqOmcfOOBgnW1YQyUNC'));
    return collectionData(q) as Observable<Review[]>;
  }

  getJobs(type: string): Observable<Job[]>{
    let jobsRef = collection(this.db, 'jobDetails');
    const q = query(jobsRef, where('active?', '==', type));
    return collectionData(q, {idField: 'id'}) as Observable<Job[]>
  }

  getSingleJob(id: string){
    let jobsRef = collection(this.db, 'jobDetails');
    const q = query(jobsRef, where('id', '==', id));
    return collectionData(q, {idField: 'id'}) as Observable<Job[]>
  }

  degrees = ['BSc in Media studies',
                               'BA/B.com in Law',
                               'BSc in Psychology',
                               'BA/B.com or BSc in Marketing',
                               'BA or BSc in Politics',
                               'BSc in Botany',
                               'BSc in Biology',
                               'BSc in Physics',
                               'BSc in Medicine',
                               'BSc or BEng in Chemical Engineering',
                               'BSc or BEng in Civil Engineering',
                               'BSc or BEng in Electrical Engineering',
                               'BSc or BEng in Mechanical Engineering',
                               'BA in Graphic Design',
                               'BA or BFA (Bachelor of Fine Arts) in Fine Arts',
                               'Honours in Media Studies',
                               'Honours In Law',
                               'Honours in Psychology',
                               'Honours in Marketing',
                               'Honours in Politics',
                               'Honours in Botany',
                               'Honours in Biology',
                               'Honours in Physics',
                               'Honours in Medicine',
                               'Honours in Chemical Engineering',
                               'Honours in Civil Engineering',
                               'Honours in Electrical Engineering',
                               'Honours in Mechanical Engineering',
                               'Honours in Graphic Design',
                               'Honours in Fine Arts',
                               '(MSc) Master of Science in Media Studies',
                               'Masters in law',
                               'Masters in Psychology',
                               'Masters or BSc in Marketing',
                               '(MSc) Master of Science in Politics',
                               '(MSc) Master of Science in Botany',
                               '(MSc) Master of Science in Biology',
                               '(MSc) Master of Science in Physics',
                               '(MSc) Master of Science in Medicine',
                               '(MSc) Master of Science in Chemical Engineering',
                               '(MSc) Master of Science in Civil Engineering',
                               '(MSc) Masters in Electrical Engineering',
                               '(MSc) Masters in Mechanical Engineering',
                               'Masters in Graphic Design',
                               'Masters in Fine Arts',
                               'PhD in Media Studies',
                               'PhD in Law',
                               'PhD in Psychology',
                               'PhD in Marketing', 
                               'PhD in Politics', 
                               'PhD in Botany',
                               'PhD in Biology', 
                               'PhD in Physics',
                               'PhD in Medicine',
                               'PhD in Chemical Engineering', 
                               'PhD in Civil Engineering',
                               'PhD in Electrical Engineering',
                               'PhD in Mechanical Engineering',
                               'PhD in Graphic Design',
                               'PhD in Fine Arts']

}

export interface Student{
  aboutMe: string,
  completedCourses: string[],
  cv: any,
  email: string,
  id: string,
  institution: string,
  interests: string[],
  location: string,
  name: string,
  passedQuizzes: string[],
  password: string,
  points: number,
  profilePic: any,
  qualification: string,
  reviewIDs: string[],
  savedJobs: string[],
  surname: string,
  yos: string
}

export interface Profile {
  profileDesc: string,
  profileTitle: string,
  projectDesc: string[],
  projectText: string[],
  projectTitle: string[],
  studentID: string
}

export interface Review {
  comment: string,
  rating: number,
  recName: string,
  studentID: string,
  user: string
}

export interface Recruiter{
  companyName: string,
  companyDesc: string,
  email: string,
  estDate: string,
  location: string,
  password: string,
  recType: string,
  reviewID: string[],
  socialMedia: string[],
  verified: boolean
}