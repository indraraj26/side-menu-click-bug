import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchGaragePageRoutingModule } from './search-garage-routing.module';

import { SearchGaragePage } from './search-garage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchGaragePageRoutingModule
  ],
  declarations: [SearchGaragePage]
})
export class SearchGaragePageModule {}
