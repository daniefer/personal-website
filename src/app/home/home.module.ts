import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ComponentsModule } from '../components/components.module';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { BuildingABlogComponent } from './blog/entries/building-a-blog/building-a-blog.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './blog/list/list.component';
import { NotFoundComponent } from './error-pages/not-found/not-found.component';
import { LangDabblingComponent } from './blog/entries/lang-dabbling/lang-dabbling.component';

const blogEntries = [
  BuildingABlogComponent,
  LangDabblingComponent
]

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    BlogComponent,
    ListComponent,
    NotFoundComponent,
    ...blogEntries,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
