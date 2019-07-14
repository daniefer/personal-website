import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconLinkComponent } from './icon-link/icon-link.component';
import { CardComponent } from './card/card.component';
import { RecentPostsComponent } from './recent-posts/recent-posts.component';
import { SideProjectsComponent } from './side-projects/side-projects.component';

const components: any[] = [
  IconLinkComponent,
  CardComponent
]

@NgModule({
  declarations: [...components, RecentPostsComponent, SideProjectsComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  exports: [
    ...components,
  ]
})
export class ComponentsModule { }
