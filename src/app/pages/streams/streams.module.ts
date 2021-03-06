import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { StreamsPage } from './streams.page';

const routes: Routes = [
  {
    path: '',
    component: StreamsPage,
  },
  { path: 'post/:id', loadChildren: '../comments/comments.module#CommentsPageModule' }

];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [StreamsPage]
})
export class StreamsPageModule { }
