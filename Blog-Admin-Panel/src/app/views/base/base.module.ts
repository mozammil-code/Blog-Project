import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { HttpClientModule } from '@angular/common/http';


// CoreUI Modules
import {
  ModalModule,
  AccordionModule,
  BadgeModule,
  BreadcrumbModule,
  ButtonModule,
  CardModule,
  CarouselModule,
  CollapseModule,
  DropdownModule,
  FormModule,
  GridModule,
  ListGroupModule,
  NavModule,
  PaginationModule,
  PlaceholderModule,
  PopoverModule,
  ProgressModule,
  SharedModule,
  SpinnerModule,
  TableModule,
  //TabsModule,
  //TooltipModule,
  UtilitiesModule
} from '@coreui/angular';

import { IconModule } from '@coreui/icons-angular';

// utils
//import { DocsComponentsModule } from '@docs-components/docs-components.module';

// views


//import { CardsComponent } from './cards/cards.component';


//import { ListGroupsComponent } from './list-groups/list-groups.component';
//import { NavsComponent } from './navs/navs.component';
//import { PaginationsComponent } from './paginations/paginations.component';
//import { PlaceholdersComponent } from './placeholders/placeholders.component';
//import { PopoversComponent } from './popovers/popovers.component';
//import { ProgressComponent } from './progress/progress.component';
//import { SpinnersComponent } from './spinners/spinners.component';
//import { TablesComponent } from './tables/tables.component';
// import { TooltipsComponent } from './tooltips/tooltips.component';
// import { TabsComponent } from './tabs/tabs.component';
import { TraditionalWritingsComponent } from './traditional-writings/traditional-writings.component';
import { AiBlogsComponent } from './ai-blogs/ai-blogs.component';

// Components Routing
import { BaseRoutingModule } from './base-routing.module';
import { PostsComponent } from './posts/posts.component';
import { CategoryComponent } from './category/category.component';
import { SubscribersComponent } from './subscribers/subscribers.component';
import { CommentsComponent } from './comments/comments.component';
import { EditPostComponent } from './../base/edit-post/edit-post.component';




@NgModule({
  imports: [
    ModalModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    BaseRoutingModule,
    AccordionModule,
    BadgeModule,
    BreadcrumbModule,
    ButtonModule,
    CardModule,
    CollapseModule,
    GridModule,
    UtilitiesModule,
    SharedModule,
    ListGroupModule,
    IconModule,
    ListGroupModule,
    PlaceholderModule,
    ProgressModule,
    SpinnerModule,
    //TabsModule,
    NavModule,
    //TooltipModule,
    CarouselModule,
    FormModule,
    ReactiveFormsModule,
    DropdownModule,
    PaginationModule,
    PopoverModule,
    TableModule,
    //DocsComponentsModule
    CKEditorModule
  ],
  declarations: [
    
    //CardsComponent,
    
    
    //ListGroupsComponent,
    //NavsComponent,
    //PaginationsComponent,
    //PopoversComponent,
    //ProgressComponent,
    //SpinnersComponent,
    //TablesComponent,
    //TooltipsComponent,
    // TabsComponent,
    //PlaceholdersComponent,
    TraditionalWritingsComponent,
    AiBlogsComponent,
    PostsComponent,
    SubscribersComponent,
    CommentsComponent,
    CategoryComponent,
    EditPostComponent
  ],
})
export class BaseModule {}
