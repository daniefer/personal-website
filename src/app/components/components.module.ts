import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconLinkComponent } from './icon-link/icon-link.component';

const components: any[] = [
  IconLinkComponent
]

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  exports: [
    ...components,

  ]
})
export class ComponentsModule { }
