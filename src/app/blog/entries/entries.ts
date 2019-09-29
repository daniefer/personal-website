import { Route } from '@angular/router';

import { BuildingABlogComponent } from './building-a-blog/building-a-blog.component';
import { LangDabblingComponent } from './lang-dabbling/lang-dabbling.component';
import { PostMetadata } from './post-metadata';
import { ForayIntoBakingComponent } from './foray-into-baking/foray-into-baking.component';

export const Components = [
    BuildingABlogComponent,
    LangDabblingComponent,
    ForayIntoBakingComponent
]

export const Entries: Array<Route & PostMetadata & { path: string }> = [
    {
        path: 'foray-into-baking',
        component: ForayIntoBakingComponent,
        published: true,
        title: ForayIntoBakingComponent.title,
        description: ForayIntoBakingComponent.description,
        publishDate: '2019-09-29',
        image: 'assets/blog/entries/foray-into-baking/splash-screen.jpg',
        imagePlaceholderText: 'two loafs of bread',
    },
    {
        path: 'building-a-blog',
        component: BuildingABlogComponent,
        published: true,
        title: 'Blogging with ng',
        description: 'Some high level thoughts about blogging with Angular',
        image: 'assets/blog/entries/building-a-blog/splash-screen.jpg',
        imagePlaceholderText: 'Books pinned to a wall',
        publishDate: '2019-8-9'
    },
    {
        path: 'lang-dabbling',
        component: LangDabblingComponent,
        published: false,
        title: '',
        description: '',
        image: '',
        imagePlaceholderText: '',
        publishDate: ''
    },
];
