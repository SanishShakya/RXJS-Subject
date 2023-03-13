import { Component } from '@angular/core';
import { ShareSubjectService } from '../../services/share-subject.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss']
})
export class Component1Component {
  public username='Username';

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
