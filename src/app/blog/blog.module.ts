import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { BlogComponent } from './entry/blog.component';
import { ListComponent } from './list/list.component';
import { Components } from './entries/entries';
import { BlogRoutingModule } from './blog-routing.module';

@NgModule({
  declarations: [
    BlogComponent,
    ListComponent,
    ...Components//.filter(r => r.published && !!r.component).map(r => r.component)
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    BlogRoutingModule
  ],
  exports: [

  ]
})
export class BlogModule { }
