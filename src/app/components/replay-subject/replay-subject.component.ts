import { Component } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { ShareSubjectService } from 'src/app/services/share-subject.service';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.scss']
})
export class ReplaySubjectComponent {
  userOne: any = [];
  userTwo: any = [];
  userThree: any = [];
  subscribeOne:boolean = false;
  subscribeTwo:boolean = false;
  subscription2!: Subscription;
  subscription3!: Subscription;
  methodInterval:boolean = false;
  intSubscription!: Subscription;

  constructor(
    private shareSubject: ShareSubjectService
  ) {}

  ngOnInit(): void {
    this.shareSubject.videoEmit.subscribe(res => {
      this.userOne.push(res);
    })
  }

  onVideoAdd(video: any) {
    console.log(video.value);
    this.shareSubject.videoEmit.next(video.value);
  }

  user2Subs(){
    if(this.subscribeOne) {
      this.subscription2.unsubscribe();
    } else {
      this.subscription2 = this.shareSubject.videoEmit.subscribe(res => {
        this.userTwo.push(res);
      });
    }
    this.subscribeOne = !this.subscribeOne
  }

  user3Subs(){
    if(this.subscribeTwo) {
      this.subscription3.unsubscribe();
    } else {
      this.subscription3 = this.shareSubject.videoEmit.subscribe(res => {
        this.userThree.push(res);
      });
    }
    this.subscribeTwo = !this.subscribeTwo
  }

  toogleMethod() {
    const broadCastVideo = interval(1000);

    if(!this.methodInterval) {
      this.intSubscription = broadCastVideo.subscribe(res => {
        this.shareSubject.videoEmit.next('video ' + res)
      });
    } else {
      this.intSubscription.unsubscribe();
    }
    this.methodInterval = !this.methodInterval;
  }
}
