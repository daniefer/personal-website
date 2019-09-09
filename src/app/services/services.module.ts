import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import * as ExportedServices from '.';

const exported: any[] = [
  ExportedServices.PageService
]

@NgModule({
  declarations: [
  ],
  providers: [
    ...exported
  ],
  imports: [
    CommonModule
  ]
})
export class ServicesModule { }
