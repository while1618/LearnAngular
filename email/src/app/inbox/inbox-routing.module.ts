import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailPlaceholderComponent } from './email-placeholder/email-placeholder.component';
import { EmailShowComponent } from './email-show/email-show.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: ':id', component: EmailShowComponent },
      { path: '', component: EmailPlaceholderComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InboxRoutingModule {}
