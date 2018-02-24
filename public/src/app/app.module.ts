import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AddAssertFormComponent } from './AddAssertDir/add-assert-form/add-assert-form.component';
import { AssertViewComponent } from './assert-view/assert-view.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HTTPCRUDService } from './HTTPCrudClient/http.crud.service';
import { FormsModule } from '@angular/forms';


const appRoutes: Routes = [
  { path: 'assert-form', component: AddAssertFormComponent },
  { path: 'assert-view', component: AssertViewComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AddAssertFormComponent,
    AssertViewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes , { enableTracing: false }),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    HTTPCRUDService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
