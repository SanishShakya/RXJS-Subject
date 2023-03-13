import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShareSubjectService {
  username = new Subject<string>();

  constructor() {}
}
