import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageService } from 'src/app/services';

import { Entries } from '../entries/entries';
import { PostMetadata } from '../entries/post-metadata';

interface BlogEntry extends PostMetadata {
  path: string;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {

  public Entries: BlogEntry[] = Entries.filter(x => x.published);

  constructor(private _router: Router, private _pageService: PageService) { }

  navTo(post: BlogEntry) {
    this._router.navigate(['blog', post.path])
  }

  ngOnInit() {
    this._pageService.setTitle("Posts", "")
  }

  ngOnDestroy(): void {
    this._pageService.clear();
  }
}
