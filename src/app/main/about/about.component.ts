import { Component, OnInit, OnDestroy } from '@angular/core';
import { PageService } from 'src/services/page.service';
import { AboutViewModel } from './about.vm';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnDestroy {

  public vm = new AboutViewModel();

  constructor(private _pageService: PageService) { }

  ngOnInit() {
    this._pageService.setTitle("Dan Ferguson", "You know that guy Dan?")
  }

  ngOnDestroy(): void {
    this._pageService.clear();
  }

}
