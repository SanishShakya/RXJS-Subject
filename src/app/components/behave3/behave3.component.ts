import { Component } from '@angular/core';
import { ShareSubjectService } from '../../services/share-subject.service';

@Component({
  selector: 'app-behave3',
  templateUrl: './behave3.component.html',
  styleUrls: ['./behave3.component.scss']
})
export class Behave3Component {
  public calories:any;

  constructor(
    private shareSubject: ShareSubjectService
  ) {
    this.shareSubject.calories.subscribe(res => {
      this.calories = res;
    });
  }

  onChange(caloriesData: any) {
    this.shareSubject.calories.next(caloriesData.value);
  }
}
