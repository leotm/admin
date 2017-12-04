import { TestBed, async, inject } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';

import { AppComponent } from'./app.component';
import { LoginComponent } from './login/login.component';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';
import { PanelComponent } from './panel/panel.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { ToAsteriskPipe } from './to-asterisk.pipe';

import { AppRoutingModule } from './app-routing.module';

import { APP_BASE_HREF } from '@angular/common';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        EditComponent,
        LoginComponent,
        AddComponent,
        PanelComponent,
        PageNotFoundComponent,
        ToAsteriskPipe
      ],
      imports: [
        FormsModule,
        AppRoutingModule
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue : '/' }
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
