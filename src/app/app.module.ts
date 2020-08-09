import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardHeaderComponent } from './components/card-header/card-header.component';
import { CardMainComponent } from './components/card-main/card-main.component';
import { FooterComponent } from './components/footer/footer.component';
import { InputComponent } from './components/input/input.component';
import { ItemComponent } from './components/item/item.component';
import { ListComponent } from './components/list/list.component';
import { MapComponent } from './components/map/map.component';

/* http */
import { HttpClientModule } from '@angular/common/http';
/* forms */
import{ ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CardHeaderComponent,
    CardMainComponent,
    FooterComponent,
    InputComponent,
    ItemComponent,
    ListComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
