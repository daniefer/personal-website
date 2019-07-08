import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  private titleSubject = new BehaviorSubject<string>("");
  private subTitleSubject = new BehaviorSubject<string>("");

  public title: Observable<string>;
  public hasTitle: Observable<boolean>;
  public subTitle: Observable<string>;
  public hasSubTitle: Observable<boolean>;

  constructor() {
    const hasValue = map(x => x !== null && x !== undefined);
    this.title = this.titleSubject.asObservable();
    this.hasTitle = this.title.pipe(hasValue);
    this.subTitle = this.subTitleSubject.asObservable();
    this.hasSubTitle = this.subTitle.pipe(hasValue);
  }

  public setTitle(title: string, subTitle: string) {
    this.titleSubject.next(title);
    this.subTitleSubject.next(subTitle);
  }

  public clear() {
    this.titleSubject.next(null);
    this.subTitleSubject.next(null);
  }
}
