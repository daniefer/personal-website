import { Component, OnInit, Injector, ComponentFactory, ComponentFactoryResolver, OnDestroy } from '@angular/core';
import { Route } from '@angular/router';
import { Entries } from '../entries/entries';
import { PostMetadata } from '../entries/post-metadata';
import { PageService } from 'src/services/page.service';

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

  public Entries: BlogEntry[] = Entries.map(r => {
    const ref = this._factory.resolveComponentFactory<PostMetadata>(r.component).create(null)
    return {
      path: r.path,
      title: ref.instance.title
    };
  });

  constructor(private _factory: ComponentFactoryResolver, private _pageService: PageService) { }

  ngOnInit() {
    this._pageService.setTitle("Posts", "")
  }

  ngOnDestroy(): void {
    this._pageService.clear();
  }
}
