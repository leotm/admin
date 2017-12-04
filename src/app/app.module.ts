import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from'./app.component';
import { LoginComponent } from './login/login.component';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';
import { PanelComponent } from './panel/panel.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { ToAsteriskPipe } from './to-asterisk.pipe';

import { AppRoutingModule } from './app-routing.module';
import { UserService } from './user.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    EditComponent,
    LoginComponent,
    AddComponent,
    PanelComponent,
    PageNotFoundComponent,
    ToAsteriskPipe
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
