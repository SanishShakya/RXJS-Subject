import { Component } from '@angular/core';
import { ShareSubjectService } from '../../services/share-subject.service';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.scss']
})
export class Component3Component {
  public username='Username3';

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
