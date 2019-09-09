import { Component, OnInit, OnDestroy } from '@angular/core';
import { PageService } from 'src/app/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor(private _pageService: PageService) { }

  ngOnInit() {
    this._pageService.setTitle("Welcome stranger", "What's that guy Dan up to these days?")
  }

  ngOnDestroy(): void {
    this._pageService.clear();
  }
}
