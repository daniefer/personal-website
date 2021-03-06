import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BlogComponent } from './entry/blog.component';
import { ListComponent } from './list/list.component';
import { Entries } from './entries/entries';

const routes: Routes = [
    {
        path: 'blog',
        component: BlogComponent,
        children: [
            ...Entries,
            {
                path: '',
                component: ListComponent
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BlogRoutingModule { }