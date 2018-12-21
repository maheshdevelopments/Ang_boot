import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { NavComponent } from './nav/nav.component';
import { Routes, RouterModule } from '@angular/router';
import {MatToolbarModule, MatFormFieldModule, MatCardModule, MatButtonModule,MatInputModule } from '@angular/material';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';





@NgModule({
  imports:      [ BrowserModule, HttpModule, BrowserAnimationsModule,FormsModule,AppRoutingModule,ReactiveFormsModule,HttpClientModule
, MatToolbarModule, MatFormFieldModule, MatCardModule, MatButtonModule, MatInputModule  ],
  declarations: [ AppComponent, HelloComponent, LoginComponent, HomeComponent, RegistrationComponent, NavComponent, AboutComponent ],
  bootstrap:    [ AppComponent ],
  providers: [AuthService,AuthGuard]
})
export class AppModule { }

