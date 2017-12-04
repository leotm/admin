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

describe('EditComponent (WIP)', () => {
  let component: EditComponent;
  let fixture: ComponentFixture<EditComponent>;

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
    fixture = TestBed.createComponent(EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // [object ErrorEvent] thrown
  //  See: https://github.com/karma-runner/karma/issues/2852

  // it('should be created', () => {
  //   expect(component).toBeTruthy();
  // });

  // it(`should have the heading 'Edit user'`, async(() => {
  //   const fixture = TestBed.createComponent(EditComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.heading).toEqual('Edit user');
  // }));

  // it('should have the user service injected', async(() => {
  //   const fixture = TestBed.createComponent(EditComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.userService).toBeTruthy();
  // }));

  // it('should have the router injected', async(() => {
  //   const fixture = TestBed.createComponent(EditComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.router).toBeTruthy();
  // }));

  // it('should have a spy that tracks that the spy was called', async(() => {
  //   const fixture = TestBed.createComponent(AddComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   console.log(app);
  //   spyOn(app, 'addUSer');
  //   expect(app.addUser).toHaveBeenCalled();
  // }));
});
