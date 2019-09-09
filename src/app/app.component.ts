import { Component } from '@angular/core';
import { PageService } from 'src/app/services';
import { AboutViewModel } from './main/about/about.vm';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  menuOpen = false;
  aboutVm = new AboutViewModel();
  constructor(public pageService: PageService) {
  }
}
