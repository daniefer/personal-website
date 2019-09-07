import { Route } from '@angular/router';

import { BuildingABlogComponent } from './building-a-blog/building-a-blog.component';
import { LangDabblingComponent } from './lang-dabbling/lang-dabbling.component';

export const Entries: Array<Route & { enabled: boolean }> = [
    {
        path: 'building-a-blog',
        component: BuildingABlogComponent,
        enabled: true
    },
    {
        path: 'lang-dabbling',
        component: LangDabblingComponent,
        enabled: false
    },
];
