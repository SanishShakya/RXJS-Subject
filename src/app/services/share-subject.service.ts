import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShareSubjectService {
  username = new Subject<string>();

  calories = new BehaviorSubject<number>(0);

  videoEmit = new ReplaySubject<string>(3, 5000);

  constructor() {}
}
