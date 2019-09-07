import { Component, OnInit } from '@angular/core';
import { PostMetadata } from '../post-metadata';
import { PageService } from 'src/services/page.service';

@Component({
  selector: 'app-building-a-blog',
  templateUrl: './building-a-blog.component.html',
  styleUrls: ['../../blog.shared.scss', './building-a-blog.component.scss']
})
export class BuildingABlogComponent implements OnInit {

  constructor(private _pageService: PageService) { }

  ngOnInit() {
    this._pageService.setTitle(
      'Building a blog with Angular',
      'The journey to building a simple static single page blog'
    );

  }

}
