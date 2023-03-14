import { Component, OnInit } from '@angular/core';
import { ShareSubjectService } from 'src/app/services/share-subject.service';

@Component({
  selector: 'app-behaviorSubject',
  templateUrl: './behaviorSubject.component.html',
  styleUrls: ['./behaviorSubject.component.scss'],
})
export class BehaviorSubjectComponent implements OnInit {
  public calories: any;

  constructor(private shareSubject: ShareSubjectService) {
    this.shareSubject.calories.subscribe((res) => {
      this.calories = res;
    });
  }

  ngOnInit() {
    throw new Error('Function not implemented.');
  }
}
