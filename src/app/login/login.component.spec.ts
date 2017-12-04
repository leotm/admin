import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';

import { UserService } from '../user.service';

import { AppComponent } from'../app.component';
import { LoginComponent } from '../login/login.component';
import { EditComponent } from '../edit/edit.component';
import { AddComponent } from '../add/add.component';
import { PanelComponent } from '../panel/panel.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

import { ToAsteriskPipe } from '../to-asterisk.pipe';

import { APP_BASE_HREF } from '@angular/common';

describe('LoginComponent (WIP)', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

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
        HttpClientModule,
        AppRoutingModule
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue : '/' },
        UserService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as heading 'Login'`, async(() => {
    const fixture = TestBed.createComponent(LoginComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.heading).toEqual('Login');
  }));
});
