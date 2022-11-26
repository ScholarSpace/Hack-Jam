import { Injectable } from '@angular/core';
import { Firestore, where, collection, collectionData, query} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterestService {

  constructor(private db: Firestore) { }

  getInterests(){
    let interestsRef = collection(this.db, 'interests');
      const q = query(interestsRef, where('id', '==', '1'));
      return collectionData(q) as Observable<Interest[]>
  }
}

export interface Interest {
  id: string;
  name: string;
  subTopics: string[];
}
