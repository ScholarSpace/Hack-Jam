import { Injectable } from '@angular/core';
import { Firestore, where, collection, collectionData, query} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipsService {

  constructor(private db: Firestore) { }

  getTips(){
    let tipsRef = collection(this.db, 'tips');
    const q = query(tipsRef, where('id', '==', '1'));
    return collectionData(q) as Observable<Tip[]>
  }
}

export interface Tip {
  tipsDoc: string;
  tipsTitle: string;
}