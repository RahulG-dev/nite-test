import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TypelistComponent } from './typelist/typelist.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BooklistComponent } from './booklist/booklist.component';

@NgModule({
  declarations: [
    AppComponent,
    TypelistComponent,
    BooklistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
