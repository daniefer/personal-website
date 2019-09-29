import { Component, OnInit } from '@angular/core';
import { PageService } from 'src/app/services';

@Component({
  selector: 'app-foray-into-baking',
  templateUrl: './foray-into-baking.component.html',
  styleUrls: ['../../blog.shared.scss', './foray-into-baking.component.scss']
})
export class ForayIntoBakingComponent implements OnInit {
  public static title = 'A foray into baking';
  public static description = 'My long journey towards making bread I am not ashamed of'

  constructor(private _pageService: PageService) { }

  ngOnInit() {
    this._pageService.setTitle(
      ForayIntoBakingComponent.title,
      ForayIntoBakingComponent.description,
    );
  }
}
