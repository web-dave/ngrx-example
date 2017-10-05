import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';

import { StoreModule } from '@ngrx/store';
import { chatReducer } from './redux/chat.reducer';
import { InfoModule } from './info/info.module';


@NgModule({
  declarations: [
    AppComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({chat: chatReducer}),
    InfoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
