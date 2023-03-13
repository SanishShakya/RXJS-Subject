import { Component } from '@angular/core';
import { ShareSubjectService } from '../../services/share-subject.service';

@Component({
  selector: 'app-behave2',
  templateUrl: './behave2.component.html',
  styleUrls: ['./behave2.component.scss']
})
export class Behave2Component {
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
