import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';






//import { ListGroupsComponent } from './list-groups/list-groups.component';
//import { NavsComponent } from './navs/navs.component';
//import { PaginationsComponent } from './paginations/paginations.component';
//import { PopoversComponent } from './popovers/popovers.component';
//import { ProgressComponent } from './progress/progress.component';
//import { SpinnersComponent } from './spinners/spinners.component';
//import { TablesComponent } from './tables/tables.component';
//import { TooltipsComponent } from './tooltips/tooltips.component';
//import { TabsComponent } from './tabs/tabs.component';
//import { PlaceholdersComponent } from './placeholders/placeholders.component';
import { TraditionalWritingsComponent} from './traditional-writings/traditional-writings.component'
import { Title } from 'chart.js';
import { AiBlogsComponent } from './ai-blogs/ai-blogs.component';
import { PostsComponent } from './posts/posts.component'
import { CategoryComponent } from './category/category.component';
import { SubscribersComponent } from './subscribers/subscribers.component';
import { CommentsComponent } from './comments/comments.component';
import { EditPostComponent } from './edit-post/edit-post.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Base',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login',
      },
      {
        path:'traditionaleritings',
        component:TraditionalWritingsComponent,
        data:{
          title:'Traditional-Writings'
        }


      },
     
      {
        path:'aiblogs',
        component:AiBlogsComponent,
        data:{
          title:'AI-Blogs'

        }

      },
    
     
   
      
     
      // {
      //   path: 'navs',
      //   component: NavsComponent,
      //   data: {
      //     title: 'Navs & Tabs',
      //   },
      // },
      // {
      //   path: 'pagination',
      //   component: PaginationsComponent,
      //   data: {
      //     title: 'Pagination',
      //   },
      // },
      // {
      //   path: 'placeholder',
      //   component: PlaceholdersComponent,
      //   data: {
      //     title: 'Placeholder',
      //   },
      // },
      // {
      //   path: 'popovers',
      //   component: PopoversComponent,
      //   data: {
      //     title: 'Popovers',
      //   },
      // },
      // {
      //   path: 'progress',
      //   component: ProgressComponent,
      //   data: {
      //     title: 'Progress',
      //   },
      // },
      // {
      //   path: 'spinners',
      //   component: SpinnersComponent,
      //   data: {
      //     title: 'Spinners',
      //   },
      // },
      // {
      //   path: 'tables',
      //   component: TablesComponent,
      //   data: {
      //     title: 'Tables',
      //   },
      // },
      // {
      //   path: 'tabs',
      //   component: TabsComponent,
      //   data: {
      //     title: 'Tabs',
      //   },
      // },
      // {
      //   path: 'tooltips',
      //   component: TooltipsComponent,
      //   data: {
      //     title: 'Tooltips',
      //   },
      // },
      {
        path:'post',
        component:PostsComponent,
        data:{
          title:'post'
        }
      },
      {
        path:'category',
        component:CategoryComponent,
        data:{
          title:'category'
        }
      },
      {
        path:'subscribers',
        component:SubscribersComponent,
        data:{
          title:'subscribers'
        }
      },
      {
        path:'comments',
        component:CommentsComponent,
        data:{
          title:'comment'
        }
      },
      {
        path:'edit-post/:id',
        component:EditPostComponent,
        data:{
          title:'comment'
        }
      },
    ],
    
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BaseRoutingModule {}

