import { Route } from '@angular/router';

import { BuildingABlogComponent } from './building-a-blog/building-a-blog.component';
import { LangDabblingComponent } from './lang-dabbling/lang-dabbling.component';
import { PostMetadata } from './post-metadata';

export const Components = [
    BuildingABlogComponent,
    LangDabblingComponent
]

export const Entries: Array<Route & PostMetadata> = [
    {
        path: 'building-a-blog',
        component: BuildingABlogComponent,
        published: true,
        title: 'Blogging with ng',
        description: 'Some high level thoughts about blogging with Angular'
    },
    {
        path: 'lang-dabbling',
        component: LangDabblingComponent,
        published: false,
        title: '',
        description: ''
    },
];
