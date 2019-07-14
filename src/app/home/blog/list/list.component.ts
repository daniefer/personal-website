import { Component, ComponentFactoryResolver, OnDestroy, OnInit } from '@angular/core';
import { PageService } from 'src/services/page.service';

import { EntryMetadata } from '../entries/entries';
import { PostMetadata } from '../entries/post-metadata';
import { Router } from '@angular/router';

interface BlogEntry {
  path: string;
  title: string;
  teaser?: string;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {

  public Entries: BlogEntry[] = EntryMetadata.filter(x => x.published).map(x => {
    return {
      path: x.path,
      title: x.title,
      description: x.description
    };
  });

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
