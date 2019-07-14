import { BuildingABlogComponent } from './building-a-blog/building-a-blog.component';
import { LangDabblingComponent } from './lang-dabbling/lang-dabbling.component';
import { PostMetadata } from './post-metadata';

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