import { Route } from '@angular/router';

import { BuildingABlogComponent } from './building-a-blog/building-a-blog.component';
import { LangDabblingComponent } from './lang-dabbling/lang-dabbling.component';

export const Entries: Route[] = [
    {
        path: 'building-a-blog',
        component: BuildingABlogComponent
    },
    {
        path: 'lang-dabbling',
        component: LangDabblingComponent
    },
];