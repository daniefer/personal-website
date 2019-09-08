import { Component, OnInit, OnDestroy } from '@angular/core';
import { PageService } from 'src/app/services/page.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit, OnDestroy {

  constructor(private _pageService: PageService) { }


  ngOnInit() {
    this._pageService.setTitle("Woops!", "Looks like you mistyped something there, partner.")
  }

  ngOnDestroy(): void {
    this._pageService.clear();
  }

}
