import { Route } from '@angular/router';

import { BuildingABlogComponent } from './building-a-blog/building-a-blog.component';
import { LangDabblingComponent } from './lang-dabbling/lang-dabbling.component';
import { PostMetadata } from './post-metadata';

export const Entries: Route[] = [
    {
        path: 'building-a-blog',
        component: BuildingABlogComponent,
    },
    {
        path: 'lang-dabbling',
        component: LangDabblingComponent
    },
];

export const EntryMetadata: PostMetadata[] = [
    {
        path: 'building-a-blog',
        component: BuildingABlogComponent,
        published: true,
        title: 'Blogging with ng',
        description: '',
    },
    {
        path: 'lang-dabbling',
        component: LangDabblingComponent,
        published: false,
        title: '',
        description: '',
    },
];