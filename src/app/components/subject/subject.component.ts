import { Component, OnInit } from '@angular/core';
import { ShareSubjectService } from 'src/app/services/share-subject.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss'],
})
export class SubjectComponent implements OnInit {
  public username = 'Username';

  constructor(private shareSubject: ShareSubjectService) {
    this.shareSubject.username.subscribe((res) => {
      this.username = res;
    });
  }

  ngOnInit() {
    throw new Error('Function not implemented.');
  }
}
