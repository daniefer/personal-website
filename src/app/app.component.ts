import { Component } from '@angular/core';
import { PageService } from 'src/services/page.service';
import { AboutViewModel } from './home/about/about.vm';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  aboutVm = new AboutViewModel();
  constructor(public pageService: PageService) {

  }
}
