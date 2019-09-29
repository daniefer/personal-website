import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ComponentsModule } from '../components/components.module';
import { ServicesModule } from '../services/services.module';
import { BlogRoutingModule } from './blog-routing.module';
import { Components as Entries } from './entries/entries';
import { BlogComponent } from './entry/blog.component';
import { ListComponent } from './list/list.component';
import { ForayIntoBakingComponent } from './entries/foray-into-baking/foray-into-baking.component';

@NgModule({
  declarations: [
    BlogComponent,
    ListComponent,
    ...Entries,
    ForayIntoBakingComponent
  ],
  imports: [
    CommonModule,
    ServicesModule,
    ComponentsModule,
    BlogRoutingModule
  ],
  exports: [

  ]
})
export class BlogModule { }
