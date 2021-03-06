import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ComponentsModule } from '../components/components.module';
import { AboutComponent } from './about/about.component';

import { NotFoundComponent } from './error-pages/not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { MainRoutingModule } from './main-routing.module';
import { ServicesModule } from '../services/services.module';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    ServicesModule,
    ComponentsModule,
    MainRoutingModule
  ]
})
export class MainModule { }
