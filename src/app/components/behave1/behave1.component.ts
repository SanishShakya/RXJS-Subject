import { Component } from '@angular/core';
import { ShareSubjectService } from '../../services/share-subject.service';

@Component({
  selector: 'app-behave1',
  templateUrl: './behave1.component.html',
  styleUrls: ['./behave1.component.scss']
})
export class Behave1Component {
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
