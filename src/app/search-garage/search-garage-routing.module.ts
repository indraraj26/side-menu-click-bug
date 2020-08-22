import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchGaragePage } from './search-garage.page';

const routes: Routes = [
  {
    path: '',
    component: SearchGaragePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchGaragePageRoutingModule {}
