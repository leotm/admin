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

describe('AddComponent', () => {
  let component: AddComponent;
  let fixture: ComponentFixture<AddComponent>;

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
    fixture = TestBed.createComponent(AddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it(`should have the heading 'Add new user'`, async(() => {
    const fixture = TestBed.createComponent(AddComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.heading).toEqual('Add new user');
  }));

  it('should have the note service injected', async(() => {
    const fixture = TestBed.createComponent(AddComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.userService).toBeTruthy();
  }));

  it('should have the note router injected', async(() => {
    const fixture = TestBed.createComponent(AddComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.router).toBeTruthy();
  }));

  // it('should have a spy that tracks that the spy was called', async(() => {
  //   const fixture = TestBed.createComponent(AddComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   console.log(app);
  //   spyOn(app, 'addNote');
  //   expect(app.addNote).toHaveBeenCalled();
  // }));
});
