import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UserComponent} from './user/user.component';
import {FormComponent} from './user/form/form.component';
import {ListComponent} from './user/list/list.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {UsersService} from './user/users.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    FormComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
