import { Component } from '@angular/core';
import { ShareSubjectService } from '../../services/share-subject.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.scss']
})
export class Component2Component {
  public username='Username2';

  constructor(
    private shareSubject: ShareSubjectService
  ) {
    this.shareSubject.username.subscribe(res => {
      this.username = res;
    });
  }

  onChange(uname: any) {
    this.shareSubject.username.next(uname.value);
  }
}
