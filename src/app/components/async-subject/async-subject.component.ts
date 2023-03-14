import { Component } from '@angular/core';
import { ShareSubjectService } from 'src/app/services/share-subject.service';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.scss']
})
export class AsyncSubjectComponent {
  asyncVideoEmit: any;

  constructor(
    private subjectData: ShareSubjectService
  ){}

  ngOnInit(): void {
    this.subjectData.asyncVideoEmit.subscribe(res => {
      this.asyncVideoEmit = res;
    })
  }

  onVideoAdd(video: any) {
    console.log(video.value)
    this.subjectData.asyncVideoEmit.next(video.value);
  }

  onComplete() {
    console.log(this.subjectData.videoEmit.complete());
    this.subjectData.asyncVideoEmit.complete();
  }
}
