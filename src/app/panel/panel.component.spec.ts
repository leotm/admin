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

describe('Panel', () => {
  let component: PanelComponent;
  let fixture: ComponentFixture<PanelComponent>;

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
    fixture = TestBed.createComponent(PanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

    it(`should have the heading 'Admin panel'`, async(() => {
    const fixture = TestBed.createComponent(PanelComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.heading).toEqual('Admin panel');
  }));

  it('should have the note service injected', async(() => {
    const fixture = TestBed.createComponent(PanelComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.userService).toBeTruthy();
  }));

  it('should render the table', async(() => {
    const fixture = TestBed.createComponent(PanelComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('table')).toBeTruthy();
  }));
});
