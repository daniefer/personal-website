import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import * as ExportedComponents from '.';
import { RecentPostsComponent } from './recent-posts/recent-posts.component';
import { SideProjectsComponent } from './side-projects/side-projects.component';
import { ServicesModule } from '../services/services.module';

const components: any[] = [
  ExportedComponents.CardComponent,
  ExportedComponents.IconLinkComponent
]

@NgModule({
  declarations: [...components, RecentPostsComponent, SideProjectsComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ServicesModule,
  ],
  exports: [
    ...components,
  ]
})
export class ComponentsModule { }
